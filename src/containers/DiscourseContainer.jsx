import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../GlobalStyles';

const OuterContainer = styled.div`
  margin: 5vh 3vw;
`;

const InnerContainer = styled.div`
  display: flex;
  border: 2px ${theme.orange} solid;
  margin-top: 5rem;
`;

const DesktopTextContainer = styled.div`
  box-sizing: border-box !important;
  display: none;
  max-width: 40%;
  padding: 0.5rem;

  @media only screen and (min-width: ${(props) => props.theme.small}) {
    display: block;
  }
`;

const MobileTextContainer = styled.div`
  box-sizing: border-box !important;
  display: none;
  margin: auto 1rem;

  @media only screen and (max-width: ${(props) => props.theme.small}) {
    display: flex;
    justify-content: space-between;
  }
`;

const Header = styled.h3`
  text-transform: uppercase;

  @media only screen and (max-width: ${(props) => props.theme.small}) {
    margin-right: -20vw; /* Will change with font change */
  }
`;

const Description = styled.p`
  font-style: italic;
  font-size: 1.5rem;

  @media only screen and (max-width: ${(props) => props.theme.small}) {
    font-size: 4vw; /* Will change with font change */
    transform: translateY(0.8rem); /* Will change with font change */
  }
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -5rem;
  direction: rtl;
  align-items: flex-start;

  & > a {
    box-sizing: border-box !important;
    flex: 1 1 33%;
    min-width: 20rem;
    direction: ltr;
    padding: 1rem;

    @media only screen and (max-width: ${(props) => props.theme.small}) {
      flex-basis: 100%;
      min-width: 5rem;
    }
  }
`;

function DiscourseContainer({ id, children }) {
  return (
    <OuterContainer id={id}>
      <MobileTextContainer>
        <Header>Join the discourse</Header>
        <Description>the hottest topics on campus</Description>
      </MobileTextContainer>
      <InnerContainer>
        <DesktopTextContainer>
          <Header>Join the discourse</Header>
          <Description>the hottest topics on campus</Description>
        </DesktopTextContainer>
        <ArticleContainer>{children}</ArticleContainer>
      </InnerContainer>
    </OuterContainer>
  );
}

DiscourseContainer.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default DiscourseContainer;
