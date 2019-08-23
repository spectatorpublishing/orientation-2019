import React from 'react';
import WelcomeContainer from './WelcomeContainer';
import BannerRow from './BannerRow';
import StaffContainer from './StaffContainer';
import DiscourseContainer from './DiscourseContainer';
import Article from '../components/Article';
import Divider from '../components/Divider';
import DividerWithNames from '../components/DividerWithNames';
import GetToKnow from '../components/GetToKnow';
import JoinTheDiscourseData from '../data/JoinTheDiscourseData';
import MapsContainer from './MapsContainer';

const tocEntries = [
  {
    title: 'Campus Life',
    id: 'gettoknow',
  },
  {
    title: 'Academics',
    id: 'gettoknow',
  },
  {
    title: 'Courses We Loved',
    id: 'banner',
  },
  {
    title: '116 Things to do before Graduating',
    id: 'banner',
  },
  {
    title: 'Textbooks',
    id: 'banner',
  },
  {
    title: 'Maps',
    id: 'maps',
  },
  {
    title: 'Stories to Follow',
    id: 'stories',
  },
  {
    title: 'Join the Discourse',
    id: 'discourse',
  },
  {
    title: 'Spectator Staff',
    id: 'staff',
  },
];

const BannerRowDemo = [
  {
    title: 'COURSES WE LOVED',
    url:
      'https://www.columbiaspectator.com/spectrum/2019/08/22/courses-we-loved-staff-picks-for-2019/',
  },
  {
    title: 'PREPARE FOR COURSE REGISTRATION DOWNLOAD VERGIL+',
    url:
      'https://www.columbiaspectator.com/spectrum/2018/04/30/vergils-debut-how-to-make-registration-a-piece-of-cake/',
    color: '#174d5b',
  },
  {
    title: '116 THINGS TO DO BEFORE GRADUATING',
    url: 'https://www.columbiaspectator.com/orientation-2018/116-traditions/',
    color: '#f26d5b',
    shadowColor: '#f1bc9c',
  },
  {
    title: 'GET TEXTBOOKS',
    url: '/#/textbooks',
    color: '#9BDAE3',
  },
];

const MobileBannerRowDemo = [
  {
    title: 'COURSES WE LOVED',
    url:
      'https://www.columbiaspectator.com/spectrum/2019/08/22/courses-we-loved-staff-picks-for-2019/',
  },
  {
    title: 'DOWNLOAD VERGIL+',
    url:
      'https://www.columbiaspectator.com/spectrum/2018/04/30/vergils-debut-how-to-make-registration-a-piece-of-cake/',

    color: '#174d5b',
  },
  {
    title: '116 THINGS TO DO BEFORE GRADUATING',
    url: 'https://www.columbiaspectator.com/orientation-2018/116-traditions/',
    color: '#f26d5b',
    shadowColor: '#f1bc9c',
  },
  {
    title: 'GET YOUR TEXTBOOKS',
    url: '/#/textbooks',
    color: '#9BDAE3',
  },
];

const StaffInfo = [
  {
    title: 'Design',
    members: [
      'Michelle Shin, Design Editor',
      'Kelly Pu, Layout Deputy Editor',
      'Jason Kao, Eye Graphics Deputy Editor',
      'Helen Yang, Opinions Illustrations Deputy Editor',
      'Brenda Huang, Eye Illustrations Deputy Editor',
      'Tassneen Bashir, Animations Deputy Editor',
    ],
  },
  {
    title: 'News',
    members: [
      'Karen Xia, News Editor',
      'Valeria Escobar, Deputy News Editor',
      'Shubham Saharan, Senior Staff Writer',
      'Emma James, Senior Staff Writer',
      'Nelson Luna, Staff Writer',
    ],
  },
  {
    title: 'Opinion',
    members: [
      'Kaili Meier, Co-Editorial Page Editor',
      'Erin Neil, Co-Editorial Page Editor',
      'Kyra Dawkins, Deputy Editorial Page Editor',
    ],
  },
  {
    title: 'Arts & Entertainment',
    members: [
      'Sarah Beckley, A&E Editor',
      'Gia Kim, A&E Deputy Editor',
      'Isabela Espadas Barros Leal, A&E Deputy Editor',
      'Fonda Shen, A&E Deputy Editor',
      'Samuel Jones, A&E Deputy Editor',
      'Alejandra Quintana, A&E Deputy Editor',
    ],
  },
  {
    title: 'Copy',
    members: [
      'Sarah Braka, Deputy Copy Editor',
      'Eden Teferi, Deputy Copy Editor',
      'María Thompson, Preslotter',
    ],
  },
  {
    title: 'Product',
    members: [
      'Arsalaan Ansari, Head of Engineering',
      'William Chiu, Engineering Manager',
      'Cecilia Orduña, Lead Product Designer',
      'Matthew Vanegas, Senior Developer',
      'Harrison Wang, Developer',
      'Elaine Wang, Developer',
      'Chenoa Gale, Developer',
    ],
  },
  {
    title: 'Engagement',
    members: [
      'Isabel Jauregui, Engagement Director',
      'Madison Harden, Senior Engagement Manager',
      'Hailey Shi, Engagement Manager',
      'Jake Fisher, Engagement Manager',
    ],
  },
  {
    title: 'Revenue',
    members: ['Sarah Peters, Sales Manager', 'Katrina Yin, Growth Manager'],
  },
  {
    title: 'Sports',
    members: ['Harry Walker, Staff Writer', 'Elizabeth Karpen, Staff Writer'],
  },
  {
    title: 'Spectrum',
    members: ['Grace Lin, Spectrum Editor'],
  },
  {
    title: 'Photo',
    members: ['Natalie Guerra, Photo Editor'],
  },
];

