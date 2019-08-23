import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Orientation from './containers/Orientation';
import Subpage from './containers/SubpageContainer';
import TextbooksContainer from './containers/TextbooksContainer';
import { GlobalStyles, theme } from './GlobalStyles';
import Navbar from './components/Navbar';
import BarnumbiaData from './data/BarnumbiaData';
import RegistrationData from './data/RegistrationData';
import StudentLifeData from './data/StudentLifeData';

const navBarEntries = [
  {
    title: 'HOME',
    linkUrl: '/',
  },
  {
    title: 'CLUBS',
    linkUrl: 'https://www.columbiaspectator.com/orientation-2018/campus-maps/',
  },
  {
    title: 'REGISTRATION',
    linkUrl: '/#/registration',
  },
  {
    title: 'GET TO KNOW BARNUMBIA',
    linkUrl: '/#/barnumbia',
  },
  {
    title: 'MAPS',
    linkUrl: 'https://www.columbiaspectator.com/orientation-2018/campus-maps/',
  },
  {
    title: '116 TRADITIONS',
    linkUrl:
      'https://www.columbiaspectator.com/orientation-2018/116-traditions/',
  },
  {
    title: 'JOIN SPEC',
    linkUrl: 'http://www.specpublishing.com/join',
  },
];
const home = () => <Orientation />;
const barnumbia = () => (
  <Subpage title="GET TO KNOW BARNUMBIA" data={BarnumbiaData} />
);
const course = () => (
  <Subpage title="COURSE REGISTRATION" data={RegistrationData} />
);

const campus = () => <Subpage title="CAMPUS LIFE" data={StudentLifeData} />;

const textbooks = () => (
  <TextbooksContainer title="TEXTBOOKS" data={RegistrationData} />
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar entries={navBarEntries} />
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/barnumbia" component={barnumbia} />
          <Route exact path="/registration" component={course} />
          <Route exact path="/campus" component={campus} />
          <Route exact path="/textbooks" component={textbooks} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
