import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../GlobalStyles';

// the dimensions of Container are 1 + dimensions of Box
const Container = styled.div`
  width: 20vw;
  height: 30vw;
  position: relative;
  margin: 1rem 0rem;

  @media (max-width: ${theme.medium}) {
    width: 80vw;
    height: 25vw;
  }
`;

const Box = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 3%;
  background: ${(props) => props.color};

  &:hover {
    top: 1.5%;
    left: 3.5%;
  }

  @media (max-width: ${theme.medium}) {
    width: 100%;
    height: 100%;
    top: 7%;

    &:hover {
      top: 3%;
      left: 1%;
    }
  }
`;

// here dimensions are set to offset the size of the border
const BoxShadow = styled.div`
  border: 0.2rem solid;
  width: 98%;
  height: 98%;
  position: absolute;
  left: 5%;
  border-color: ${(props) => props.shadowColor};

  @media (max-width: ${theme.medium}) {
    left: 3%;
    width: 98%;
    height: 98%;
  }
`;

const Title = styled.h3`
  padding: 3rem;
  font-size: 2.5vw;
  color: ${(props) => props.textColor};
  @media (max-width: ${theme.medium}) {
    font-size: 5vw;
  }
`;

const BannerButton = (props) => {
  const {
    title, url, color, shadowColor, textColor,
  } = props;
  return (
    <Container>
      <BoxShadow shadowColor={shadowColor} />
      <Box color={color}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer" // set to avoid potential data breach on the original page side;
          // "noopener" denies access of the new page to the original,
          // "noreferrer" prevents browser from sending original page address as referrer
          style={{ textDecoration: 'none' }}
        >
          <Title textColor={textColor}>{title}</Title>
        </a>
      </Box>
    </Container>
  );
};

BannerButton.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string,
  shadowColor: PropTypes.string,
  textColor: PropTypes.string,
};

BannerButton.defaultProps = {
  color: '#f1bc9c',
  shadowColor: theme.orange,
  textColor: 'white',
};

export default BannerButton;
