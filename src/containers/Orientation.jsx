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

const tocEntries = [
  'Campus Life',
  'Academics',
  'Courses We Loved',
  '116 Things to do before Graduating',
  'Get Your Textbooks',
  'Maps',
  'Stories To Follow',
  'Join the Discourse',
  'Spectator Staff',
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

const recognition = 'COVER ART BY: JOURNALISM DESIGNER WEBSITE DESIGN BY: CECILIA ORDUÑA DEVELOPED BY: ARSALAAN ANSARI, WILLIAM CHIU, HARRISON WANG, HARRISON WANG, BILL CHEN & CHENOA BUNTS-ANDERSON';

const getToKnowImage = {
  image:
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZNKTNLGKAFHUTFSIXC4HFO3OR4.jpeg',
};
const getToKnow = [
  {
    tab: 'BARNUMBIA',
    tabLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    tab: 'CAMPUS LIFE',
    tabLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    tab: 'ACADEMICS',
    tabLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
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
    <GetToKnow getToKnow={getToKnow} backgroundImage={getToKnowImage} />
    <BannerRow buttons={BannerRowDemo} mobileButtons={MobileBannerRowDemo} />
    <Carousel slides={storiesToFollowArticles} />
    <DiscourseContainer>
      <Article
        link="https://www.columbiaspectator.com/sports/2019/08/17/football-kicks-off-season-at-ivy-league-media-day-hosted-by-espn/"
        photoUrl="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/2ZOZLPVQ4NC5VOBUIY3HGTJDHU.jpg"
        headline="Football kicks off season at Ivy League Media Day hosted by ESPN"
      />
      <Article
        link="https://www.columbiaspectator.com/sports/2019/08/17/football-kicks-off-season-at-ivy-league-media-day-hosted-by-espn/"
        photoUrl="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/2ZOZLPVQ4NC5VOBUIY3HGTJDHU.jpg"
        headline="Football kicks off season at Ivy League Media Day hosted by ESPN"
      />
      <Article
        link="https://www.columbiaspectator.com/sports/2019/08/17/football-kicks-off-season-at-ivy-league-media-day-hosted-by-espn/"
        photoUrl="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/2ZOZLPVQ4NC5VOBUIY3HGTJDHU.jpg"
        headline="Football kicks off season at Ivy League Media Day hosted by ESPN"
      />
      <Article
        link="https://www.columbiaspectator.com/sports/2019/08/17/football-kicks-off-season-at-ivy-league-media-day-hosted-by-espn/"
        photoUrl="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/2ZOZLPVQ4NC5VOBUIY3HGTJDHU.jpg"
        headline="Football kicks off season at Ivy League Media Day hosted by ESPN"
      />
    </DiscourseContainer>
    <DividerWithNames
      title="LIKE WHAT YOU SEE?"
      body={false}
      link="//columbiaspectator.com"
      recognition={recognition}
    />
    <StaffContainer staffInfo={StaffInfo} />
  </div>
);

export default Orientation;
