import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { Desktop, Mobile } from 'react-responsive-simple/dist/App';
import BannerButton from '../components/BannerButton';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-around;
  margin: 1.5rem;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BannerRow = (props) => {
  const { id, buttons, mobileButtons } = props;

  return (
    <div>
      <Desktop>
        <Container id={id}>
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
      </Desktop>
      <Mobile>
        <Container id={id}>
          {mobileButtons.map((button) => (
            <BannerButton
              title={button.title}
              url={button.url}
              color={button.color}
              shadowColor={button.shadowColor}
              textColor={button.textColor}
            />
          ))}
        </Container>
      </Mobile>
    </div>
  );
};

BannerRow.propTypes = {
  id: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
  mobileButtons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BannerRow;
