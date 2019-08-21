import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { HashRouter } from 'react-router-dom';

const Container = styled.div`
  background: #ffc2b3;
`;

const Title = styled.div`
  padding-top: 16px;
  display: flex;
  width: 100%;
  align-items: center;
`;

const MapsHeading = styled.h1`
  flex: 30%;
  color: #ffffff;
  text-align: right;
  margin-right: 16px;
`;

const MapsDescription = styled.h4`
  font-style: italic;
  flex: 70%;
  color: #ffffff;
  text-align: left;
  margin-left: 16px;
`;

const Body = styled.div`
  display: flex;
  text-align: center;
  padding-bottom: 16px;
`;

const ItemList = styled.div`
  flex: 50%;
  font-style: italic;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-left: 12px;
  margin-right: 12px;
`;

const Item = styled.h4`
  flex: 50%;
  padding: 8px;
  color: #ffffff;
`;

/*
Format for lists are as follows:
leftList = [
  {
    name: (string),
    url: /home
  },
  {
    name: (string),
    url: /navbar
  }
]
*/

const MapsList = (props) => {
  const { leftList, rightList } = props;
  return (
    <HashRouter basename="/mapslist/">
      <Container>
        <Title>
          <MapsHeading>MAPS</MapsHeading>
          <MapsDescription>explore places on and around campus</MapsDescription>
        </Title>
        <Body>
          <ItemList>
            {leftList.map((child) => (
              <HashLink style={{ textDecoration: 'none' }} to={child.url}>
                {<Item>{child.name}</Item>}
              </HashLink>
            ))}
          </ItemList>
          <hr width="1" size="90%" color="#ffffff" />
          <ItemList>
            {rightList.map((child) => (
              <HashLink style={{ textDecoration: 'none' }} to={child.url}>
                {<Item>{child.name}</Item>}
              </HashLink>
            ))}
          </ItemList>
        </Body>
      </Container>
    </HashRouter>
  );
};

MapsList.propTypes = {
  leftList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
  rightList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
};

export default MapsList;
