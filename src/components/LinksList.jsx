import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { HashRouter } from 'react-router-dom';
import { theme } from '../GlobalStyles';

const Container = styled.div`
  margin: 5vh 0vw;
  background: ${theme.yellow};
`;

const Title = styled.div`
  padding-top: 2vh;
  display: flex;
  align-items: center;
  padding: 1vw;
`;

const MapsHeading = styled.h2`
  flex: 30%;
  color: #ffffff;
  text-align: right;
  font-size: 5vw;
`;

const MapsDescription = styled.h4`
  font-style: italic;
  flex: 70%;
  color: #ffffff;
  text-align: left;
  margin-left: 0.75rem;
  font-size: 1.3vw;
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
  flex-direction: column;
  padding: 3.9vw;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
`;

const Item = styled.h4`
  font-size: 1.3vw;
  flex: 50%;
  padding: 1vw;
  color: #ffffff;
  &:hover{
    color: ${theme.black}
  }
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

const LinksList = (props) => {
  const { leftList, rightList, title, description } = props;
  return (
    <HashRouter basename="/mapslist/">
      <Container>
        <Title>
          <MapsHeading>{title}</MapsHeading>
          <MapsDescription>{description}</MapsDescription>
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

LinksList.propTypes = {
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

export default LinksList;
