import React from 'react';
import WelcomeContainer from './WelcomeContainer';

const tocEntries = [
  'Get to know Barnumbia',
  '116 Traditions',
  'Maps',
  'Stories to Follow',
  'Join the Discourse',
  'Join Spec',
];
const Orientation = () => (
  <WelcomeContainer id="welcome" tocEntries={tocEntries} />
);

export default Orientation;
