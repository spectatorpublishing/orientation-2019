import React from "react";

import { storiesOf } from "@storybook/react";

import SectionTitle from "../components/SectionTitle.jsx";
import BannerButton from "../components/BannerButton.jsx";
import MapsList from "../components/MapsList.jsx";
import Article from "../components/Article";
//import DiscourseContainer from "../components/DiscourseContainer";
import Divider from "../components/Divider";
import DividerWithNames from "../components/DividerWithNames";
import GetToKnow from "../components/GetToKnow";

const sectionDemo = {
  title: "demo title",
  members: ["name1, position1", "name2, position2", "name3, position3"]
};

const bannerButtonDemo = {
  title: "demo title",
  url: "https://www.columbiaspectator.com",
  color: "#f1bc9c",
  shadowColor: "#f26d5b",
  textColor: "#174d5b"
};

storiesOf("Section", module).add("with member information", () => (
  <SectionTitle title={sectionDemo.title} members={sectionDemo.members} />
));

storiesOf("Banner Button", module).add("go to url in new tab on click", () => (
  <BannerButton
    title={bannerButtonDemo.title}
    url={bannerButtonDemo.url}
    color={bannerButtonDemo.color}
    shadowColor={bannerButtonDemo.shadowColor}
    textColor={bannerButtonDemo.textColor}
  />
));

const dataUrl = { name: "places to hang out", url: "/dummyurl" };
const rightData = [
  dataUrl,
  dataUrl,
  dataUrl,
  dataUrl,
  dataUrl,
  dataUrl,
  dataUrl
];
const leftData = [
  dataUrl,
  dataUrl,
  dataUrl,
  dataUrl,
  dataUrl,
  dataUrl,
  dataUrl
];
storiesOf("MapsList", module).add("default", () => (
  <MapsList rightList={rightData} leftList={leftData} />
));

storiesOf("Article", module).add("Without Container", () => (
  <Article
    link="https://www.columbiaspectator.com/sports/2019/08/17/football-kicks-off-season-at-ivy-league-media-day-hosted-by-espn/"
    photoUrl="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/2ZOZLPVQ4NC5VOBUIY3HGTJDHU.jpg"
    headline="Football kicks off season at Ivy League Media Day hosted by ESPN"
  />
));

/*
storiesOf("Discourse Container", module).add("With Articles", () => (
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
));
*/

storiesOf("Divider", module).add("Default", () => (
  <Divider
    title="LIKE WHAT YOU SEE?"
    body={false}
    link="//columbiaspectator.com"
  />
));

const recognition =
  "COVER ART BY: JOURNALISM DESIGNER WEBSITE DESIGN BY: CECILIA ORDUÑA DEVELOPED BY: ARSALAAN ANSARI, WILLIAM CHIU, HARRISON WANG, HARRISON WANG, BILL CHEN & CHENOA BUNTS-ANDERSON";
storiesOf("DividerWithNames", module).add("Default", () => (
  <DividerWithNames
    title="LIKE WHAT YOU SEE?"
    body={false}
    link="//columbiaspectator.com"
    recognition={recognition}
  />
));

const backgroundImage = {
  image:
    "https://upload.wikimedia.org/wikipedia/commons/c/c7/GoogleLogoSept12015.png"
};
const getToKnow = [
  {
    tab: "BARNUMBIA",
    tabLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    tab: "CAMPUS LIFE",
    tabLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    tab: "ACADEMICS",
    tabLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];

storiesOf("GetToKnow", module).add("GetToKnow", () => (
  <GetToKnow getToKnow={getToKnow} backgroundImage={backgroundImage} />
));
