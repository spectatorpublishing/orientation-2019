import styled from 'styled-components';
import React, { Component } from 'react';
import TableOfContents from '../components/TableOfContents';
import Navbar from '../components/Navbar';

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

  generateEntries = () => {
    const entries = [];
    for (let i = 0; i < 12; i += 1) {
      entries.push(`yeet${i}`);
    }
    return entries;
  };

  render() {
    const NavBarEntries = [
      'HOME',
      'CLUBS',
      'REGISTRATION',
      'GET TO KNOW BARNUMBIA',
      'MAPS',
      '116 TRADITIONS',
      'JOIN SPEC',
    ];
    return (
      <Container>
        <Row>
          <WelcomeColumn>
            <WelcomeContainer>
              <div style={{ height: '100vh', width: '100vw' }}>
                {' '}
                <Navbar entries={NavBarEntries} />
                <TableOfContents entries={this.generateEntries()} />
                {' '}
              </div>
              <div
                id="yeet0"
                style={{
                  height: '100vh',
                  width: '100vw',
                  backgroundColor: 'green',
                }}
              >
                Landing
                {' '}
              </div>
              <div
                id="yeet1"
                style={{
                  height: '100vh',
                  width: '100vw',
                  backgroundColor: 'red',
                }}
              >
                {' '}
                Section 1
                {' '}
              </div>
              <div
                id="yeet2"
                style={{
                  height: '100vh',
                  width: '100vw',
                  backgroundColor: 'blue',
                }}
              >
                {' '}
                Section 2
              </div>
              <div
                id="yeet3"
                style={{
                  height: '100vh',
                  width: '100vw',
                  backgroundColor: 'yellow',
                }}
              >
                {' '}
                Section 3
              </div>
              <div
                id="yeet4"
                style={{
                  height: '100vh',
                  width: '100vw',
                  backgroundColor: 'magenta',
                }}
              >
                {' '}
                Section 4
              </div>
              <div
                id="HOME"
                style={{
                  height: '100vh',
                  width: '100vw',
                  backgroundColor: 'blue',
                }}
              >
                {' '}
                HOME
              </div>
              <div
                id="CLUBS"
                style={{
                  height: '100vh',
                  width: '100vw',
                  backgroundColor: 'red',
                }}
              >
                {' '}
                CLUBS
              </div>
              <div
                id="REGISTRATION"
                style={{
                  height: '100vh',
                  width: '100vw',
                  backgroundColor: 'green',
                }}
              >
                {' '}
                REGISTRATION
              </div>
            </WelcomeContainer>
          </WelcomeColumn>
          <WelcomeColumn />
        </Row>
      </Container>
    );
  }
}
