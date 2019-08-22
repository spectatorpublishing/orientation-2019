import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import TableOfContents from '../components/TableOfContents';

const Container = styled.div``;

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

const Subtitle = styled.h2`
  margin-top: -2vh;
`;

const tempUrl = 'https://d.newsweek.com/en/full/465055/05-31-nayla-kidd-columbia-01.jpg';

const WelcomeContainer = (props) => {
  const { tocEntries } = props;
  return (
    <Container>
      <Row>
        <Column>
          <TextContainer>
            <h1>WELCOME</h1>
            <Subtitle>CLASS OF 2023</Subtitle>
            <Italicized>
              Select an option below to explore your orientation guide
            </Italicized>
          </TextContainer>
          <TableOfContents entries={tocEntries} />
        </Column>
        <Column>
          <OrientationImageContainer>
            <OrientationImage src={tempUrl} />
          </OrientationImageContainer>
        </Column>
      </Row>
    </Container>
  );
};

WelcomeContainer.propTypes = {
  tocEntries: PropTypes.arrayOf.isRequired,
};

export default WelcomeContainer;
