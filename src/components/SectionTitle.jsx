import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MemberItem = styled.h4`
  text-align: left;
  color: white;
`;
const Title = styled.h2`
  text-align: left;
  padding-bottom: 0.6rem;
  color: white;
`;
const Container = styled.div`
  text-align: left;
  padding: 1rem;
  background: #106e75;
  width: 9rem;
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
