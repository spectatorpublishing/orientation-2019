import React from 'react';
import WelcomeContainer from './WelcomeContainer';
import BannerRow from './BannerRow';
import StaffContainer from './StaffContainer';
import Navbar from '../components/Navbar';

const tocEntries = [
  'Get to know Barnumbia',
  '116 Traditions',
  'Maps',
  'Stories to Follow',
  'Join the Discourse',
  'Join Spec',
];

const BannerRowDemo = [
  {
    title: 'COURSES WE LOVED',
    url: 'https://www.columbiaspectator.com/',
  },
  {
    title: 'PREPARE FOR COURSE REGISTRATION DOWNLOAD VERGIL+',
    url: 'https://www.columbiaspectator.com/',
    color: '#174d5b',
  },
  {
    title: '116 THINGS TO DO BEFORE GRADUATING',
    url: 'https://www.columbiaspectator.com/',
    color: '#f26d5b',
    shadowColor: '#f1bc9c',
  },
  {
    title: 'GET YOUR TEXTBOOKS',
    url: 'https://www.columbiaspectator.com/',
    color: '#9BDAE3',
  },
];

const MobileBannerRowDemo = [
  {
    title: 'COURSES WE LOVED',
    url: 'https://www.columbiaspectator.com/',
  },
  {
    title: 'DOWNLOAD VERGIL+',
    url: 'https://www.columbiaspectator.com/',
    color: '#174d5b',
  },
  {
    title: '116 THINGS TO DO BEFORE GRADUATING',
    url: 'https://www.columbiaspectator.com/',
    color: '#f26d5b',
    shadowColor: '#f1bc9c',
  },
  {
    title: 'GET YOUR TEXTBOOKS',
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

const navBarEntries = [
  'HOME',
  'CLUBS',
  'REGISTRATION',
  'GET TO KNOW BARNUMBIA',
  'MAPS',
  '116 TRADITIONS',
  'JOIN SPEC',
];

const Orientation = () => (
  <div>
    <Navbar entries={navBarEntries} />
    <WelcomeContainer id="welcome" tocEntries={tocEntries} />
    <BannerRow buttons={BannerRowDemo} mobileButtons={MobileBannerRowDemo} />
    <StaffContainer staffInfo={StaffInfo} />
    {/* temporarily all the staff info data are stored inside its own file */}
  </div>
);

export default Orientation;
