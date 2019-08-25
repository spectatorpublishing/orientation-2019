import styled from 'styled-components';
import React from 'react';
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
  @media (max-width: ${theme.large}) {
    margin-top: 5vh;
    margin-right: 8vw;
    padding-bottom: 3vh;
  }
`;

const Border = styled.div`
  height: auto;
  border: 2px solid;
  border-color: #f47263;
  border-radius: 10px;
`;

const TableEntry = styled.div`
  padding-bottom: 3vh;
  text-align: right;
  padding-right: 1vw;
  color: red;
  @media (max-width: ${theme.large}) {
    padding-bottom: 2vh;
  }
`;

const TableText = styled.p`
  font-size: 2.2vh;

  &:hover {
    color: ${theme.purple};
    fontStyle: 'italic;
  }

  @media (max-width: ${theme.large}) {
    text-shadow: 2px 2px 4px white;
    margin-right: 2.5vw;
    font-size: 1.4rem;
  }
  text-transform: lowercase;
`;

const TableOfContents = (props) => {
  const { entries } = props;
  return (
    <Container>
      <Table>
        {entries.map((entry) => {
          const linkUrL = `#${entry.id}`;
          return (
            <TableEntry>
              <Link
                smooth
                to={linkUrL}
                style={{
                  textDecorationLine: 'none',
                }}
                id={linkUrL}
              >
                <TableText>{entry.title}</TableText>
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
  entries: PropTypes.arrayOf(PropTypes.object),
};

TableOfContents.defaultProps = {
  entries: null,
};

export default TableOfContents;
