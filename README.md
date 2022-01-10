# 만년달력 프로젝트 

0년부터 9999년까지의 달력만들기

## 사용기술

### Javascript
프로젝트에 필요한 메소드를 담고있는 클래스를 구현하였습니다

### React
React라이브러리를 활용하여 리렌더링없이 달력을 넘기도록 구현하였습니다


## 파일 설명

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
