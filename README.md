# TutorLink - front
### (230713 기준, 진행 중인 프로젝트 입니다. 프론트엔드 레이아웃 작업 완료 by 다정)

## Description
1명의 프론트엔드, 1명의 백엔드 개발자의 팀 프로젝트!

💬 React.js, Sass, styled-components, TypeScript, Axios, StompJs, SockJS를 활용하여 과외방 개설 및 양방향 통신 수업(채팅, 화면 공유) 등을 구현한 과외 사이트입니다. 

<p align="center">
 <img src="https://github.com/TeamTutorLink/TutorLink-front/assets/124070996/bdc1a70f-1951-4e82-a9d5-10327c3441ca"/>
  </p>
<br/>


## Contributors 
|이름|맡은 파트|github|
|---|---|---|
|김다정|로고 및 심볼 디자인, UI/UX 디자인, 프론트 단독으로 모든 기능 구현|[다정 github](https://github.com/danakim530)|
|하지웅|UI/UX 디자인|[지웅 github](https://github.com/hajiung25)|

|번호|페이지명|대표 기능|
|---|---|---|
|1|메인페이지|반응형, 플로팅 버튼, 캐로셀, 좋아요 기능, 페이지네이션 |
|2|검색페이지|검색결과화면, 검색 시, 추천키워드 생성|
|3|클래스페이지|화면 공유, 채팅, 화면 드로잉|
|4|클래스생성페이지|방 비밀번호 유효성 검사, 토글, 셀렉터, 태그 생성, 이미지 삽입(Drag and Drop)|
|5|로그인페이지|JWT토큰 관리(Refresh Token), 소셜로그인(카카오)|
|6|마이페이지|클래스별 정렬|
|7|404 에러페이지|레이아웃|
|8|헤더, 풋터|사이드 메뉴바, 로그인/비로그인 사용자 구분|
<br/>
<br/>

## Features
### [초기 TutorLink 화면 구성도](https://www.figma.com/file/KjsdlbAycJH5oKaelvqmi8/Untitled?type=design&node-id=101-1399&mode=design)

### 메인 페이지
(레이아웃 완성)
<p align="center">
 <img src="https://github.com/TeamTutorLink/TutorLink-front/assets/124070996/bdc1a70f-1951-4e82-a9d5-10327c3441ca"/>
  </p>
<br/>

### 클래스 페이지
(레이아웃 완성)
<p align="center">
  <img src="https://github.com/TeamTutorLink/TutorLink-front/assets/124070996/e931b402-f1c2-47e7-95d9-6002b29797bd"/>
</p>
<br/>

### 클래스 생성 페이지
(레이아웃 완성)
<p align="center">
  <img src="https://github.com/TeamTutorLink/TutorLink-front/assets/124070996/5c0bbd98-32e0-44f9-b22b-453c6dfd5ecb"/>
</p>
<br/>

### 검색 페이지
(레이아웃 완성)
<p align="center">
  <img src="https://github.com/TeamTutorLink/TutorLink-front/assets/124070996/312e5c02-070a-4f7f-93a5-1e2413b4265e"/>
</p>
<br/>

### 로그인 페이지
(레이아웃 완성)
<p align="center">
  <img src="https://github.com/TeamTutorLink/TutorLink-front/assets/124070996/a7a9cc92-8672-4e2c-b079-f53723bbc53e"/>
</p>
<br/>

### 마이 페이지
(레이아웃 완성)
<p align="center">
  <img src="https://github.com/TeamTutorLink/TutorLink-front/assets/124070996/14edbfdd-a063-4ef6-99ce-4ce856437292"/>
</p>
<br/>

### 404 에러 페이지
<p align="center">
  <img src="https://github.com/TeamTutorLink/TutorLink-front/assets/124070996/de126be5-98b4-4ecb-a44d-3ef3c537f1b8"/>
</p>
<br/>

### 반응형
<p align="center">
  <img src="https://github.com/TeamTutorLink/TutorLink-front/assets/124070996/a9dfbe6c-abce-4a75-b63d-5bd9a0de9536"/>
</p>
<br/>
<br/>

**진행 과정**
- 백엔드 1명, 프론트 1명으로 구성된 팀 프로젝트
- REST Docs 문서를 기반으로 백엔드 분들과 함께 소통하며 작업했습니다.
- 매주 주 2회 정기모임을 가지며 백엔드와 프론트엔드 사이의 진도를 조율했습니다.

**주요 기능** 
- 디자인
  - Figma를 이용한 UI/UX 설계 
  - SASS, Styled-components를 이용한 반응형 웹 디자인 구현
- 초기 세팅
  - 타입스크립트, eslint를 통한 버그 관리
  - Prettier
- 회원정보
  - 소셜 로그인(카카오) 
  - 로그인한 유저의 token관리(Refresh Token, Access Token)
- 클래스 
  - 양방향 통신 채팅 기능(StompJS, SockJS)
  - 화면 공유
  - 화면 드로잉 기능 
- 클래스 생성 
  - 이미지 삽입(Drag and Drop)
  - 방 비밀번호 유효성 검사
- API
  - Axios Intercepter로 에러 핸들링
<br/>
<br/>

# VscodeExtention

- 필수
  - Eslint
  - Prettier - Code formatter
  - Prettier ESLint
- 추천
  - Material Icon Theme
    - icon이 이뻐짐
  - Auto import
    - 자동으로 모듈을 가져옴
  - Auto Rename Tag
    - 태그 이름 바꿀때 반대편 태그 이름도 동시에 바뀜
  - CSS Peek
    - 클래스, ID로 CSS코드 검색할 수 있음. 해당 CSS 파일 위치로 이동
  - HTML to CSS autocompletion
    - HTML태그, CSS 스타일 속성 자동완성
  - htmltagwrap
    - 선택한 텍스트를 감싸는 적절한 HTML 태그를 자동으로 삽입
  - Reactjs code snippets
    - 리액트 고수되는 길 (rsc 치고 엔터누르면 자동으로 함수형 컴포넌트 생성해줌. 더 많은 기능 검색하면나옴)
  - vscode-styled-components
    - styled-components 쓸 때 개발 속도 빨라짐!!
      <br />
      <br />

# 개발환경 맞추기

- node_modules 제거
- 터미널 -> npm install
  <br/>
  <br/>

# 안건

- 개발환경 맞추기(Eslint, Prettier)
- 디렉토리 구조
- 브랜치 컨벤션
- Issue 사용
- PR Merge 방식

## 기술

- React, Typescript
- Axios, React Testing Library
- styled-components, SASS
- SockJS, StompJS
- Eslint, Prettier

## git convention

- commit convention
  - feat: Update login button
- PR convention
  - Title
    - 필요없는 코드 제거
    - 주석 제거
    - API호출 로직 변경
  - Template
- branch convention
  - feature/login
    <br/>
    <br/>

# git 사용법

## 사전 작업

1. project로 이동해서 무슨 일을 할지 고름
2. issue 오픈

## 기능 추가시

1. 작업할 폴더로 이동
2. git clone [Repo 주소]
3. cd [Project Folder]

- npm install // node_modules, package-lock.json 동기화

4. git branch [생성브랜치 이름]/이름

- feature/login

5. git checkout feature/login

- git status // 상태 확인
- git log // 위치 확인 (git log --graph // 그래프로 확인 가능)

6. 신나게 코드 작성
7. 코드 작성 완료
8. git add .
9. git commit -m "상태: 컨벤션"

- git commit -m "feat: Update readme"

10. git push origin feature/login

- git push --force(절대안돼요 ㅜ) origin feature/login

11. PR(pull request) 작성

- Pull requests 클릭
- New Pull Request 클릭
- develop <- feature/login 으로 변경
- commit 탭에서 의도한 커밋이 다 푸쉬 되었는가 확인
- 세팅된 템플릿에 맞게 글적기
- 확인

12. git checkout develop
13. git pull origin develop
14. git branch feature/login
15. git checkout feature/login -- 반복
