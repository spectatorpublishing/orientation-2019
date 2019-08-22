import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const OuterContainer = styled.div`
  margin: auto 3rem;
`;

const InnerContainer = styled.div`
  display: flex;
  border: 2px #fdcbbb solid;
  margin-top: 5rem;
`;

const TextContainer = styled.div`
  box-sizing: border-box;
  display: block;
  max-width: 40%;
  padding: 0.5rem;
`;

const Header = styled.h3`
  text-transform: uppercase;
`;

const Description = styled.p`
  font-style: italic;
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -5rem;
  direction: rtl;

  & > div {
    box-sizing: border-box;
    flex: 1 1 50%;
    min-width: 20rem;
    direction: ltr;
    display: flex;
    flex-wrap: wrap;

    & a {
      padding: 1rem;
      flex: 1 1 25%;
      min-width: 10rem;
    }
  }
`;

function DiscourseContainer({ children }) {
  const articlePairs = children.reduce((result, value, index, array) => {
    if (index % 2 === 0) result.push(array.slice(index, index + 2));
    return result;
  }, []);

  return (
    <OuterContainer>
      <InnerContainer>
        <TextContainer>
          <Header>Join the discourse</Header>
          <Description>the hottest topics on campus</Description>
        </TextContainer>
        <ArticleContainer>
          {articlePairs.map((articlePair) => (
            <div>{articlePair}</div>
          ))}
        </ArticleContainer>
      </InnerContainer>
    </OuterContainer>
  );
}

DiscourseContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default DiscourseContainer;
