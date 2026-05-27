# 📋 Implementation Plan: 임대연 포트폴리오 웹사이트

> Pure HTML + CSS + Vanilla JavaScript 기반 정적 포트폴리오 사이트 구현 계획서
> 최종 확정일: 2026-05-27

---

## 1. 프로젝트 개요

- **목적**: 노션에서 export한 포트폴리오 콘텐츠를 정적 웹사이트로 재구성하여 배포
- **기술 제약**: Pure HTML + CSS + Vanilla JavaScript (프레임워크/빌드도구 사용 X)
- **언어**: 한국어 우선
- **디자인 톤**: 깔끔하고 미니멀한 개발자 포트폴리오 (백엔드 주력 + 풀스택)
- **배포**: GitHub Pages

### 콘텐츠 소스
- 메인 자기소개 PDF (1.2MB)
- 프로젝트 4건의 노션 export PDF (BootBlog, Sangmyung_Wiki, SSAFY_BLIND, SSAFY Spring 스터디)
- 발표 자료 2건 (`SpringProject__.pptx`, `상명위키_발표자료-1.pptx`)
- 프로젝트 메타데이터 CSV
- 프로필 이미지 (`증사.jpg`)

---

## 2. PDF에서 추출한 핵심 정보 (검증 완료)

### 연락처 / 링크
- **Email**: `eodos6480@gmail.com`
- **GitHub**: `https://github.com/rilac`
- **Tech Blog (Velog)**: `https://velog.io/@asd990702/posts`
- **백준 알고리즘**: `https://www.acmicpc.net/user/asd990702`

### 프로젝트 GitHub 레포 (4개 모두 확보)

| 프로젝트 | 레포 URL |
|---------|---------|
| BootBlog | `https://github.com/rilac/bootblog` |
| SSAFY_BLIND | `https://github.com/rilac/SSAFY_BLIND` |
| Sangmyung_Wiki | `https://github.com/rilac/SangMyung_WIKI` |
| SSAFY Spring 스터디 | `https://github.com/SSAFY-SPRING-STUDY/DaeYeon` (개인 폴더)<br>사이트: `https://www.ssafy-study.site/studies/1` |

### About Me (3가지 핵심 가치)
1. **비즈니스를 이해하는 개발자** — 경영학·컴퓨터학 복수전공
2. **함께 성장하는 개발자** — SSAFY 20명 규모 스터디 공동 운영
3. **"왜?"를 끝까지 파고드는 백엔드 개발자** — Spring AOP 프록시 동작 원리까지 디버깅

### Skills (PDF 원문 기반)
- **Backend (Main)**: Java, Spring Boot 3, Spring Security, JPA/Hibernate, Spring AOP
- **Frontend**: React, Vite, JavaScript (ES6+)
- **RDBMS**: MySQL, H2, PostgreSQL
- **DevOps**: AWS EC2, RDS, S3
- **Other**: Kaggle SSAFY AI 챌린지 (Qwen2.5-VL 파인튜닝)

### Certifications / Education
- TOEIC 765 (24.08 ~ 26.08)
- 삼성 SW 역량테스트 A형 (26.04.22)
- 상명대학교 (경영학·컴퓨터과학 복수전공, 2018.03 ~ 2025.09)
- KIC캠퍼스 국비지원교육 6개월 (2023.01.18 ~ 2023.06.28)
- SSAFY 15기 (2026.01 ~ 2026.12 예정, 현재 참여 중)

### SSAFY 스터디 추가 리소스 (강의 영상)
- Day2-1: `https://youtu.be/QTvBdIQksOg`
- Day2-2: `https://youtu.be/-FGd6NYZvqQ`
- Day3: `https://youtu.be/FOwA-AMgENY`
- Day4: `https://youtu.be/Ya7wtZzqJcQ`
- Day5: `https://www.youtube.com/watch?v=35_48r9_AcI`

---

## 3. 정보 구조 (Information Architecture)

### 프로젝트 구성 요약

| # | 프로젝트 | 분류 | 주요 스택 |
|---|---------|------|----------|
| 1 | **SSAFY BLIND** | 개인 사이드 프로젝트 | Spring Boot 3, JPA, JWT, Spring Security, React, Vite, TailwindCSS |
| 2 | **SSAFY Spring 스터디** | 학습 커뮤니티 운영·강의 | Spring Boot (Backend) |
| 3 | **Sangmyung_Wiki** | 졸업 캡스톤 (팀 6명) | React, Spring Boot, MySQL, Docker, AWS EC2 |
| 4 | **BootBlog** | 국비지원 팀프로젝트 (4명) | Spring Boot, Thymeleaf, JS |

### 사이트 섹션 구성 (Single Page + 상세 페이지)

