import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  background: #f1bc9c;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16rem;
  height: 24rem;
  margin-top: -23.5rem;
`;

const Container2 = styled.div`
  border: 0.3rem solid #f26d5b;
  width: 16rem;
  height: 24rem;
  margin-left: 0.5rem;
`;
const Title = styled.h1`
  color: #174d5b;
  padding: 3rem 3rem;
`;
const BannerButton = (props) => {
  const { title, url } = props;

  return (
    <div>
      <Container2 />
      <Container>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Title>{title}</Title>
        </a>
      </Container>
    </div>
  );
};

BannerButton.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default BannerButton;
