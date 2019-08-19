import styled from 'styled-components';
import React, { Component } from 'react';


const Container = styled.div``;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const WelcomeColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const WelcomeContainer = styled.div``;

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
              <div>Welcome</div>
              <div>Class of 2023</div>
              <div>
                Select an option below to explore your orientation guide
              </div>
            </WelcomeContainer>
          </WelcomeColumn>
          <WelcomeColumn />
        </Row>
      </Container>
    );
  }
}
