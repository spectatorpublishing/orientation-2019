import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../GlobalStyles';

const MemberItem = styled.h4`
  text-align: left;
  color: white;

  @media (max-width: ${theme.large}) {
    font-size: 2.2vh;
  }
`;
const Title = styled.h3`
  margin-bottom: 0.6rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 4.5vh;
  height: 7.5vh;
  line-height: 4.5vh;

  @media (max-width: ${theme.large}) {
    height: 7vh;
    line-height: 3.8vh;
    font-size: 3.9vh;
  }
`;
const Container = styled.div`
  text-align: left;
  padding: 0.7rem 0.6rem;
  background: #106e75;
  flex: 1 1 18%;

  @media (max-width: ${theme.large}) {
    height: 15vh;
    padding: 1.1rem 0.7rem;
  }
`;
const SectionTitle = (props) => {
  const { title, members } = props;
  return (
    <Container>
      <div className="title">
        <Title>{title}</Title>
      </div>
      <div>
        {members.map((member) => (
          <MemberItem>
            {member.split(',')[0]}
,
            <i>{member.split(',')[1]}</i>
          </MemberItem>
        ))}
      </div>
    </Container>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default SectionTitle;
