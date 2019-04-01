import React, { Component } from 'react';
import styled, { createGlobalStyle, css, keyframes } from "styled-components";

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
        <GlobalStyle />
        <Container>
          <Button success>성공</Button>
          <Button danger>실패</Button>
          <Button danger rotationTime={5}>실패 애니메이션 5초</Button>
          <Anchor href="http://google.com">Go to Google</Anchor>
        </Container>
        
      </div>
    );
  }
}

const Container = styled.div`
  height:100vh;
  width:100%;
  background-color:#bdc3c7;
`

const Button = styled.button`
  border-radius:50px;
  padding:5px;
  width:120px;
  color:#fff;
  font-weight:600;
  cursor:pointer;
  background:#000;
  &:active,
  &:focus {
    outline:none;
  }
  background-color: ${props => props.danger ? "#e74c3c" : "#2ecc71"}
  ${props => {
    if(props.danger){
      return css`animation: ${rotation} ${props.rotationTime}s linear infinite`;
    }
  }}
`

const Anchor = styled(Button.withComponent('a'))`
  text-decoration:none;
`

const rotation = keyframes`
  form{
    transform:rotate(0deg);
  }
  to{
    transform:rotate(360deg);
  }
`

export default App;
