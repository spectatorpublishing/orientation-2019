import styled from 'styled-components';
import React, { Component } from 'react';
import TableOfContents from '../components/TableOfContents';

const Container = styled.div``;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 75vh;
  overflow: hidden;
`;

const WelcomeColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  padding: 5rem;
`;

const TableOfContentsPlaceholder = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: flex-end;
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
  font-style: italic;
`;

const tempUrl = 'https://d.newsweek.com/en/full/465055/05-31-nayla-kidd-columbia-01.jpg';

const entries = ['welcome'];
export default class Orientation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row id={entries[0]}>
          <WelcomeColumn>
            <WelcomeContainer>
              <div>
                <h1>Welcome</h1>
                <h2>Class of 2023</h2>
                <Italicized>
                  Select an option below to explore your orientation guide
                </Italicized>
              </div>
            </WelcomeContainer>
            <TableOfContentsPlaceholder>
              <TableOfContents entries={entries} />
            </TableOfContentsPlaceholder>
          </WelcomeColumn>
          <WelcomeColumn>
            <OrientationImageContainer>
              <OrientationImage src={tempUrl} />
            </OrientationImageContainer>
          </WelcomeColumn>
        </Row>
      </Container>
    );
  }
}
