import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../GlobalStyles';

const OuterContainer = styled.div``;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: ${theme.medium}) {
    flex-direction: column;
    margin: 5vh 5vw;
  }
`;

const Title = styled.h2`
  margin: 3vh 2vw 3vh 2vw;
  text-align: center;
`;

const MapsList = styled.div`
  padding: 3rem;
  border: 1rem;
  box-sizing: border-box;
  & * {
    color: white;
  }
  background: ${(props) => props.color};
`;

const ReferralLink = styled.a`
  font-size: 2vw;
  &:hover {
    color: ${theme.navy};
  }

  @media (max-width: ${theme.medium}) {
    font-size: 1.5rem;
  }
`;

const lithumData = [
  { title: 'Sappho', url: 'https://amzn.to/2KTo7PD' },
  { title: 'The Odyssey', url: 'https://amzn.to/31RHi1Y' },
  { title: 'The Bible', url: 'https://amzn.to/2ZkFbSt' },
  { title: 'The Histories', url: 'https://amzn.to/2KTr16Z' },
  { title: 'Oresteia', url: 'https://amzn.to/33YzIoe' },
  { title: 'Antigone', url: 'https://amzn.to/33UCpH4' },
  { title: 'Father Comes Home From the Wars', url: 'https://amzn.to/2ZatFOt' },
  { title: 'The Symposium', url: 'https://amzn.to/2HlbpH8' },
  { title: 'The Aeneid', url: 'https://amzn.to/33VdEL2' },
  { title: 'Metamorphoses', url: 'https://amzn.to/2Zml7iE' },
  { title: 'Confessions', url: 'https://amzn.to/2ZiFQnC' },
  { title: 'The Inferno', url: 'https://amzn.to/2KQvI1c' },
  { title: 'Essays', url: 'https://amzn.to/33TnME6' },
  { title: 'Macbeth', url: 'https://amzn.to/2KS1J9h' },
  { title: 'Don Quixote', url: 'https://amzn.to/31Yu9nD' },
  { title: 'Paradise Lost', url: 'https://amzn.to/2ZnUgH6' },
  { title: 'Pride and Prejudice', url: 'https://amzn.to/321Zc1Q' },
  { title: 'Crime & Punishment', url: 'https://amzn.to/2KSGIuY' },
  { title: 'To the Lighthouse', url: 'https://amzn.to/2HjYSUf' },
  { title: 'Song of Solomon', url: 'https://amzn.to/2ZomAJf' },
];

const seasData = [
  { title: 'Principles of Econ', url: 'https://amzn.to/31Xm7eT' },
  { title: 'Intro to Stats with Calculus', url: 'https://amzn.to/2KP0eJ0' },
  { title: 'Intro to Java', url: 'https://amzn.to/2HnrWKO' },
  { title: 'Calculus I & III', url: 'https://amzn.to/2HhHBLF' },
  { title: 'Intro Physics (1400 or 1600)', url: 'https://amzn.to/2Hk2Qw7 ' },
  { title: 'General Chemistry ', url: 'https://amzn.to/2KSSRjS' },
];

const TextbooksContainer = (props) => {
  const { title } = props;
  return (
    <OuterContainer>
      <Title>{title}</Title>
      <Row>
        <MapsList color={theme.purple}>
          <h2>Lithum</h2>
          {lithumData.map((entry) => (
            <div>
              <ReferralLink
                href={entry.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                {entry.title}
              </ReferralLink>
            </div>
          ))}
        </MapsList>

        <MapsList color={theme.orange}>
          <h2>SEAS</h2>
          {seasData.map((entry) => (
            <div>
              <ReferralLink
                href={entry.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                {entry.title}
              </ReferralLink>
            </div>
          ))}
        </MapsList>
      </Row>
    </OuterContainer>
  );
};

TextbooksContainer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TextbooksContainer;
