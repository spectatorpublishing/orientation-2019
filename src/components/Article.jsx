import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.a`
  display: block;
  text-decoration: none;
`;

const Headline = styled.p`
  margin-top: 1rem;
`;

const Image = styled.img`
  max-width: 100%;
`;

function Article({
  link, photoAlt, photoUrl, headline,
}) {
  return (
    <Container href={link} target="_blank">
      <Image alt={photoAlt} src={photoUrl} />
      <Headline>{headline}</Headline>
    </Container>
  );
}

Article.propTypes = {
  photoAlt: PropTypes.string,
  photoUrl: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

Article.defaultProps = {
  photoAlt: '',
};

export default Article;
