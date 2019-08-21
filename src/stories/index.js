import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import SectionTitle from "../components/SectionTitle.jsx";
import MapsList from "../components/MapsList.jsx";
import Article from "../components/Article";

const sectionComponentDemo = {
  title: "demo title",
  members: ["name1, position1", "name2, position2", "name3, position3"]
};

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Section", module).add("with member information", () => (
  <SectionTitle
    title={sectionComponentDemo.title}
    members={sectionComponentDemo.members}
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

storiesOf("Article", module).add("With Container", () => (
  <Article
    link="https://www.columbiaspectator.com/sports/2019/08/17/football-kicks-off-season-at-ivy-league-media-day-hosted-by-espn/"
    photoUrl="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/2ZOZLPVQ4NC5VOBUIY3HGTJDHU.jpg"
    headline="Football kicks off season at Ivy League Media Day hosted by ESPN"
  />
));
