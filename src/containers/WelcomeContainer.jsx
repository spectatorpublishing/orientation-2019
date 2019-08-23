import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Desktop, MobileAndTablet } from 'react-responsive-simple';
import TableOfContents from '../components/TableOfContents';
import { theme } from '../GlobalStyles';

const photoUrl = 'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/KPXXJFOVYRHR5HPKJ76CND2574.jpg';
const opaqueUrl = 'https://spectator.arcpublishing.com/photo/resize/6OpqLabVVWxuYjOPt8GHrrT9CIE=/arc-anglerfish-arc2-prod-spectator/ZNKTNLGKAFHUTFSIXC4HFO3OR4.jpeg';

const Container = styled.div`
  height: 100vh;
  @media (max-width: ${theme.medium}) {
    height: auto;
    background-image: url(${opaqueUrl});
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3.5vh 5vw 0vh 5vw;
  @media (max-width: ${theme.medium}) {
    margin-top: 0vh;
    text-align: center;
  }
`;

const OrientationImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const OrientationImage = styled.img`
  object-fit: cover;
  width: 100%;
  min-height: 100%;
`;

const Italicized = styled.p`
  margin-top: 0.5rem;
  font-style: italic;
  font-size: 200;
`;

const Title = styled.h1`
  @media (max-width: ${theme.medium}) {
    margin-top: 20vh;
    font-size: 5rem;
  }
`;

const Subtitle = styled.h2`
  margin-top: -2vh;
  @media (max-width: ${theme.medium}) {
    font-size: 4rem;
  }
`;

const WelcomeContainer = (props) => {
  const { tocEntries } = props;
  return (
    <>
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
    </>
  );
};

WelcomeContainer.propTypes = {
  tocEntries: PropTypes.arrayOf.isRequired,
};

export default WelcomeContainer;
