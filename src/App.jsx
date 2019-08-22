import React from 'react';
import { ThemeProvider } from 'styled-components';
import Orientation from './containers/Orientation';
import { GlobalStyles, theme } from './GlobalStyles';
import BannerRow from './containers/BannerRow';
import StaffContainer from './containers/StaffContainer';

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
        <BannerRow buttons={BannerRowDemo} />
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
