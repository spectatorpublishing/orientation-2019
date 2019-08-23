import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import StylizedArticle from '../components/StylizedArticle';
// import { theme } from '../GlobalStyles';

const OuterContainer = styled.div``;

const Title = styled.h2`
  margin: 3vh 0vw 3vh 0vw;
  text-align: center;
`;

const TextbooksContainer = (props) => {
  const { title, data } = props;
  return (
    <OuterContainer>
      <Title>{title}</Title>
      <div>{data}</div>
    </OuterContainer>
  );
};

TextbooksContainer.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TextbooksContainer;
