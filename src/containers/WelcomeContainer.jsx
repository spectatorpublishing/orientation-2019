import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Desktop, MobileAndTablet } from 'react-responsive-simple';
import TableOfContents from '../components/TableOfContents';
import { theme } from '../GlobalStyles';

const photoUrl = 'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/KPXXJFOVYRHR5HPKJ76CND2574.jpg';
const opaqueUrl = 'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZNKTNLGKAFHUTFSIXC4HFO3OR4.jpeg';

const Container = styled.div`
  min-height: 100vh;
  @media (max-width: ${theme.large}) {
    background-image: url(${opaqueUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  overflow: hidden;
`;

const Row = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3.5vh 5vw 0vh 5vw;
  @media (max-width: ${theme.large}) {
    margin-top: 0vh;
    text-align: center;
  }
`;

const OrientationImageContainer = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${photoUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Italicized = styled.p`
  margin-top: 0.5rem;
  font-style: italic;
  font-weight: lighter;
  @media (max-width: ${theme.large}) {
    text-shadow: 2px 2px 4px white;
  }
`;

const Title = styled.h1`
  @media (max-width: ${theme.large}) {
    margin-top: 5vh;
  }
`;

const Subtitle = styled.h2`
  margin-top: -2vh;
`;

const WelcomeContainer = (props) => {
  const { tocEntries } = props;
  return (
    <div>
      <Desktop>
        <Container>
          <Row>
            <Column>
              <TextContainer>
                <Title>WELCOME</Title>
                <Subtitle>CLASS OF 2023</Subtitle>
                <Italicized>
                  Select an option below to explore your orientation guide
                </Italicized>
              </TextContainer>
              <TableOfContents entries={tocEntries} />
            </Column>
            <OrientationImageContainer />
          </Row>
        </Container>
      </Desktop>
      <MobileAndTablet>
        <Container>
          <TextContainer>
            <Title>WELCOME</Title>
            <Subtitle>CLASS OF 2023</Subtitle>
            <Italicized>
              Select an option below to explore your orientation guide
            </Italicized>
          </TextContainer>
          <TableOfContents entries={tocEntries} />
        </Container>
      </MobileAndTablet>
    </div>
  );
};

WelcomeContainer.propTypes = {
  tocEntries: PropTypes.arrayOf.isRequired,
};

export default WelcomeContainer;
