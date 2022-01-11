<div align="center">
  <h1>📅만년달력 만들기📆</h1>
  <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fjun-seok816%2F-perennial-calendar&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
</div>


<br/>
<p align="center">
  <img src="https://user-images.githubusercontent.com/72478198/148873910-9123bbc0-c462-4170-8f10-c59ba25dab2b.gif" alt="animated" />
</p>


0년부터 9999년까지의 달력만들기

본 프로젝트는 Javascript의 [Date생성자] 를 사용하지 않고 [나만의 js_Date클래스]를 사용하여 만들어졌습니다.

## Front-end Stack
<div align="center">
  <img src="https://img.shields.io/badge/React-3D41C8?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-EEEF16?style=flat-square&logo=JavaScript&logoColor=white"/>
</div>


### Javascript

프로젝트에 필요한 메소드를 담고있는 클래스를 활용하였습니다
클래스에 대한 정확한 정보는 [나만의 js_Date클래스]에 정리해두었습니다.



### React
React라이브러리를 활용하여 리렌더링없이 달력을 넘기도록 구현하였습니다

## 파일 구성

### public폴더
- index.html `메인페이지`


### src폴더

#### component폴더
- Thead.js `달력 table의 thead부분의 컴포넌트, 년도와 월을 input태그로 받아옵니다`
- Tbody.js `달력 table의 tbody부분의 컴포넌트, js_Date.js안에 있는 메소드를 활용하여 해당 년월의 달력을 출력합니다`

#### css폴더
- App.module.css `App컴포넌트의 css`
- Tbody.module.css `Tbody컴포넌트의 css`
- Thead.module.css `Thead컴포넌트의 css` 

#### javascript폴더
- js_Date.js `만년달력 프로젝트에 필요한 메소드를 담고있는 클래스입니다`



[나만의 js_Date클래스]: https://github.com/jun-seok816/my_-js_Date-Class 
[Date생성자] : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
