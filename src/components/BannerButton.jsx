import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// the dimensions of Container are 1 + dimensions of Box
const Container = styled.div`
  width: 17rem;
  height: 25rem;
  position: relative;
`;

const Box = styled.div`
  text-align: center;
  display: flex;
  background: ${(props) => props.color};
  align-items: center;
  justify-content: center;
  width: 16rem;
  height: 24rem;
  position: absolute;
  top: 0.7rem;
`;

// here dimensions are set to offset the size of the border
const BoxShadow = styled.div`
  border: 0.3rem solid;
  width: 15.7rem;
  height: 23.7rem;
  position: absolute;
  left: 0.7rem;
`;

const Title = styled.h1`
  padding: 3rem;
`;

const BannerButton = (props) => {
  const {
    title, url, color, shadowColor, textColor,
  } = props;

  return (
    <Container>
      <BoxShadow style={{ borderColor: shadowColor }} />
      <Box style={{ background: color }}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer" // set to avoid potential data breach on the original page side;
          // "noopener" denies access of the new page to the original,
          // "noreferrer" prevents browser from sending original page address as referrer
          style={{ textDecoration: 'none' }}
        >
          <Title style={{ color: textColor }}>{title}</Title>
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
  shadowColor: '#f26d5b',
  textColor: '#174d5b',
};

export default BannerButton;
