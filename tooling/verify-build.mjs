import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const output = resolve('public');
const domain = readFileSync('source/CNAME', 'utf8').trim();
const origin = `https://${domain}`;

function requireFile(path) {
  if (existsSync(path) && statSync(path).isFile()) return;
  throw new Error(`생성 파일이 없습니다: ${path}`);
}

function collectHtml(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return collectHtml(path);
    if (!entry.name.endsWith('.html')) return [];
    return [path];
  });
}

function verifyReference(reference, page) {
  if (!reference || reference.startsWith('#')) return;
  const url = new URL(reference.replaceAll('&amp;', '&'), new URL(page, origin));
  if (url.origin !== origin) return;
  const target = join(output, decodeURIComponent(url.pathname));
  if (existsSync(target) && statSync(target).isDirectory()) {
    requireFile(join(target, 'index.html'));
    return;
  }
  requireFile(target);
}

requireFile(join(output, 'index.html'));
requireFile(join(output, 'about/index.html'));
requireFile(join(output, 'CNAME'));
if (readFileSync(join(output, 'CNAME'), 'utf8').trim() !== domain) {
  throw new Error('생성 결과의 CNAME이 배포 도메인과 다릅니다.');
}

const pages = collectHtml(output);
for (const path of pages) {
  const page = path.slice(output.length).replace(/index\.html$/, '');
  const html = readFileSync(path, 'utf8');
  for (const match of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/g)) {
    verifyReference(match[1], page);
  }
}
console.log(`${pages.length}개 페이지의 내부 링크와 도메인을 확인했습니다.`);
