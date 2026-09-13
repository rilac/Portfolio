# 임대연 · Backend Engineer Portfolio

제출용 슬라이드 덱 형태의 포트폴리오입니다. 1280×720(16:9) 13장으로 구성되며,
브라우저에서 그대로 열람하거나 **PDF로 저장** 버튼으로 13장 전체를 PDF로 내려받을 수 있습니다.

- 배포: https://rilac.github.io/Portfolio/
- 방향키(← →)로 슬라이드 이동

## 구성

| # | 슬라이드 |
|---|---|
| 1 | Cover |
| 2 | Profile & Tech Stack (한 줄 소개 · 학력 · 자격 · 활동 · 기술 스택) |
| 3 | Projects Overview (4개 프로젝트 · 기간 / 팀 규모 / 내 역할) |
| 4–5 | 엔테나 — 서비스·아키텍처 / 문제 해결 |
| 6–7 | MoToK — 서비스·아키텍처 / 문제 해결 |
| 8–9 | 안심식탁 — 서비스·데이터 / 인증·AI 설계 |
| 10 | SSAFY SOOP — 1인 기획·개발·배포·운영 |
| 11 | 회고 ① — 못한 것과 한계 |
| 12 | 회고 ② — 배운 것과 팀에 남긴 것 (강의 5편 풀 링크) |
| 13 | Closing |

## 파일 구조

```
index.html                 슬라이드 13장 (마크업)
assets/css/deck.css        디자인 시스템 · 슬라이드 레이아웃
assets/js/deck.js          슬라이드 네비게이션 · PDF 내보내기(html2canvas + jsPDF)
assets/img/shots/          프로젝트 실제 동작 화면 (1500px JPEG로 리사이즈)
assets/img/diagrams/       아키텍처 다이어그램
assets/img/tech/           기술 스택 아이콘 (devicon / simple-icons SVG)
assets/img/profile.jpg     커버 프로필 사진
screenshots/               원본 스크린샷 (배포 대상 아님 · .gitignore 대상 검토)
지침/                       포트폴리오 작성 지침 · 참고 자료 (배포 대상 아님)
```

## 원칙

포트폴리오에 적은 수치와 기여 내용은 각 프로젝트 레포의 **코드·커밋에서 직접 확인한 것**만 사용했습니다.
측정 기록이 없는 항목(커버리지, 부하 테스트 결과, 동시접속 수 등)은 쓰지 않았습니다.
