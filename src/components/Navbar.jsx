import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
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
  justify-content: space-around;
  align-items: center;

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

const NavBarText = styled.h3`
  color: white;
  font-size: 2.1em;
  @media (max-width: 1350px) {
    height: auto;
    font-size: 2.1em;
    padding-left: 1vw;
    padding-right: 1vw;
    line-height: 0.8;
  }
  @media (max-width: ${theme.large}) {
    padding-bottom: 2vh;
    font-size: 2.6rem;
  }
`;

const ColumbiaSpectator = styled.div`
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdHfpvhTURAooEnUy0KdldKLP9OHHbliCo81ZbiN4rtghrH8m5");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 6vh;
  width: 16vw;

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
              const linkUrL = `#${entry}`;
              return (
                <NavBarEntry>
                  <Link smooth to={linkUrL} style={{ textDecoration: 'none' }}>
                    <NavBarText>{entry}</NavBarText>
                  </Link>
                </NavBarEntry>
              );
            })}
            <ColumbiaSpectator>*insert the logo here*</ColumbiaSpectator>
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
                  const linkUrL = `#${entry}`;
                  return (
                    <NavBarEntry>
                      <Link
                        smooth
                        to={linkUrL}
                        style={{ textDecoration: 'none', color: 'white' }}
                        onClick={this.closeMenu}
                      >
                        <NavBarText>{entry}</NavBarText>
                      </Link>
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
  entries: PropTypes.arrayOf(PropTypes.string),
};

Navbar.defaultProps = {
  entries: null,
};
