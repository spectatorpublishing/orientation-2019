import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Desktop, MobileAndTablet } from 'react-responsive-simple';
import { theme } from '../GlobalStyles';

const Container = styled.div`
  background: ${theme.purple};
  display: flex;
  padding-top: 2.4vw;
  padding-bottom: 2.4vw;
  max-height: 100%;
  max-width: 100%;
`;

const MobileContainer = styled.div`
  background: ${theme.purple};
  align-items: center;
  justify-content: center;

  max-height: 100%;
  max-width: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2.4vw;
  padding-bottom: 2.4vw;
`;

const LeftDiv = styled.div`
  flex: 65%;
  display: flex;
  flex-direction: column;
  margin-left: 6vw;
`;

const RightDiv = styled.div`
  flex: 35%;
  margin: 0.4rem;
  margin-right: 6vw;
`;
const Title = styled.h3`
  flex: 50%;
  color: #09093b;
  line-height: 6vw;
  @media (max-width: ${theme.medium}) {
    margin-top: 2.5vh;
  }
`;

const Body = styled.div`
  flex: 50%;
  height: 100%;
  @media (max-width: ${theme.medium}) {
    line-height: 2vh;
    margin: 2vh 5vw 0vh 5vw;
  }
`;

const BodyText = styled.p`
  display: inline;
`;

const Anchor = styled.a`
  font-style: italic;
  color: inherit;
`;

const NameText = styled.h6`
  padding-left: 1rem;
  padding-right: 1rem;
  line-height: 3vh;
  text-transform: uppercase;
  @media (max-width: ${theme.large}) {
    padding: 0;
    line-height: 0;
    display: inline;
  }
`;
const DividerWithNames = (props) => {
  const {
    title, body, link,
  } = props;
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
      </BodyText>
      <br />
      <BodyText>
        <Anchor href={link}>Click here</Anchor>
        <BodyText> to learn how to join our team</BodyText>
      </BodyText>
    </div>
  );

  const defaultNames = (
    <div>
      <NameText>Cover art by: helen yang</NameText>
      <br />
      <NameText>Website design by: Cecilia ORDUÑA</NameText>
      <br />
      <NameText>
        DEVELOPED BY: ARSALAAN ANSARI, WILLIAM CHIU, HARRISON WANG, ELAINE WANG,
        BILL CHEN & CHENOA Gale
      </NameText>
    </div>
  );
  const defaultBodyMobile = (
    <div>
      <BodyText>
        This website was created entirely by our tech and product design teams
        here at Spectator.
      </BodyText>
      <br />
      <BodyText>
        Curious to see how it&apos;s done? Interested in doing this work
        yourself?
      </BodyText>
      <br />
      <BodyText>
        <Anchor href={link}>Click here</Anchor>
        <BodyText> to learn how to join our team</BodyText>
      </BodyText>
      <br />
      <br />
      <NameText>Cover art by: helen yang</NameText>
      <br />
      <NameText>Website design by: Cecilia ORDUÑA</NameText>
      <br />
      <NameText>
        DEVELOPED BY: ARSALAAN ANSARI, WILLIAM CHIU, HARRISON WANG, ELAINE WANG,
        BILL CHEN & CHENOA Gale
      </NameText>
    </div>
  );

  const bodyToShow = body || defaultBody;
  return (
    <div>
      <Desktop>
        <Container>
          <LeftDiv>
            <Title>{title}</Title>
            <Body>{bodyToShow}</Body>
          </LeftDiv>
          <RightDiv>
            <div>
              <NameText>{defaultNames}</NameText>
            </div>
          </RightDiv>
        </Container>
      </Desktop>
      <MobileAndTablet>
        <MobileContainer>
          <TextContainer>
            <Title>LIKE WHAT YOU SEE?</Title>
            <Body>{defaultBodyMobile}</Body>
          </TextContainer>
        </MobileContainer>
      </MobileAndTablet>
    </div>
  );
};
DividerWithNames.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default DividerWithNames;