```
┌────────────────────────────────────────┐
│ Header (fixed) — Logo / Nav / 🌙       │
├────────────────────────────────────────┤
│ ① Hero        — 이름 + 한 줄 소개      │
│ ② About       — 프로필 사진 + 자기소개  │
│ ③ Skills      — 기술 스택 카테고리화    │
│ ④ Projects    — 4개 카드 그리드        │
│ ⑤ Activities  — 스터디·교육 활동       │
│ ⑥ Contact     — 이메일/GitHub/Velog    │
├────────────────────────────────────────┤
│ Footer                                  │
└────────────────────────────────────────┘
```

각 프로젝트 카드 클릭 → 상세 페이지로 이동 (PPTX 다운로드 링크 포함, 존재하는 경우만)

---

## 4. 파일 구조

```
portfolio/
├── index.html                # 메인 페이지
├── projects/
│   ├── sangmyung-wiki.html
│   ├── bootblog.html
│   ├── ssafy-spring-study.html
│   └── ssafy-blind.html
├── assets/
│   ├── css/
│   │   ├── reset.css         # CSS 초기화
│   │   ├── variables.css     # 디자인 토큰 (라이트/다크)
│   │   ├── base.css          # 기본 타이포·레이아웃
│   │   ├── components.css    # 버튼·카드·뱃지
│   │   └── main.css          # 섹션별 스타일
│   ├── js/
│   │   ├── nav.js            # 스크롤 네비/active 표시
│   │   ├── theme.js          # 다크/라이트 토글
│   │   └── animations.js     # IntersectionObserver 페이드인
│   ├── img/
│   │   ├── profile.jpg       # 증사.jpg → 가공/리네이밍
│   │   └── projects/         # 각 프로젝트 썸네일
│   └── files/                # ⚠️ PDF 제외, PPTX만 (현 단계)
│       ├── sangmyung-wiki-deck.pptx
│       └── bootblog-deck.pptx
├── data/
│   └── projects.json         # 프로젝트 메타데이터
├── favicon.ico
├── PLAN.md                   # 이 문서
└── README.md
```

**원칙**
- `data/projects.json`을 fetch해서 프로젝트 카드 렌더링 → 추가/수정 용이
- 발표자료(PPTX)는 정적 자산으로 그대로 제공 (다운로드 버튼)
- **SSAFY BLIND·SSAFY Spring 스터디는 PPTX가 없으므로 `slidesPath: null` → 다운로드 버튼 자체를 렌더링하지 않음**
- **PDF 다운로드는 추후 정리된 이력서/포트폴리오 PDF가 준비되면 추가**

---

## 5. 디자인 시스템

### 컬러 토큰 (`variables.css`)

```css
:root {
  /* Light */
  --bg-primary: #FAFAFA;
  --bg-secondary: #FFFFFF;
  --bg-elevated: #F3F4F6;
  --text-primary: #1A1A1A;
  --text-muted: #6B7280;
  --accent: #2563EB;       /* Spring 블루 톤 */
  --border: #E5E7EB;
}

[data-theme="dark"] {
  --bg-primary: #0F0F10;
  --bg-secondary: #18181B;
  --bg-elevated: #27272A;
  --text-primary: #F9FAFB;
  --text-muted: #9CA3AF;
  --accent: #60A5FA;
  --border: #3F3F46;
}
```

### 타이포그래피

- **헤딩**: `Pretendard` (CDN)
- **본문**: 시스템 폰트 스택 (`-apple-system, BlinkMacSystemFont, ...`)
- **코드/스택 뱃지**: `JetBrains Mono` (선택)

### 레이아웃

- 최대 너비 1200px, 모바일 우선 반응형 (`640 / 768 / 1024 / 1280` 브레이크포인트)
- CSS Grid (Projects 섹션), Flexbox (네비·About)
- 충분한 여백 (`8px` 베이스 spacing 스케일)

### 다크모드 동작 (`theme.js`)

1. 페이지 로드 시 `localStorage.theme` 또는 `prefers-color-scheme` 감지
2. `<html data-theme="dark|light">` 속성 토글
3. 헤더 우측 상단에 🌙/☀️ 아이콘 버튼
4. 깜빡임 방지를 위해 `<head>` 내 인라인 스크립트로 즉시 적용

---

## 6. `data/projects.json` 스키마

```json
[
  {
    "id": "ssafy-blind",
    "title": "SSAFY BLIND",
    "tagline": "SSAFY 교육생만 참여할 수 있는 익명 커뮤니티 플랫폼",
    "period": "2026.03 ~",
    "role": "개인 프로젝트 (풀스택)",
    "context": "SSAFY 15기 교육 기간 중 사이드 프로젝트",
    "stack": ["Spring Boot 3", "Spring Security", "JPA", "JWT", "React", "Vite", "TailwindCSS"],
    "repo": "https://github.com/rilac/SSAFY_BLIND",
    "demo": null,
    "slidesPath": null,
    "highlights": [
      "Mattermost API 프록시 + JWT(HttpOnly Cookie) 인증",
      "@RestControllerAdvice 글로벌 예외 처리",
      "AOP 기반 트랜잭션 관리"
    ]
  }
  // ... 나머지 3개
]
```

