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
  border-color: ${theme.yellow};
  margin-bottom: 2vh;
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
  font-weight: bold;

  &:hover {
    color: ${theme.purple};
  }

  @media (max-width: ${theme.medium}) {
    text-shadow: 2px 2px 4px white;
    margin-right: 2.5vw;
    font-size: 3vh;
  }
`;

const TableOfContents = (props) => {
  const { entries } = props;
  return (
    <Container>
      <Table>
        {entries.map((entry) => {
          const linkUrL = `#${entry.id}`;
          let link = (
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
          );
          if (entry.id === 'print') {
            link = (
              <a
                href="https://drive.google.com/file/d/1pQH9_sq7CxXspCQGbp6iwN0aRc6Of5pg/view"
                target="_blank"
                rel="noopener noreferrer" // set to avoid potential data breach on the original page side;
                // "noopener" denies access of the new page to the original,
                // "noreferrer" prevents browser from sending original page address as referrer
                style={{ textDecoration: 'none' }}
              >
                {' '}
                <TableText>{entry.title}</TableText>
              </a>
            );
          }
          return <TableEntry>{link}</TableEntry>;
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
