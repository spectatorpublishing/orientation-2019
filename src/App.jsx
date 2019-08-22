import React from 'react';
import { ThemeProvider } from 'styled-components';
import Orientation from './containers/Orientation';
import { GlobalStyles, theme } from './GlobalStyles';
import BannerRow from './containers/BannerRow';

const BannerRowDemo = [
  {
    title: 'demo title 1',
    url: 'https://www.columbiaspectator.com/',
  },
  {
    title: 'demo title 2',
    url: 'https://www.columbiaspectator.com/',
    color: '#174d5b',
  },
  {
    title: 'demo title 3',
    url: 'https://www.columbiaspectator.com/',
    color: '#f26d5b',
    shadowColor: '#f1bc9c',
  },
  {
    title: 'demo title 4',
    url: 'https://www.columbiaspectator.com/',
    color: '#9BDAE3',
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Orientation />
        <BannerRow buttons={BannerRowDemo} />
      </div>
    </ThemeProvider>
  );
}

export default App;
