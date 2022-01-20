# Music Graph!

Musci Graph 는
Open Music Data API 기반의 통계 서비스 입니다.

>
목차는 다음과 같습니다.
>
1. Functions
2. Problems
3. Stacks

<hr>

## Functions

지원하고 있는 주요 기능은 다음과 같습니다.

1. Music Ranking
2. Music Chatting
3. Music Chat Bot

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

## Only GET/ Structure

본 서비스는 <br>
데이터 기반 오픈 소스 Api 에서 **주기적으로 받아온 데이터** 를 취합하여 <br>
**미리 가공해 놓은 정보** 나 **사용자가 요청한 정보** 를 가공하여 제공합니다.

1. HomeRouter
2. MusicRouter
3. ApiRouter

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
