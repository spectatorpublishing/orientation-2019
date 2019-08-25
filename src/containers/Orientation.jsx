import React from 'react';
import WelcomeContainer from './WelcomeContainer';
import BannerRow from './BannerRow';
import StaffContainer from './StaffContainer';
import DiscourseContainer from './DiscourseContainer';
import Article from '../components/Article';
import Divider from '../components/Divider';
import DividerWithNames from '../components/DividerWithNames';
import GetToKnow from '../components/GetToKnow';
import Carousel from '../components/Carousel';
import JoinTheDiscourseData from '../data/JoinTheDiscourseData';
import MapsContainer from './MapsContainer';
import { theme } from '../GlobalStyles';

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
    color: theme.purple,
    shadowColor: theme.purple,
  },
  {
    title: 'PREPARE FOR COURSE REGISTRATION DOWNLOAD VERGIL+',
    url:
      'https://www.columbiaspectator.com/spectrum/2018/04/30/vergils-debut-how-to-make-registration-a-piece-of-cake/',
    color: theme.orange,
    shadowColor: theme.orange,
  },
  {
    title: '116 THINGS TO DO BEFORE GRADUATING',
    url: 'https://www.columbiaspectator.com/orientation-2018/116-traditions/',
    color: theme.yellow,
    shadowColor: theme.yellow,
  },
  {
    title: 'GET TEXTBOOKS',
    url: '/orientation-2019/#/textbooks',
    color: theme.navy,
    shadowColor: theme.navy,
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
    url: '/orientation-2019/#/textbooks',
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

const recognition = 'COVER ART BY: JOURNALISM DESIGNER WEBSITE DESIGN BY: CECILIA ORDUÑA DEVELOPED BY: ARSALAAN ANSARI, WILLIAM CHIU, HARRISON WANG, ELAINE WANG, BILL CHEN & CHENOA BUNTS-ANDERSON';

const getToKnowImage = {
  image:
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZNKTNLGKAFHUTFSIXC4HFO3OR4.jpeg',
};
const getToKnow = [
  {
    tab: 'BARNUMBIA',
    tabLink: '/orientation-2019/#/barnumbia',
  },
  {
    tab: 'CAMPUS LIFE',
    tabLink: '/orientation-2019/#/campus',
  },
  {
    tab: 'ACADEMICS',
    tabLink: '/orientation-2019/#/registration',
  },
];

const storiesToFollowArticles = [
  [
    {
      href: 1,
      link:
        'http://columbiaspectator.com/news/2019/08/22/manhattanville-move-progresses-but-faces-fundraising-delays/',
      photoUrl:
        'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/J5VNCTISZFGZJDST3TTWOK2KNE.jpg',
      photoAlt: 'manhattanville',
      headline: 'Manhattanville move progresses, but faces fundraising delays',
    },
    {
      href: 2,
      link:
        'https://www.columbiaspectator.com/news/2019/08/22/elite-college-admissions-under-national-scrutiny/',
      photoUrl:
        'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/YAWDMXHTGVHZHEOV745FERFK3I.jpg',
      photoAlt: 'College Admissions',
      headline: 'Elite college admissions under national scrutiny',
    },
    {
      href: 3,
      link:
        'https://www.columbiaspectator.com/news/2019/08/22/barnard-poised-for-sweeping-administrative-changes/',
      photoUrl:
        'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/RALDR4APQZCCVGLZ3WIXPOE2LM',
      photoAlt: 'Barnard administration',
      headline: 'Barnard poised for sweeping administrative changes',
    },
    {
      href: 4,
      link:
        'https://www.columbiaspectator.com/news/2019/08/22/barnard-public-safety-faces-extensive-investigation-as-students-cite-incidents-of-antiblack-racism/',
      photoUrl:
        'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/VUII2WXMNVHFPMQFYH5W26XWYM.jpg',
      photoAlt: 'Barnard Public Safety',
      headline:
        'Barnard Public Safety faces extensive investigation as students cite incidents of antiblack racism',
    },
  ],
  [
    {
      href: 5,
      link:
        'http://columbiaspectator.com/news/2019/08/22/columbia-faces-major-transition-period-following-series-of-administrative-hires/',
      photoUrl:
        'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/VU4IBS6FUZBSRCX47NNCDYQ45E.jpg',
      photoAlt: 'Columbia administration',
      headline:
        'Columbia faces major transition period following series of administrative hires',
    },
    {
      href: 6,
      link:
        'https://www.columbiaspectator.com/news/2019/08/22/centennial-anniversary-of-the-core-marked-by-heated-debates-over-curriculums-diversity/',
      photoUrl:
        'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/4EDU67YKSBBIJPHSRFNJ3OCC6U.jpeg',
      photoAlt: '100th anniversary of core',
      headline:
        'Centennial anniversary of the Core marked by heated debates over curriculum’s diversity',
    },
    {
      href: 7,
      link:
        'https://www.columbiaspectator.com/news/2019/08/22/as-manhattanville-expands-columbia-continues-to-shape-its-relationship-with-harlem/',
      photoUrl:
        'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/PIGWCZ5Z7BERROWJDIDUXSLG4M.jpg',
      photoAlt: 'WHDC',
      headline:
        'As Manhattanville expands, Columbia continues to shape its relationship with Harlem',
    },
    {
      href: 8,
      link:
        'https://www.columbiaspectator.com/sports/2019/08/22/looking-back-at-the-2018-19-season/',
      photoUrl:
        'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/LUNTZKDWGVAWBDMTFW5QWRNPHU.jpg',
      photoAlt: 'looking back at the 18-19 sports season',
      headline: 'Looking back at the 2018-19 season',
    },
  ],
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
    <Carousel slides={storiesToFollowArticles} />
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
