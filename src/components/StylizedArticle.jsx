import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../GlobalStyles';

const Container = styled.a`
  display: block;
  text-decoration: none;
`;

const Headline = styled.h4`
  color: ${theme.navy} !important;
  padding: 1.5rem;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const Footer = styled.div`
  background: ${theme.purple};
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

function Article({
  link, photoAlt, photoUrl, headline,
}) {
  return (
    <Container href={link} target="_blank">
      <Image alt={photoAlt} src={photoUrl} />
      <Footer>
        <Headline>{headline}</Headline>
      </Footer>
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
