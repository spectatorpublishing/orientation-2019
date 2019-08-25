import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import { Desktop, MobileAndTablet } from 'react-responsive-simple';
import { theme } from '../GlobalStyles';

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: inline-row;
  height: 6vh;
  background: black;
  justify-content: space-between;
  align-items: center;
  color: ${theme.navy};

  & > :first-child {
    margin-left: 2vw;
  }

  @media (max-width: ${theme.large}) {
    display: flex;
    align-items: center;
    height: 60px;
  }

  @media only screen and (max-height: ${theme.large}) {
    height: 60px;
  }
`;

const NavBarEntry = styled.div`
  text-align: center;
`;

const NavBarText = styled.a`
  color: white;
  font-family: "HalloEuroboy", sans-serif;

  @media (max-width: 1350px) {
    height: auto;
    padding-left: 1vw;
    padding-right: 1vw;
    line-height: 0.8;
  }
  @media (max-width: ${theme.large}) {
    padding-bottom: 2vh;
    font-size: 2.6rem;
  }
`;

const ColumbiaSpectatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.yellow};
  height: 100%;
  width: 10vw;
`;

const ColumbiaSpectator = styled.img`
  width: 80%;
  object-fit: contain;

  @media only screen and (max-height: ${theme.large}) {
    height: 60px;
  }
`;

const BurgerContainer = styled.div`
  display: flex;
  width: 100vw;
  align-items: flex-end;
`;

const burgerStyle = {
  bmBurgerButton: {
    position: 'relative',
    width: '35px',
    height: '30px',
    left: '85vw',
    top: '0',
  },
  bmBurgerBars: {
    background: 'white',
  },
  bmMenu: {
    background: 'black',
    padding: '2.5em 1.5em 0',
    fontSize: '1.0em',
  },
  bmCross: {
    background: 'white',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.4)',
  },
  bmMenuWrap: {
    position: 'fixed',
    top: '0',
  },
};

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };

    this.closeMenu = this.closeMenu.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  render() {
    const { entries } = this.props;
    const { menuOpen } = this.state;
    return (
      <div>
        <Desktop>
          <NavBarContainer>
            {entries.map((entry) => {
              const linkUrL = entry.linkUrl;
              const { title } = entry;
              return (
                <NavBarEntry>
                  <NavBarText
                    href={linkUrL}
                    target="_blank"
                    rel="noopener noreferrer" // set to avoid potential data breach on the original page side;
                    // "noopener" denies access of the new page to the original,
                    // "noreferrer" prevents browser from sending original page address as referrer
                    style={{ textDecoration: 'none' }}
                  >
                    {title}
                  </NavBarText>
                </NavBarEntry>
              );
            })}
            <ColumbiaSpectatorContainer>
              <ColumbiaSpectator src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZKALKJLFQFECNGLNTICSJUMFF4.png" />
            </ColumbiaSpectatorContainer>
          </NavBarContainer>
        </Desktop>

        <MobileAndTablet>
          <NavBarContainer>
            <BurgerContainer>
              <Menu
                right
                noOverlay
                width="250px"
                styles={burgerStyle}
                isOpen={menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
              >
                {entries.map((entry) => {
                  const linkUrL = entry.linkUrl;
                  const { title } = entry;
                  return (
                    <NavBarEntry>
                      <NavBarText
                        href={linkUrL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                      >
                        {title}
                      </NavBarText>
                    </NavBarEntry>
                  );
                })}
              </Menu>
            </BurgerContainer>
          </NavBarContainer>
        </MobileAndTablet>
      </div>
    );
  }
}

Navbar.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object),
};

Navbar.defaultProps = {
  entries: null,
};
