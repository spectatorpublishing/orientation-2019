import React from "react";
import WelcomeContainer from "./WelcomeContainer";

const tocEntries = [
  "Get to know Barnumbia",
  "116 Traditions",
  "Maps",
  "Stories to Follow",
  "Join the Discourse",
  "Join Spec"
];

/*
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
*/

const Orientation = () => (
  <div>
    <WelcomeContainer id="welcome" tocEntries={tocEntries} />
  </div>
);

export default Orientation;
