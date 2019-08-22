import React from 'react';
import WelcomeContainer from './WelcomeContainer';

const tocEntries = ['welcome'];
const Orientation = () => (
  <WelcomeContainer id="welcome" tocEntries={tocEntries} />
);

export default Orientation;
