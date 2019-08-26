import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../GlobalStyles';

const Container = styled.a`
  display: block;
  text-decoration: none;
`;

const Headline = styled.p`
  margin-top: 1rem;
  color: #242c49;
`;

const Image = styled.img`
  max-width: 100%;
`;

const ClickNotice = styled.p`
  color: ${(props) => props.linkColor} !important;
  font-size: 0.8rem;
  line-height: 1rem;
  display: block;
`;

function Article({
  link, photoAlt, photoUrl, headline, linkColor,
}) {
  return (
    <Container href={link} target="_blank">
      <Image alt={photoAlt} src={photoUrl} />
      <Headline>{headline}</Headline>
      <ClickNotice linkColor={linkColor}>| Click to read more</ClickNotice>
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
