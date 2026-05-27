# 임대연 포트폴리오

Pure HTML, CSS, Vanilla JavaScript로 구현한 정적 포트폴리오 사이트입니다.

배포: <https://rilac.github.io/Portfolio/>

## 실행

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`으로 접속합니다.

## 폴더 구조

```
portfolio/
├── index.html                 # 메인 원페이지 포트폴리오
├── favicon.svg                # 사이트 아이콘
├── robots.txt                 # 검색 엔진 크롤링 가이드
├── sitemap.xml                # 사이트맵
├── .nojekyll                  # GitHub Pages Jekyll 처리 비활성화
│
├── projects/                  # 프로젝트 상세 페이지 (4개)
│   ├── ssafy-blind.html
│   ├── ssafy-spring-study.html
│   ├── sangmyung-wiki.html
│   └── bootblog.html
│
├── data/
│   └── projects.json          # 메인 카드 렌더링 데이터
│
├── assets/
│   ├── css/                   # 디자인 토큰 · 컴포넌트 · 섹션 스타일
│   ├── js/                    # 다크모드 · 네비 · 프로젝트 · 애니메이션 · 이메일 모달
│   ├── img/                   # 프로필 이미지 · 프로젝트 썸네일 (확장 예정)
│   └── files/                 # 다운로드 자산 (PDF · PPTX)
│       ├── 임대연_이력서.pdf
│       ├── 임대연_포트폴리오.pdf
│       ├── bootblog-deck.pptx
│       └── sangmyung-wiki-deck.pptx
│
├── print/
│   └── portfolio-print.html   # 포트폴리오 PDF 생성용 단일 페이지 (A4 인쇄 최적화)
│
├── _notion-source/            # 로컬 보관용 Notion 원본 자료 (gitignored)
│
├── PLAN.md                    # 초기 기획 문서
└── README.md
```

## PDF 재생성

포트폴리오 PDF를 갱신하려면 `print/portfolio-print.html`을 수정한 뒤:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="assets/files/임대연_포트폴리오.pdf" \
  --virtual-time-budget=10000 \
  "file://$(pwd)/print/portfolio-print.html"
```

이력서 PDF는 외부에서 별도로 작성한 뒤 `assets/files/임대연_이력서.pdf`로 덮어쓰기만 하면 됩니다.

## 배포

`main` 브랜치에 push하면 GitHub Pages가 자동 배포합니다 (1~2분 소요).

레포 이름이 바뀌거나 커스텀 도메인을 연결하면 HTML 5개, `robots.txt`, `sitemap.xml`의 URL을 일괄 치환하세요:

```bash
grep -rl "rilac.github.io/Portfolio" . | xargs sed -i '' 's|rilac.github.io/Portfolio|실제도메인|g'
```
