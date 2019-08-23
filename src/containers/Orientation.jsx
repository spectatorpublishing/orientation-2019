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

const generateArticles = () => {
  const slides = [];
  for (let i = 0; i < 3; i += 1) {
    const articleArr = [];

    for (let j = 0; j < 4; j += 1) {
      const article = {
        href: i,
        photoUrl:
          'http://www.dumpaday.com/wp-content/uploads/2018/09/photos-21-3.jpg',
        photoAlt: 'yeett',
        headline: `Football kicks off season at Ivy League Media Day hosted by ESPN${i}${j}`,
      };
      articleArr.push(article);
    }
    slides.push(articleArr);
  }
  return slides;
};

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
    <Carousel slides={generateArticles()} />
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
