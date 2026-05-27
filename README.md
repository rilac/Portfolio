# 임대연 포트폴리오

Pure HTML, CSS, Vanilla JavaScript로 구현한 정적 포트폴리오 사이트입니다.

## 실행

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`으로 접속합니다.

## 구조

- `index.html`: 메인 원페이지 포트폴리오
- `projects/`: 프로젝트 상세 페이지 4개
- `portfolio-print.html`: 인쇄/PDF 전용 단일 페이지 (PDF 생성 소스)
- `data/projects.json`: 메인 페이지 프로젝트 카드 데이터
- `assets/css/`: 디자인 토큰, 기본 스타일, 컴포넌트, 섹션 스타일
- `assets/js/`: 다크모드, 네비게이션, 프로젝트 렌더링, 스크롤 애니메이션
- `assets/files/`: 발표자료(PPTX) · 이력서 · 포트폴리오 PDF 다운로드 파일
- `robots.txt`, `sitemap.xml`: 검색 엔진 크롤링 가이드

## PDF 재생성

콘텐츠를 수정한 뒤 포트폴리오 PDF를 갱신하려면 (`portfolio-print.html`도 함께 업데이트한 상태로):

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="assets/files/임대연_포트폴리오.pdf" \
  --virtual-time-budget=10000 \
  "file://$(pwd)/portfolio-print.html"
```

이력서 PDF는 외부에서 별도로 작성한 뒤 `assets/files/임대연_이력서.pdf`로 덮어쓰기만 하면 됩니다.

## 배포

GitHub Pages에서 루트 디렉터리를 배포 대상으로 설정하면 됩니다. 배포 도메인이 확정되면 5개 HTML과 `robots.txt`, `sitemap.xml`의 `https://rilac.github.io/portfolio/` URL을 실제 도메인으로 일괄 치환하세요.

```bash
grep -rl "rilac.github.io/portfolio" . | xargs sed -i '' 's|rilac.github.io/portfolio|실제도메인|g'
```
