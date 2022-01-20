# Music Graph!

Musci Graph 는
Open Music Data API 기반의 통계 서비스 입니다.

>
목차는 다음과 같습니다.
>
1. Functions
2. RESTful Structure
2. Problems
3. Stacks

<hr>

## Functions

지원하고 있는 주요 기능은 다음과 같습니다.

### 🧡 Music Ranking

여러 종류의 API 에서 취합한 데이터를 기반으로,
옵션 선택을 통해 **시각화 그래프** 를 사용자에게 보여줍니다.

### 🧡 Music Chatting

Socket.io 를 이용해 실시간 채팅을 구현하였습니다.

채팅은 정해진 **귀여운 텍스트 박스** 와 **추천 노래 검색 및 전송** 을 기반으로 만들어졌습니다.

### 💚 Music Chat Bot

일정 시간 사용자들이 다른 사용자를 매칭하지 못하면,
서버에서는 채팅 봇을 연결해주고 **랭킹 기반의 노래 추천** 을 해줍니다.



<hr>



## RESTful Structure

본 서비스는 <br>
데이터 기반 오픈 소스 Api 에서 **주기적으로 받아온 데이터** 를 취합하여 <br>
**미리 가공해 놓은 정보** 나 **사용자가 요청한 정보** 를 가공하여 제공합니다.

### ✅ Home Router

Home Router 는 Home Controller 와 연결되어 있습니다.

| REST | URL | Explain |

### ✅ Music Router

Music Router 는 익명 사용자 호출에 따라서 MongoDB 에서 데이터를 꺼내서 제공합니다.
Music Router 는 Format Data Controller 와 Non-Format Data Controller 로 연결되어 있습니다.

#### Format Data Controller

Format Data Controller 는 다음과 같은 기능으로 분류 되어 있습니다.

| REST | URL | Explain |
| :--- | :-- | :------ |
| GET | /music/format/:id | 사용자 요청 :id 와 동일한 데이터를 제공해줍니다.<br>없을 시에는 리다이렉트 시킵니다. |
| POST | /music/format/:id | **관리자** 가 설정을 마치고 요청을 보내면, 새 :id 를 할당해줍니다. 없으면 리다이렉트 시켜줍니다. |
| PUT | /music/foramt/:id | **관리자** 가 :id 를 통해서 수정사항을 보내면, 해당 수정사항을 반영하여 업데이트 합니다, |
| DEL | /music/format/:id | **관리자** 가 :id 를 통해서 파기요청을 보내면, 해당 데이터를 파기합니다. |

#### Non-Format Data Controller

Non-Format Data Controller 는 다음과 같은 기능을 당당합니다.

| REST | URL | Explain |
| :--- | :-- | :------ |
| GET | /music/non-format?seacrh=value | 사용차가 요청한 value 에 해당하는 data 를 검색합니다.


### ✅ Api Router

Api Router 는 ApiMiddleware 검증을 통과한 호출만을 받아들입니다.
Api Router 는 Connect Test Controller 와 Get Data Controller 로 연결되어 있습니다.

| REST | URL | Explain |
| :--- | :-- | :------ |
| GET | /api/test/ | 본 서버에서 외부 Api 서버로 요청을 받아 데이터를 받아옵니다.<br>연결은 유지되고 있는지, 호출 정보 키-값이 변경되었는지, 호출 정보 재가공 시 undefined 나 null 요소가 없는지 등을 전부 확인합니다. |
| GET | /api/test/connect | 연결을 확인합니다. |
| GET | /api/test/format | 데이터 양식 중 키 명칭이 변경되어있는 지 확인합니다. |
| GET | /api/test/package | 데이터 가공 완료물의 양식을 확인합니다. |
| POST | /api/data | 본 서버에서 외부 Api 서버에서 받아온 정보를 가공하여 저장합니다. |

<hr>

## Problems

프로젝트 진행 중 마주한 문제들은 다음과 같았습니다.

1. API 호출 횟수를 줄이는 것
2. **💚 Music Chat Bot** 이 어떻게 사용자 취향의 노래를 제공해줄 것인가.

### ❓ API 호출 횟수 줄이기

### ❓ Music Chat Bot Alogrithm 구현

<hr>

## Stacks!

Music Graph 프로젝트는 다음과 같은 Stack 을 사용하고 있습니다.

1. Service 측면 _Node.js, Express, Axios_
2. Database 측면 _Mongo DB_
3. Chatting 라이브러리 _Socket.io_
4. Visualizing 라이브러리 _D3, ECharts_
5. Logging 라이브러리 _winston_
6. Day 라이브러리 _days_

<hr>

### Refrences

[Best Music API 2021](https://rapidapi.com/blog/top-free-music-data-apis/)
