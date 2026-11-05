# 임대연 · Backend Engineer Portfolio

제출용 슬라이드 덱 형태의 포트폴리오입니다. 1280×720(16:9) 15장으로 구성되며,
브라우저에서 그대로 열람하거나 **PDF로 저장** 버튼으로 15장 전체를 PDF로 내려받을 수 있습니다.

- 배포: https://rilac.github.io/Portfolio/
- 방향키(← →)로 슬라이드 이동

## 구성

| # | 슬라이드 |
|---|---|
| 1 | Cover |
| 2 | Profile & Tech Stack (한 줄 소개 · 학력 · 자격 · 활동 · 기술 스택) |
| 3 | Projects Overview (4개 프로젝트 · 기간 / 팀 규모 / 내 역할) |
| 4–6 | 엔테나 — 프로젝트 소개 / 아키텍처·담당한 기능 / 트러블슈팅 |
| 7–8 | MoToK — 프로젝트 소개·담당한 기능 / 트러블슈팅 |
| 9–10 | 안심식탁 — 프로젝트 소개·담당한 기능 / 인증 설계·AI 사용 원칙 |
| 11–12 | SSAFY SOOP — 프로젝트 소개·담당한 기능 / 트러블슈팅 |
| 13 | 회고 ① — 못한 것과 한계 |
| 14 | 회고 ② — 배운 것과 팀에 남긴 것 |
| 15 | Closing |

## 파일 구조

```
index.html                 슬라이드 15장 (마크업)
assets/css/deck.css        디자인 시스템 · 슬라이드 레이아웃
assets/js/deck.js          슬라이드 네비게이션 · PDF 내보내기(html2canvas + jsPDF)
assets/img/shots/          프로젝트 실제 동작 화면 (1500px JPEG로 리사이즈)
assets/img/diagrams/       아키텍처 다이어그램
assets/img/tech/           기술 스택 아이콘 (devicon / simple-icons SVG)
assets/img/profile.jpg     커버 프로필 사진
```

## 원칙

계산 기준이 필요한 수치는 해당 슬라이드에 기준과 시점을 적었습니다.
측정하지 못한 항목(커버리지, 부하 테스트 결과, 동시접속 수 등)은 측정하지 못했다고 적었습니다.
