# 

**## 📑 프로젝트 소개**

WANTED & CODESTATES 프리온보딩 코스

변건오 넥슨코리아 개인 과제 입니다.

<br>

**### < 넥슨코리아 >**

PROJECT PERIOD: 2022.03.21 ~ 2022.03.25

<br>

[배포링크](wanted-codestates-project-9-guno517.netlify.app)

<br>

**# 카트 OpenAPI를 이용한 전적 검색 사이트 개발**

**### 필수 조건**

1. React 프레임워크 사용하여 SPA로 구현

2. 두 종류 이상의 그레프 포함 필수
  - 개인 전적 조회 페이지의 pie graph와 line graph
  - 랭킹 페이지의 pie graph

3. 다섯 종류 이상의 애니메이션 포함 필수
  - 상단 Nav 바 아이템과 serach bar hover시 색 변화
  - 홈 화면 Search bar와 캐릭터 애니메이션
  - 랭킹 페이지의 가이드 버튼 클릭 시 캐릭터 움직임 애니메이션
  - 랭킹 페이지와 개인 전적 조회 페이지의 pie graph 채워지는 애니메이션
  - 개인 전적 조회 페이지의 매칭하기 배경 애니메이션

4. 하나 이상의 vanila script로 만들어진 모듈 구현

**## ✨ 주요 기능**

[상단 Tab bar]
  - Click을 통해 각각의 Tab으로 이동할 수 있습니다. Tab hover시 애니메이션을 넣습니다.
  - Search bar를 통해 유저 닉네임을 입력 후, Search Icon을 클릭해 해당 유저의 전적 조회 페이지로 넘어갑니다.

[메인 페이지]
  - 화면 렌더링 시에 유저 검색 Form과 양쪽 캐릭터 사진에게 애니메이션을 넣었습니다.
  - 유저 닉네임을 검색 시 해당 유저의 전적 조회 페이지로 넘어갑니다. (Enter키와 TMI 버튼을 통해 검색 가능합니다.)

[개인 전적 조회 페이지]
  - Loading indicator
  - 닉네임 검색을 통한 개인 전적 조회
  - radial-gradient, conic-gradient를 통한 pie chart 구현
  - chart.js 라이브러리를 통한 line graph 구현
  - 응원 한마디 (localStorage 사용)
  - 플레이한 트랙, 카트 리스트 조회
  - 플레이한 게임의 시간, 랭크, 트랙, 카트 및 같이 플레이한 유저 조회
  - 전적 상세 보기에 있는 유저 닉네임 클릭을 통해 해당 유저 전적 조회

[랭킹 페이지]
  - 랭킹 가이드 모달 창 구현
  - 랭킹 페이지 레이아웃 구현

<br>

**### 🧔 구성 페이지**

<br>

1. 메인 화면

<br>

2. 랭킹

<br>

3. 전적 검색

<br>

**## 🛠 사용 기술**
---
front-end

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

dev-ops

![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
