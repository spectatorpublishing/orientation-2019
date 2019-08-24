import React, { Component } from 'react';
import styled from 'styled-components';
import mapsData from '../data/MapsData';
import { theme } from '../GlobalStyles';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  margin: 5vh 0;

  @media only screen and (max-width: ${(props) => props.theme.medium}) {
    flex-direction: column-reverse;
  }
`;

const MapsList = styled.div`
  flex: 1 1 40%;
  padding: 2rem;
  border: 1rem;
  box-sizing: border-box;
  & p {
    color: white;
  }
  background: ${theme.yellow};
`;

const MapDisplay = styled.div`
  flex: 1 1 60%;
  & iframe {
    height: 100%;
    width: 100%;
    border: none;
  }
`;

export default class MapsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { currentMap: mapsData[0].link };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(i) {
    this.setState({
      currentMap: mapsData.find(
        ({ name }) => i.currentTarget.textContent === name,
      ).link,
    });
  }

  render() {
    const { currentMap } = this.state;
    return (
      <Row>
        <MapsList>
          {mapsData.map(({ name }, i) => (
            <div
              key={name}
              onClick={this.handleSelect}
              onKeyDown={this.handleClick}
              role="button"
              tabIndex={i}
            >
              <p>{name}</p>
            </div>
          ))}
        </MapsList>
        <MapDisplay>
          <iframe title="map-iframe" src={currentMap} />
        </MapDisplay>
      </Row>
    );
  }
}
