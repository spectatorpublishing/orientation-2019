import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StylizedArticle from '../components/StylizedArticle';
import { theme } from '../GlobalStyles';

const OuterContainer = styled.div``;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

const Title = styled.h2`
  margin: 3vh 0vw 3vh 0vw;
  text-align: center;
`;
const ArticleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: block;
`;
const SectionRow = styled.div`
  margin: 0vh 15vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: left;
  flex-wrap: wrap;
  flex-grow: 0;
  & > div {
    box-sizing: border-box !important;
    flex: 0 1 33%;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    max-height: 100%;
    @media (max-width: ${theme.medium}) {
      flex: 0 1 50%;
    }
    @media (max-width: ${theme.small}) {
      flex: 0 1 100%;
    }
  }

  &::after {
    content: "";
    flex: auto;
    width: 30vw;
    flex-grow: 0;
  }
`;

const Subpage = (props) => {
  const { title, data } = props;
  return (
    <OuterContainer>
      <Title>{title}</Title>
      <InnerContainer>
        <SectionRow>
          {data.map((article) => (
            <ArticleContainer>
              <StylizedArticle
                link={article.link}
                photoUrl={article.photoUrl}
                photoAlt={article.photoAlt}
                headline={article.headline}
              />
            </ArticleContainer>
          ))}
        </SectionRow>
      </InnerContainer>
    </OuterContainer>
  );
};

Subpage.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Subpage;
