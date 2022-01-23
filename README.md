# Introduce

본 문서는 _2022년 1월 23일_ 에 작성하였습니다.

몇 개월 전부터 관심있었던 **크롤링** 과 **TDD** 를 경험해보기 위한 토이 프로젝트를 진행하였습니다.

[Github Repository](https://github.com/unchaptered/22-01-crolling-music-charts)<br>
[Velog unchaptered](https://velog.io/@unchapterd/TOY-%EC%9D%8C%EC%95%85-%EB%9E%AD%ED%82%B9-%ED%81%AC%EB%A1%A4%EB%A7%81)

# Music Charts

Music Charts 는 크롤링 기반의 음악 랭킹 서비스입니다.

크롤링을 통해 얻은 정보를 일정하게 가공하고
해당 프로세스 및 결과물에 대해서 테스트 모듈을 만들어 보았습니다.

<hr>

## ✅ Process

완벽하게 아래의 과정을 따른 것은 아니지만,
대략적으로 다음과 같은 프로세스로 작업을 진행하였습니다.

1. HTML 문서 다운로드
2. HTML 문서 파싱
3. 객체 배열 가공
4. Router-Controller 적용
5. Template 적용
6. Test Code 작성

### 1. HTML 문서 다운로드

어떠한 데이터를 긁어오는데 있어서,
첫 번째 문제점은 **어떻게 데이터에 접근을 하느냐** 라는 점이었습니다.

그 과정에서,
기존에 **오픈소스 API** 혹은 **O-auth** 등을 구현하는데 사용하였던 **Axios** 에 대해서 알게 되었습니다.
이러한 Axios 에 매개변수를 주지 않고 다음과 같이 작성을 하면, 해당 페이지를 다운로드하게 되는 점이 있었습니다.

```javascript
// apiCroller.js
import axios from "axios";

try {
  const HTML=await axios.get("https://music.bugs.co.kr/chart/track/week/total");
  console.log(HTML);
} catch (error) {
  console.err(error);
}
```

### 2. HTML 문서 파싱

HTML 문서를 받아 출력을 해보았을  때,
데이터가 담겨있는 공간에서 **<table\> <tbody\> <td\> <tr\>** 등의 규칙성을 발견하였습니다.

이에 **정규표현식** 을 이용한 데이터 추출을 하고 싶었으나,
HTML 문서 자체가 문자열이 아니며, 이를 문자열로 바꾸는 방법을 **제한 시간 내** 찾을 수 없었습니다.

따라서 이를 사용가능한 형태로 파싱해주는 **cheerio** 를 사용하였으며,
출력 데이터의 유형이 **객체 배열** 이었으므로, HTML 문서도 **배열 형태로 파싱** 하였습니다.

### 3. 객체 배열 가공

파싱되어 배열로 바뀐 데이터에
반복문을 돌려서 **객체 배열 형태의 데이터** 를 받아냈습니다.

이 단계에서 중요하게 생각한 점은,
**Bugs 와 Melon** 이라는 사이트의 정보를 최대한 **같은 유형** 으로 만드는 것이었습니다.
따라서 **extractBugsRanking 과 extractMelonRanking** 이라는 두 개의 추출 모듈을 만들었습니다.


### 4. Router-Controller 적용

완성한 추출 모듈을 이용하여
epxres Router-Controller 구조 안에 적용하였습니다.

### 5. Template 적용

Bugs(Daily, Weekly), Melon(Daily, Weekly, Monthly) 등 5개의 Controller 에서 재사용 가능한 반응형 탬플릿을 완성하였습니다.

### 6. Test Code 작성

기능 및 구현을 어느 정도 완료하고 나서

내가 접근하고자 하는 사이트가 404 를 던질  경우
내가 접근하고자 하는 사이트에서 정보를 받아와 제대로 가공하였는지
내가 **/:non** 과 **notExistsPage** 를 이용해 404 를 던지고 redirect 하는 경우에

테스트 코드를 작성하고 이를 출력해보았습니다.

![](https://images.velog.io/images/unchapterd/post/e351bb5a-7795-4f48-9bb4-2884d2e97d61/image.png)

총 45 개의 테스트 코드를 작성해보았고
제가 의도했던 router-controller 의 미구현 페이지 404 처리와
크롤링 할 사이트에 대한 유효성 테스트 및 가공된 데이터의 양식 테스트(빠진 부분이 없는지) 등을 확인할 수 있었습니다.

해당 과정에서 제가 작성한 코드의 검증을 진행하며,
생각하지 못한 문제를 발견하고 수정하기도 하였고
**조금 더 튼튼한 코드가 무엇인가?** 에 대한 고민을 할 수 있었습니다.

다음에는 실제로 **유저 및 게시판 CRUD** 라는 간단한 구조의 **express 웹사이트를 TDD** 로 개발 진행해보아야 겠습니다.

<hr>

## ✅ Failure

해당 프로젝트에서 실패한 부분도 있었는데,
**D3 및 ECharts** 를 이용한 데이터 시각화 목표를 달성하지 못했습니다.

[**Dev 데이터 시각화 시리즈**](https://velog.io/@unchapterd/series/Dev-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%8B%9C%EA%B0%81%ED%99%94) 에서 데이터 시각화를 연습하였고 이것을 실제 프로젝트에서 적용하고 싶었습니다. 하지만, **Node 에서 그래프를 그리고 이를 주입하는 것** 에 대한 구현을 완성하지 못하고 제거하였습니다.

실제로 **프로젝트 및 서비스 단계** 에서 이러한 동적 그래프를 제공하기 위해서,
**D3 및 ECharts 같은 모듈** 을 사용할 수 있는 방법이 기본적인 express 안에서 있는지
아니면 **React 등** 의 프레임워크를 사용해야 하는 것인지 고민해봐야겠습니다.

<hr>

## ✅ Stacks

| 구분 | 모듈 | 기능 |
| :--: | :--- | :--- |
| 1 | express | 프레임 워크 |
| 2 | morgan | HTTP 로그 표시 |
| 3 | dotenv | 환경변수 사용 |
| 4 | pug | HTML 탬플릿 엔진 |
| 5 | axios | AJAX 호출 |
| 6 | cheerio | HTML Parcing |
| 7 | nodemon | 코드 추적 및 node 재시작 |
| 8 | jest | 단위 테스트 |

<hr>

## ✅ Output

![](https://images.velog.io/images/unchapterd/post/22902691-b518-4c95-b7d0-1094b8c2808d/image.png)
