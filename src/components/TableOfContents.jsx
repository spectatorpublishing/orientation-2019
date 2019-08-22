import styled from 'styled-components';
import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import { theme } from '../GlobalStyles';

const Table = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: auto;
  margin-top: 5vh;
  margin-right: 4vw;
  justify-content: flex-end;
  @media (max-width: ${theme.medium}) {
    margin-top: 6vh;
    margin-right: 11vw;
  }
`;

const Border = styled.div`
  position: relative;
  height: auto;
  border: 2px solid;
  border-color: #f47263;
  border-radius: 10px;
`;

const TableEntry = styled.div`
  padding-bottom: 3vh;
  text-align: right;
  padding-right: 1.5vw;
  color: red;
  @media (max-width: ${theme.medium}) {
    padding-bottom: 2.5vh;
  }
`;

const TableText = styled.p`
  @media (max-width: ${theme.medium}) {
    margin-right: 5vw;
  }
`;

export default class TableOfContents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeTextColor = (id, isActive) => {
    const entry = document.getElementById(id);
    if (isActive) {
      entry.style.color = '#F47263';
    } else {
      entry.style.color = 'black';
    }
  };

  render() {
    const { entries } = this.props;
    return (
      <Container>
        <Table>
          {entries.map((entry) => {
            const linkUrL = `#${entry}`;
            return (
              <TableEntry>
                <Link
                  smooth
                  to={linkUrL}
                  style={{
                    textDecorationLine: 'none',
                    transition: 'color .2s',
                  }}
                  id={linkUrL}
                  onMouseEnter={() => {
                    this.changeTextColor(linkUrL, true);
                  }}
                  onMouseLeave={() => {
                    this.changeTextColor(linkUrL, false);
                  }}
                >
                  {<TableText>{entry}</TableText>}
                </Link>
              </TableEntry>
            );
          })}
        </Table>
        <Border />
      </Container>
    );
  }
}

TableOfContents.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.string),
};

TableOfContents.defaultProps = {
  entries: null,
};
