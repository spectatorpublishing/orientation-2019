import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import BannerButton from '../components/BannerButton';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-around;
  margin: 1.5rem;

  @media (max-width: 1081px) {
    flex-wrap: wrap;
  }
`;

const BannerRow = (props) => {
  const { buttons } = props;

  return (
    <Container>
      {buttons.map((button) => (
        <BannerButton
          title={button.title}
          url={button.url}
          color={button.color}
          shadowColor={button.shadowColor}
          textColor={button.textColor}
        />
      ))}
    </Container>
  );
};

BannerRow.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BannerRow;
