# 📋 직원들을 위한 급여 및 업무관리 플랫폼 

------



## ✅ 토이2_4조 팀원

|                            김령태                            |                  김희준                   |                            이승헌                            |
| :----------------------------------------------------------: | :---------------------------------------: | :----------------------------------------------------------: |
|                             팀원                             |                   팀원                    |                             팀원                             |
| 캘린더<br/>급여 내역 정정 신청 로직 및 페이지 구현<br/>페이지 redirection 기능 구현 <br />| 캘린더<br /> 로그인, 로그아웃, 마이페이지 | 캘린더<br />헤더, 사이드바,급여내역페이지,<br />급여정정내역 페이지 퍼블리싱,급여내역, <br />정정내역 데이터 연결<br /> |

------

## ✅ 필수 구현 사항

1. 급여 내역 확인 및 정정 신청페이지 구현

   - [x] 로그인을 통한 개인의 급여 내역 확인 구현

   - [x] 확인 후, 업무 연장 / 무급 휴가 사용 / 휴일 근무 등 미반영에 대한 정정 신청 창 구현

   - [x] 각 카테고리 선택 가능 혹은 입력 하여 진행 가능 구현

   - [x] 신청 완료 or 불가 팝업 창 구현
   - [x] 신청 내역 확인

2. 캘린더를 통한 업무 확인 페이지 구현
   - [x] 일정 추가, 삭제, 수정 가능 구현
     - [x] 캘린더 페이지 구현
   - [x] 캘린더 안, 저장한 일정 확인
     - [x] 일정이 있는 경우, 다른 일정과 구분 표시

3. 과제에 대한 설명을 포함한 `README.md` 파일 작성
   - [x] 팀원별로 구현한 부분 소개

※ 기술 활용

- useState / useReducer 을 활용한 상태관리 구현
  - [x] Recoil을 사용하였습니다.

- Sass / styled-component를 활용한 스타일 구현
  - [x] tailwind 를 사용하였습니다.
- [x] react 상태를 통한 할일 CRUD 구현
- [x] 파이어베이스를 이용한 로그인 구현

## ✅ 선택 구현사항

- [x] Next.js 를 활용한 서버사이드렌더링 구현
- [x] TypeScript 사용
- [x] eslint 설정, 커밋컨벤션, 문서화 등 팀프로젝트시 필요한 추가 작업들
  - airbnb eslint / prettier 를 사용해 코드를 통일화 하였습니다.

## ✅ 기술 스택

<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"><img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"><img src="https://img.shields.io/badge/tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"><img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white"><img src="https://img.shields.io/badge/ToastUi-4285F4?style=for-the-badge&logo=googlecalendar&logoColor=white"><img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/GIThub-000000?style=for-the-badge&logo=github&logoColor=white">

## ✅ User Flow

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FQva8O%2FbtsHS7oP1No%2FAbXLNWWfg6Dkpk2DbwKgxk%2Fimg.png)



## ✅ 미리보기
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FXQOlM%2FbtsHRueRsu3%2FkL0FLHKBTTKosMUqWKgXi0%2Fimg.png)
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbFbFbH%2FbtsHTnkEYuJ%2FU0wwe1JQgZyMxPuZpMFi00%2Fimg.png)
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkXoh9%2FbtsHTI9XvxI%2FLhUEZRwb8LgHv4l41itrY0%2Fimg.png)


## ✅ 느낀점

#### 김령태

- 기존에 error가 발생하면 단순히 콘솔에 error를 출력하고 끝내는 것이 아쉽다는 멘토님의 이야기를 듣고 error가 발생했을 때 최대한 앱이 유지될 수 있는 방향으로 노력한 것 같습니다. Next.js로 처음 개발하는 프로젝트라 서버 컴포넌트와 클라이언트 컴포넌트 간의 차이에서 오는 포로그래밍이 어려웠지만 인원이 한명 비었음에도 끝까지 함께 열심히 해준 팀원들 덕분에 잘 마무리한 것 같습니다.

#### 이승헌

- 부족한 부분이 많았는데 팀원들에게 많은 도움을 받았습니다.
- Next, TypeScript 등 학습이 더 필요해 보입니다.

#### 김희준

- 너무 React에 익숙해져서 Next 의 장점을 살려 작업하지 못한거같습니다 ㅠ SSR이나 NEXT 만의 서버 통신 방식을 제대로 이행하지 못한거 같아 아쉽습니다. tailwind를 써본것은 참 즐거운 경험 이 었으나,  tailwind 를 씀 으로써 다른 라이브러리도 써야한다는 걸 안 것이 가장 크게 얻어갈 경험인거 같습니다!

- 4명이서 시작하다가 저희 3명이서 마무리를 하게되었는데 뭉치면 뭐든 할수 있다는걸 느끼게 해준것과,

  프로젝트를 전체적 으로 봐주신 령태님, 퍼블리싱을 전체적으로 봐주신 승헌님 두 능력자 분들 덕분에 많은것을 배워갑니다!!
  정말 감사합니다!

  

  

   

##  
