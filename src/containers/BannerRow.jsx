import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { Mobile, ResponsiveComponent } from 'react-responsive-simple/dist/App';
import BannerButton from '../components/BannerButton';
import { theme } from '../GlobalStyles';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-around;
  margin: 1.5rem;

  @media (max-width: ${theme.medium}) {
    flex-direction: column;
    align-items: center;
  }
`;

const DesktopAndTablet = (props) => {
  const { children } = props;
  return <ResponsiveComponent min={768}>{children}</ResponsiveComponent>;
};

DesktopAndTablet.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const BannerRow = (props) => {
  const { id, buttons, mobileButtons } = props;

  return (
    <div>
      <DesktopAndTablet>
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
      </DesktopAndTablet>
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
