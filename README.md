# chunwoolee.com

Hexo와 NexT 테마로 구성한 이춘우의 개인 사이트입니다.

## 로컬 실행

Node.js 22를 사용합니다. 처음 복제할 때는 테마 서브모듈도 가져옵니다.

```bash
git submodule update --init --recursive
npm ci
npm run server
```

## 빌드 및 배포

```bash
npm run build
npm run verify
```

`public/`에 생성한 사이트를 GitHub Pages에 배포합니다. `main` 변경 시 배포하고, PR에서는 빌드와 내부 링크를 검사합니다. 저장소의 Pages 설정에서 배포 소스를 GitHub Actions로 지정하고, 사용자 지정 도메인을 `chunwoolee.com`으로 설정합니다.

무료 계정은 공개 저장소에서 GitHub Pages를 사용할 수 있습니다. 비공개 저장소의 Pages 배포에는 지원되는 유료 요금제가 필요합니다.

## 콘텐츠 수정

- 소개: `source/about/index.md`
- 홈: `source/index.md`
- 프로젝트: `source/projects/index.md`
- 글: `source/_posts/`
- 사이트 정보: `_config.yml`
- 화면 설정: `_config.next.yml`
- 배포 도메인: `source/CNAME`과 GitHub Pages 설정

빌드 후 `npm run verify`로 생성된 페이지, 내부 링크, 도메인 파일을 확인합니다.

콘텐츠는 2026년 10월 9일 기준 이력서의 경력·프로젝트·기술 정보로 갱신했습니다. 기존 글의 영구 링크와 아카이브는 유지하며 글 목록은 `/blog/`에서 제공합니다.
