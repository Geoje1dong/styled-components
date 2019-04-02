# React Styled Components

styled components를 사용하기 위해선 일단 터미널에 설치 부터 한다.

## 설치 방법
```.{terminal}
    $ yarn add styled-components
```

설치가 완료되면 사용할 js위에 import 시킨다.

```{.terminal}
    import styled from "styled-components";
```

## 기본 사용방법
css를 변수로 만들고 변수로 사용한다.

```{.styled}
    <변수명>버튼</변수명>
    
    const 변수명 = styled.사용할엘리멘트`
        ...css 내용
    `;
```

## 글로벌 스타일 만들기
사용할 js위에 `, { createGlobalStyle }` 추가한다.
```{.styled}
    import styled, { createGlobalStyle } from "styled-components";
    
    const GlobalStyle = createGlobalStyle`
      body {
        margin: 0;
        padding: 0;
      }
    `;
    
    class App extends Component {
      render() {
        return (
          <div className="App">
            <GlobalStyle /> // 변수를 추가한다.
          </div>
        );
      }
    }
```

## props 사용방법
```{.styled}
    <Button success>성공</Button>
    <Button danger>실패</Button>
    
    const Button = styled.button`
      &:active,
      &:focus {
        outline:none;
      }
      background-color: ${props => props.danger ? "#e74c3c" : "#2ecc71"}    
    `
```

## 만들어논 변수 Button에 새로운 기능 추가
`withComponent(기능추가 할 Element)`
```{.styled}
    <Anchor href="http://google.com">Go to Google</Anchor>
    
    const Anchor = Button.withComponent('a')
```

## 변수에다가 스타일 추가
    
```{.styled}
  //사용법
  styled(기본에사용하던 변수)`  
        ..css
  `
  
  //예제
  const Anchor = styled(Button.withComponent('a'))`
    text-decoration:none;
  `
```

## 애니메이션 사용법

```{.styled}
  //사용법
  상단에 css 와 keyframes를 추가한다.
  import styled, { createGlobalStyle, `css`, `keyframes` } from "styled-components";
  
  //버튼
  <Button danger rotationTime={5}>실패 애니메이션 5초</Button>
  
  //변수 생성 
  const rotation = keyframes`
    form{
      transform:rotate(0deg);
    }
    to{
      transform:rotate(360deg);
    }
  `
  //조건값 설정
  ${props => {
    if(props.danger){
      return css`animation: ${rotation} ${props.rotationTime}s linear infinite`;
    }
  }}
```

## minxin 사용법

```{.styled}
//사용법
상단에 css를 추가한다.
import styled, { createGlobalStyle, `css` } from "styled-components";

  //변수 생성
  const 변수명 = css`
    ... css
  `
  
  //변수 생성 예제
  const awsomeCard = css`
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.88);
    background-color:white;
    border-radius: 10px;
    padding: 20px;
  `
  
  //실제 적용 예제
  const Input = styled.input`
    border:none;
    border-radius:5px;
    ${awsomeCard} // 변수에 믹스인 변수를 추가
  `
```

## 속성 추가법
```{.styled}
  //사용법
  const 변수명 = styled.input`.attrs`({
    ..속성 추가
  })

  //input에 disabled 추가 예제 
  const Input = styled.input.attrs({
    disabled: true
  })`
    border:none;
    border-radius:5px;
    ${awsomeCard}
  `
```

## theme 작성법
```{.styled}
  #### 사용법

  //theme.js 파일 만든다
  const theme = {
    mainColor: "#ff7f50",
    dangerColor: "#ff4757",
    successColor: "#3742fa"
  }
  export default theme;
  
  //App.js 
  상단에 ThemeProvider를 추가한다.
  import styled, { createGlobalStyle, `ThemeProvider` } from "styled-components";
  import theme from "./theme"; // theme js를 추가한다.
  
  <ThemeProvider theme={theme}> // ThemeProvider 추가  theme= {추가한 theme}
    <div className="App">
        <GlobalStyle />
        <Container>
          <Form />
        </Container>
    </div>
  </ThemeProvider>
  
  const Button = styled.button`
    border-radius:30px;
    padding:25px 15px;
    background-color: ${props => props.theme.successColor} // theme 색상 추가
  `
```

## Nesting

```{.stlyed}
const Container = styled.div`
  ${Card} {   //container > card {...css}
    background-color:blue; 
  },
  ${Card}:last-child{   //container > card:last-child {...css}
    background-color:${props => props.theme.mainColor}
  }
`
```

## 참조 사이트
[노마드코더 리액트 스타일? Styled Components!](https://academy.nomadcoders.co/courses/enrolled/303211)