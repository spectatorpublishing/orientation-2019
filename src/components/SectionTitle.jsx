import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../GlobalStyles';

const MemberItem = styled.p`
  text-align: left;
  line-height: 1.5rem;
  color: white !important 
  ;
`;
const Title = styled.h4`
  margin-bottom: 0.6rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 7.5vh;
  line-height: 4.5vh;
  text-transform: uppercase;

  @media (max-width: ${theme.medium}) {
    height: 3.5rem;
    line-height: 2.3rem;
    font-size: 2rem;
  }
`;
const Container = styled.div`
  text-align: left;
  padding: 0.7rem 1.2rem;
  flex: 1 1 20%;

  @media (max-width: ${theme.medium}) {
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
