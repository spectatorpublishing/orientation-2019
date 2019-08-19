import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const AppContainer = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

function App() {
  return (
    <AppContainer>
      <Header>
        <Logo src={logo} />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Header>
    </AppContainer>
  );
}

export default App;
