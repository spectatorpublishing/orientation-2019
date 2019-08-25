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
  box-sizing: border-box !important;
  & > div {
    background: #ffd05f;
    padding: 2rem;
    position: relative;
    box-sizing: border-box !important;

    & h2 {
      color: white;
      text-transform: uppercase;
      @media (max-width: ${theme.large}) {
        text-align: center;
      }
    }

    & div {
      cursor: pointer;
      transform: translateX(1rem);

      &:focus {
        outline: none;
      }

      &:hover,
      &.active {
        font-style: italic;
      }

      & p {
        padding: 0.3rem;
        color: white;
        font-weight: bold;

        @media (max-width: ${theme.large}) {
          font-size: 1rem;
        }
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
    -webkit-overflow-scrolling: touch;
  }
`;

const Title = styled.h3`
  color: white;
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
            <Title>Maps</Title>
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
