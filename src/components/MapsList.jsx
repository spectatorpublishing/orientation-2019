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
  margin-right: 0.75rem;
`;

const MapsDescription = styled.h4`
  font-style: italic;
  flex: 70%;
  color: #ffffff;
  text-align: left;
  margin-left: 0.75rem;
`;

const Body = styled.div`
  display: flex;
  text-align: center;
  padding-bottom: 0.75rem;
`;

const ItemList = styled.div`
  flex: 50%;
  font-style: italic;
  display: flex;
  font-size: 16px;
  flex-direction: column;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
`;

const Item = styled.h4`
  font-size: 16px;
  flex: 50%;
  padding: 0.75rem;
  color: #ffffff;
`;

const Vr = styled.hr`
  height: rem;
  width: 1px;
  color: #ffffff;
  border-left: none;
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

const generateList = (list) => list.map((child) => (
  <HashLink style={{ textDecoration: 'none' }} to={child.url}>
    {<Item>{child.name}</Item>}
  </HashLink>
));

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
          <ItemList>{generateList(leftList)}</ItemList>
          <Vr />
          <ItemList>{generateList(rightList)}</ItemList>
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
