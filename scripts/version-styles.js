const { createHash } = require('node:crypto');

async function readRoute(stream) {
  let content = '';
  for await (const chunk of stream) content += chunk.toString();
  return content;
}

hexo.extend.filter.register('after_generate', async () => {
  const css = hexo.route.get('css/main.css');
  if (!css) return;
  const version = createHash('sha256').update(await readRoute(css)).digest('hex').slice(0, 12);

  for (const path of hexo.route.list()) {
    if (!path.endsWith('.html')) continue;
    const html = await readRoute(hexo.route.get(path));
    hexo.route.set(path, html.replace(/(href=["'][^"']*\/css\/main\.css)(?:\?[^"']*)?(["'])/g, `$1?v=${version}$2`));
  }
});
