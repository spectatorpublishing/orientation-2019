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

const StaffInfo = [
  {
    title: 'Art & Entertainment',
    members: [
      'Katherine Gerberich, Editor in Chief',
      'Rahil Kamath, Managing Editor',
      'Nima Mozhgani, Publisher',
    ],
  },
  {
    title: 'Product',
    members: [
      'Kevin Li, Head of Product',
      'Arsalaan Ansari, Head of Engineering',
      'Cecilia Orduna, Lead Product Designer',
    ],
  },
  {
    title: 'Product',
    members: [
      'Kevin Li, Head of Product',
      'Arsalaan Ansari, Head of Engineering',
      'Cecilia Orduna, Lead Product Designer',
    ],
  },
  {
    title: 'Corporate Board',
    members: [
      'Katherine Gerberich, Editor in Chief',
      'Rahil Kamath, Managing Editor',
      'Nima Mozhgani, Publisher',
    ],
  },
  {
    title: 'Corporate Board',
    members: [
      'Katherine Gerberich, Editor in Chief',
      'Rahil Kamath, Managing Editor',
      'Nima Mozhgani, Publisher',
    ],
  },
  {
    title: 'Product',
    members: [
      'Kevin Li, Head of Product',
      'Arsalaan Ansari, Head of Engineering',
      'Cecilia Orduna, Lead Product Designer',
    ],
  },
  {
    title: 'Corporate Board',
    members: [
      'Katherine Gerberich, Editor in Chief',
      'Rahil Kamath, Managing Editor',
      'Nima Mozhgani, Publisher',
    ],
  },
  {
    title: 'Product',
    members: [
      'Kevin Li, Head of Product',
      'Arsalaan Ansari, Head of Engineering',
      'Cecilia Orduna, Lead Product Designer',
    ],
  },
  {
    title: 'Product',
    members: [
      'Kevin Li, Head of Product',
      'Arsalaan Ansari, Head of Engineering',
      'Cecilia Orduna, Lead Product Designer',
    ],
  },
  {
    title: 'Corporate Board',
    members: [
      'Katherine Gerberich, Editor in Chief',
      'Rahil Kamath, Managing Editor',
      'Nima Mozhgani, Publisher',
    ],
  },
  {
    title: 'Corporate Board',
    members: [
      'Katherine Gerberich, Editor in Chief',
      'Rahil Kamath, Managing Editor',
      'Nima Mozhgani, Publisher',
    ],
  },
  {
    title: 'Corporate Board',
    members: [
      'Katherine Gerberich, Editor in Chief',
      'Rahil Kamath, Managing Editor',
      'Nima Mozhgani, Publisher',
    ],
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Orientation />
        <BannerRow buttons={BannerRowDemo} />
        <StaffContainer staffInfo={StaffInfo} />
        {/* temporarily all the staff info data are stored inside its own file */}
      </div>
    </ThemeProvider>
  );
}

export default App;
