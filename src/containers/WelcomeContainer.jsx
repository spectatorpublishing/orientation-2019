import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Desktop, ResponsiveComponent } from 'react-responsive-simple';
import TableOfContents from '../components/TableOfContents';
import { theme } from '../GlobalStyles';

const photoUrl = 'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/KPXXJFOVYRHR5HPKJ76CND2574.jpg';
const opaqueUrl = 'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZNKTNLGKAFHUTFSIXC4HFO3OR4.jpeg';

const Container = styled.div`
  height: auto;
  @media (max-width: ${theme.large}) {
    height: auto;
    background-image: url(${opaqueUrl});
  }
  overflow: hidden;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
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
  height: 0;
`;
const OrientationImage = styled.img`
  object-fit: contain;
  width: 100%;
  min-height: 100%;
`;

const Italicized = styled.h5`
  margin-top: 0.5rem;
  font-style: italic;
  font-weight: lighter;
`;

const Title = styled.h1`
  @media (max-width: ${theme.large}) {
    margin-top: 20vh;
    font-size: 5rem;
  }
`;

const Subtitle = styled.h2`
  margin-top: -2vh;
  @media (max-width: ${theme.large}) {
    font-size: 4rem;
  }
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
            <Column>
              <OrientationImageContainer>
                <OrientationImage src={photoUrl} />
              </OrientationImageContainer>
            </Column>
          </Row>
        </Container>
      </Desktop>
      <ResponsiveComponent max={1100}>
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
      </ResponsiveComponent>
    </div>
  );
};

WelcomeContainer.propTypes = {
  tocEntries: PropTypes.arrayOf.isRequired,
};

export default WelcomeContainer;
