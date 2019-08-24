import React, { Component } from 'react';
import styled from 'styled-components';
import mapsData from '../data/MapsData';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  margin: 5vh 3vw;

  @media only screen and (max-width: ${(props) => props.theme.medium}) {
    flex-direction: column-reverse;
    margin: unset;
  }
`;

const MapsList = styled.div`
  flex: 1 1 40%;
  padding-right: 3vw;
  border: 1rem;
  box-sizing: border-box;
  & > div {
    background: #f9b5ed;
    padding: 2rem;
    position: relative;
    box-sizing: border-box;

    &:after {
      content: " ";
      width: 100%;
      height: 100%;
      position: absolute;
      box-sizing: border-box;
      top: -0.6rem;
      right: -0.6rem;
      z-index: -1;
      border: 0.2rem solid #f26d5b;
    }

    & h2 {
      color: white;
    }

    & div {
      transform: translateX(1rem);

      &:focus {
        outline: none;
      }

      &:hover:not(.active) {
        transform: translateX(2rem);
      }

      &.active {
        transform: translateX(0rem);
      }

      & p {
        color: white;
        font-size: 1.2rem;
      }
    }
  }
  @media only screen and (max-width: ${(props) => props.theme.medium}) {
    margin: 5vh 3vw;
  }
`;

const MapDisplay = styled.div`
  flex: 1 1 60%;
  & iframe {
    height: 100%;
    width: 100%;
    border: none;
  }

  @media only screen and (max-width: ${(props) => props.theme.medium}) {
    height: 100vh;
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
          <div>
            <h2>Maps</h2>
            {mapsData.map(({ name, link }, i) => (
              <div
                key={name}
                onClick={this.handleSelect}
                onKeyDown={this.handleClick}
                role="button"
                tabIndex={i}
                className={link === currentMap ? 'active' : false}
              >
                <p>{name}</p>
              </div>
            ))}
          </div>
        </MapsList>
        <MapDisplay id="map">
          <iframe title="map-iframe" src={currentMap} />
        </MapDisplay>
      </Row>
    );
  }
}
