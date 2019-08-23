import React from 'react';
import { ThemeProvider } from 'styled-components';
import Orientation from './containers/Orientation';
import { GlobalStyles, theme } from './GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Orientation />
      </div>
    </ThemeProvider>
  );
}

export default App;
