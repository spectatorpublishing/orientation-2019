import styled from 'styled-components';
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';

const Table = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 25vw;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: auto;
`;

const Border = styled.div`
  height: auto;
  border: 2px solid;
  border-color: #f47263;
  border-radius: 10px;
  margin-left: -0.5vw; /*THIS MAY BE AN ISSUE*/
`;

const TableEntry = styled.div`
  padding-bottom: 3vh;
  text-align: right;
  padding-right: 1.5vw;
  color: red;
`;

const changeTextColor = (id, isActive) => {
  const entry = document.getElementById(id);
  if (isActive) {
    entry.style.color = '#F47263';
  } else {
    entry.style.color = 'black';
  }
};

const TableOfContents = (props) => {
  const { entries } = props;
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
                  color: 'black',
                  textDecorationLine: 'none',
                  transition: 'color .2s',
                }}
                id={linkUrL}
                onMouseEnter={() => {
                  changeTextColor(linkUrL, true);
                }}
                onMouseLeave={() => {
                  changeTextColor(linkUrL, false);
                }}
              >
                {entry}
              </Link>
            </TableEntry>
          );
        })}
      </Table>
      <Border />
    </Container>
  );
};

TableOfContents.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.string),
};

TableOfContents.defaultProps = {
  entries: null,
};

export default TableOfContents;
