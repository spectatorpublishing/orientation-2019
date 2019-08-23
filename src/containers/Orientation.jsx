import React from 'react';
import WelcomeContainer from './WelcomeContainer';
import BannerRow from './BannerRow';
import StaffContainer from './StaffContainer';
import DiscourseContainer from './DiscourseContainer';
import Navbar from '../components/Navbar';
import Article from '../components/Article';

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

const navBarEntries = [
  'HOME',
  'CLUBS',
  'REGISTRATION',
  'GET TO KNOW BARNUMBIA',
  'MAPS',
  '116 TRADITIONS',
  'JOIN SPEC',
];

const StaffContainerDemo = {
  url:
    'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
  alt: 'staff photo',
};
const Orientation = () => (
  <div>
    <Navbar entries={navBarEntries} />
    <WelcomeContainer id="welcome" tocEntries={tocEntries} />
    <BannerRow buttons={BannerRowDemo} mobileButtons={MobileBannerRowDemo} />
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
    <StaffContainer url={StaffContainerDemo.url} alt={StaffContainerDemo.alt} />
    {/* temporarily all the staff info data are stored inside its own file */}
  </div>
);

export default Orientation;