---

## 7. 🚀 배포 — GitHub Pages

### 옵션 비교

| 옵션 | 비용 | 난이도 | 추천도 | 특징 |
|------|------|--------|--------|------|
| **GitHub Pages** | 무료 | ⭐ 매우 쉬움 | ✅ **추천** | `github.com/rilac` 계정 있음 → `rilac.github.io` 자동 부여, 정적 사이트 전용, CI 없이 push만 |
| Vercel | 무료 | ⭐⭐ 쉬움 | 후보 | Preview URL, Analytics 좋지만 정적 페이지엔 오버킬 |
| Netlify | 무료 | ⭐⭐ 쉬움 | 후보 | 폼 처리 기능 있지만 현 요구사항엔 불필요 |
| Cloudflare Pages | 무료 | ⭐⭐ 쉬움 | 후보 | CDN 빠름, 그러나 GH Pages로 충분 |

### GitHub Pages 추천 이유

1. **계정이 이미 있음** (`rilac`) — 별도 회원가입 불필요
2. **무료 + 무제한** (트래픽 100GB/월, 충분)
3. **URL**: `https://rilac.github.io/portfolio` (또는 별도 레포로 만들면 `https://rilac.github.io`)
4. **개발자 포트폴리오는 GitHub Pages가 사실상 표준** → 면접관에게 친숙
5. 추후 `daeyeon.dev` 같은 커스텀 도메인도 무료로 연결 가능

### 배포 절차 (Phase 7에서 실행)

```bash
1. github.com/rilac/portfolio 레포 생성 (Public)
2. 코드 push (main 브랜치)
3. Settings → Pages → Branch: main, Folder: / (root) → Save
4. 1~2분 후 https://rilac.github.io/portfolio 에서 접속 가능
```

---

## 8. 구현 단계 (Implementation Phases)

| Phase | 내용 | 예상 시간 |
|-------|------|-----------|
| **1** | 자산 정리 — PPTX 2개 리네이밍·복사, 프로필 이미지 가공, `projects.json` 작성 (추출 정보 반영) | 1h |
| **2** | HTML 시맨틱 구조 + `variables.css`(라이트/다크) + `reset.css` + `base.css` | 2h |
| **3** | 컴포넌트 스타일 (`components.css`) + 메인 페이지 6개 섹션 구현 | 3h |
| **4** | Vanilla JS — `theme.js`(다크모드), `nav.js`(스무스 스크롤), `animations.js`(페이드인) + JSON fetch 렌더링 | 2h |
| **5** | 프로젝트 상세 페이지 4개 (공통 템플릿 기반, PPTX 다운로드 버튼은 조건부 렌더) | 2.5h |
| **6** | 접근성·메타태그·favicon·OG·Lighthouse 검증 | 1h |
| **7** | GitHub Pages 배포 + `README.md` 작성 | 30m |

**총 예상: 약 12시간**

---

## 9. 리스크 및 대응

| 우선순위 | 항목 | 대응 |
|---------|------|------|
| MEDIUM | 프로젝트 카드 썸네일 부재 | PPTX 첫 슬라이드 캡처 또는 기술 스택 아이콘으로 대체한 일러스트 카드로 시작 |
| LOW | `증사.jpg`가 정사각형이 아닐 수 있음 | CSS `object-fit: cover` + `border-radius: 50%`로 처리 |
| LOW | SSAFY BLIND / 스터디는 발표자료 없음 | `projects.json`의 `slidesPath: null` → 버튼 숨김 |
| LOW | velog/백준은 일반 링크지만 면접관에게 강점 | About 또는 Contact 섹션에 자연스럽게 노출 |

---

## 10. 최종 확정 사항

- ✅ 한국어 우선
- ✅ 다크모드 (시스템 설정 자동 감지 + 수동 토글)
- ✅ PPTX 다운로드만 (PDF 미포함)
- ✅ 모든 프로젝트 URL 확보 완료 (주석 TODO 없음)
- ✅ GitHub Pages로 배포

### 추후 추가 예정
- 정리된 이력서 PDF 다운로드
- 정리된 포트폴리오 PDF 다운로드
- (선택) 커스텀 도메인 연결
- (선택) 영문 페이지

---

## 11. 진행 방식

- **"진행해줘"** / **"yes"** → Phase 1부터 즉시 시작
- **"수정: [내용]"** → 부분 조정
- **"Phase N만 먼저"** → 단계별로 검토하며 진행
