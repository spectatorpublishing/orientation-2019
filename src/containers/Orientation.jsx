import styled from 'styled-components';
import React, { Component } from 'react';

const Container = styled.div``;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30rem;
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
  padding: 1.8rem;
  background-color: red;
`;

const TableOfContentsPlaceholder = styled.div`
  display: flex;
  flex: 1;
  background-color: blue;
  color: white;
  width: 100%;
  justify-content: flex-end;
  padding: 1.8rem;
`;

const OrientationImageContainer = styled.div`
  margin-left: 3.5rem;
  width: 100%;
  height: 100%;
  background-color: purple;
`;
const OrientationImage = styled.img`
  object-fit: cover;
  width: 100%;
  min-height: 100%;
`;

const tempUrl = 'https://d.newsweek.com/en/full/465055/05-31-nayla-kidd-columbia-01.jpg';

export default class Orientation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row>
          <WelcomeColumn>
            <WelcomeContainer>
              <div>
                <h1>Welcome</h1>
                <h2>Class of 2023</h2>
                <p>Select an option below to explore your orientation guide</p>
              </div>
            </WelcomeContainer>
            <TableOfContentsPlaceholder>
              <h2>Table of Contents</h2>
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
