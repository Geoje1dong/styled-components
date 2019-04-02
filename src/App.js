import React, { Component } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Button = styled.button`
  border-radius:30px;
  padding:25px 15px;
  background-color: ${props => props.theme.mainColor}
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <div className="App">
          <GlobalStyle />
          <Container>
            <Form />
            <Form />
            <Form />
          </Container>
      </div>
      </ThemeProvider>
    );
  }
}

const Card = styled.div`
  background-color:white;
`

const Container = styled.div`
  height:100vh;
  width:100%;
  background-color:#bdc3c7;
  ${Card} {
    background-color:blue;
  },
  ${Card}:last-child{
    background-color:${props => props.theme.mainColor}
  }
`
const Form = () => (
  <Card><Button>Hello</Button></Card>
)

export default App;
