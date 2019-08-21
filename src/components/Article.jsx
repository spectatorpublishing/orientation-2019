import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 15rem;
`;

const Headline = styled.h4`
  margin-top: 1rem;
`;

const Image = styled.img`
  max-width: 100%;
`;

function Article({
  link, photoAlt, photoUrl, headline,
}) {
  const handleClick = useCallback(() => {
    window.open(link);
  }, [link]);

  return (
    <Container onClick={handleClick}>
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
