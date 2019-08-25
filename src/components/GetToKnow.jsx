import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';
import { theme } from '../GlobalStyles';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-image: url(${(props) => props.backgroundImage.image});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: 50% 85%;
  padding: 3vw;
  position: relative;
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  direction: rtl;
  margin-right: 6vw;
  flex: 1 1 0;
`;

const Title = styled.h3`
  text-shadow: -1px 3px white;
  color: #e27400;
  flex: 1 1 0;
  min-width: 20rem;
  font-size: 4rem;
  @media (max-width: ${theme.small}) {
    font-size: 2.2rem;
    padding: 1rem;
  }
`;

const GetToKnow = (props) => {
  const { id, backgroundImage, getToKnow } = props;
  const Buttons = getToKnow.map((entry) => <Button getToKnow={entry} />);
  return (
    <Container id={id} backgroundImage={backgroundImage}>
      <Title>GET TO KNOW</Title>
      <ButtonContainer>{Buttons}</ButtonContainer>
    </Container>
  );
};
export default GetToKnow;

GetToKnow.propTypes = {
  id: PropTypes.string.isRequired,
  getToKnow: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};