const StaffInfoMobile = [
  {
    title: 'Design',
    members: [
      'Michelle Shin, Design Editor',
      'Kelly Pu, Layout Deputy Editor',
      'Jason Kao, Eye Graphics Deputy Editor',
      'Helen Yang, Opinions Illustrations Deputy Editor',
      'Brenda Huang, Eye Illustrations Deputy Editor',
      'Tassneen Bashir, Animations Deputy Editor',
    ],
  },
  {
    title: 'News',
    members: [
      'Karen Xia, News Editor',
      'Valeria Escobar, Deputy News Editor',
      'Shubham Saharan, Senior Staff Writer',
      'Emma James, Senior Staff Writer',
      'Nelson Luna, Staff Writer',
    ],
  },
  {
    title: 'Opinion',
    members: [
      'Kaili Meier, Co-Editorial Page Editor',
      'Erin Neil, Co-Editorial Page Editor',
      'Kyra Dawkins, Deputy Editorial Page Editor',
    ],
  },
  {
    title: 'Revenue',
    members: ['Sarah Peters, Sales Manager', 'Katrina Yin, Growth Manager'],
  },
  {
    title: 'Product',
    members: [
      'Arsalaan Ansari, Head of Engineering',
      'William Chiu, Engineering Manager',
      'Cecilia Orduña, Lead Product Designer',
      'Matthew Vanegas, Senior Developer',
      'Harrison Wang, Developer',
      'Elaine Wang, Developer',
      'Chenoa Gale, Developer',
    ],
  },
  {
    title: 'Spectrum',
    members: ['Grace Lin, Spectrum Editor'],
  },
  {
    title: 'Arts & Entertainment',
    members: [
      'Sarah Beckley, A&E Editor',
      'Gia Kim, A&E Deputy Editor',
      'Isabela Espadas Barros Leal, A&E Deputy Editor',
      'Fonda Shen, A&E Deputy Editor',
      'Samuel Jones, A&E Deputy Editor',
      'Alejandra Quintana, A&E Deputy Editor',
    ],
  },
  {
    title: 'Copy',
    members: [
      'Sarah Braka, Deputy Copy Editor',
      'Eden Teferi, Deputy Copy Editor',
      'María Thompson, Preslotter',
    ],
  },
  {
    title: 'Sports',
    members: ['Harry Walker, Staff Writer', 'Elizabeth Karpen, Staff Writer'],
  },
  {
    title: 'Photo',
    members: ['Natalie Guerra, Photo Editor'],
  },
  {
    title: 'Engagement',
    members: [
      'Isabel Jauregui, Engagement Director',
      'Madison Harden, Senior Engagement Manager',
      'Hailey Shi, Engagement Manager',
      'Jake Fisher, Engagement Manager',
    ],
  },
];

const recognition = 'COVER ART BY: JOURNALISM DESIGNER WEBSITE DESIGN BY: CECILIA ORDUÑA DEVELOPED BY: ARSALAAN ANSARI, WILLIAM CHIU, HARRISON WANG, HARRISON WANG, BILL CHEN & CHENOA BUNTS-ANDERSON';

const getToKnowImage = {
  image:
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZNKTNLGKAFHUTFSIXC4HFO3OR4.jpeg',
};
const getToKnow = [
  {
    tab: 'BARNUMBIA',
    tabLink: '/#/barnumbia',
  },
  {
    tab: 'CAMPUS LIFE',
    tabLink: '/#/campus',
  },
  {
    tab: 'ACADEMICS',
    tabLink: '/#/registration',
  },
];

const Orientation = () => (
  <div>
    <WelcomeContainer id="welcome" tocEntries={tocEntries} />
    <Divider
      title="LIKE WHAT YOU SEE?"
      body={false}
      link="//columbiaspectator.com"
    />
    <GetToKnow
      id="gettoknow"
      getToKnow={getToKnow}
      backgroundImage={getToKnowImage}
    />
    <BannerRow
      id="banner"
      buttons={BannerRowDemo}
      mobileButtons={MobileBannerRowDemo}
    />
    <MapsContainer />
    <DiscourseContainer id="discourse">
      {JoinTheDiscourseData.map((entry) => (
        <Article
          link={entry.link}
          photoUrl={entry.photoUrl}
          headline={entry.headline}
        />
      ))}
    </DiscourseContainer>
    <DividerWithNames
      title="LIKE WHAT YOU SEE?"
      body={false}
      link="//columbiaspectator.com"
      recognition={recognition}
    />
    <StaffContainer
      id="staff"
      staffInfo={StaffInfo}
      staffInfoMobile={StaffInfoMobile}
    />
  </div>
);

export default Orientation;
