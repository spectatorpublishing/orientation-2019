import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MemberItem = styled.h4`
  text-align: left;
  color: white;
`;
const Title = styled.h3`
  margin-bottom: 0.6rem;
  color: white;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 2rem;
  font-size: 2.5rem;
`;
const Container = styled.div`
  text-align: left;
  padding: 0.7rem 0.5rem;
  background: #106e75;
  flex: 1 1 20%;
  box-sizing: border-box;
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
