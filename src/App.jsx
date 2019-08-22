import React from 'react';
import { ThemeProvider } from 'styled-components';
import Orientation from './containers/Orientation';
import { GlobalStyles, theme } from './GlobalStyles';
import StaffContainer from './containers/StaffContainer';

const StaffContainerDemo = {
  url:
    'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
  alt: 'staff photo',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Orientation />
        <StaffContainer
          url={StaffContainerDemo.url}
          alt={StaffContainerDemo.alt}
        />
        {/* temporarily all the staff info data are stored inside its own file */}
      </div>
    </ThemeProvider>
  );
}

export default App;
