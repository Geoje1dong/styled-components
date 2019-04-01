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