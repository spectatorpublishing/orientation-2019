import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Desktop, MobileAndTablet } from 'react-responsive-simple';
import { theme } from '../GlobalStyles';

const Container = styled.div`
  background: ${theme.purple};
  display: flex;
  padding: 0.4vw;
`;

const MobileContainer = styled.div`
  background: ${theme.purple};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LeftDiv = styled.div`
  flex: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const RightDiv = styled.div`
  flex: 60%;
  margin: 0.4rem;
  margin-left: 4rem;
`;
const Title = styled.h3`
  color: #104a4f;
  text-align: right;
  font-size: 4.2vw;
  @media (max-width: ${theme.large}) {
    font-size: 1.8rem;
    margin-top: 3vh;
  }
`;

const Body = styled.div`
  text-align: left;
  height: 100%;
  padding: 0.8rem;
  padding-right: 4rem;
  line-height: 1.5vw;
  @media (max-width: ${theme.large}) {
    line-height: 2.2vh;
    padding-left: 2.3rem;
    padding-top: 0.15rem;
  }
`;

const BodyText = styled.p`
  font-size: 1vw;
  color: #104a4f;
  display: inline;
  font-weight: 600;
  @media (max-width: ${theme.large}) {
    font-size: 2.5vw;
    line-height: 5px;
    text-align: center;
  }
`;

const Anchor = styled.a`
  font-style: italic;
  color: inherit;
`;

const Divider = (props) => {
  const { title, body, link } = props;
  const defaultBody = (
    <div>
      <BodyText>
        This website was created entirely by our tech and product design teams
        here at Spectator.
      </BodyText>
      <br />
      <BodyText>
        Curious to see how it&apos;s done? Interested in doing this work
        yourself?
        {' '}
      </BodyText>
      <br />
      <BodyText>
        <Anchor href={link}>Click here</Anchor>
        <BodyText> to learn how to join our team</BodyText>
      </BodyText>
    </div>
  );
  const bodyToShow = body || defaultBody;
  return (
    <>
      <Desktop>
        <Container>
          <LeftDiv>
            <Title>{title}</Title>
          </LeftDiv>
          <RightDiv>
            <Body>{bodyToShow}</Body>
          </RightDiv>
        </Container>
      </Desktop>
      <MobileAndTablet>
        <MobileContainer>
          <Title>{title}</Title>
          <Body>{bodyToShow}</Body>
        </MobileContainer>
      </MobileAndTablet>
    </>
  );
};

Divider.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Divider;
