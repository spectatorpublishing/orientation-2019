import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = (props) => {
  const { title, members } = props;
  return (
    <div>
      <div className="title">{title}</div>
      <div>
        {members.map((member) => (
          <p>
            {member.split(',')[0]}
,
            <i>{member.split(',')[1]}</i>
          </p>
        ))}
      </div>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default SectionTitle;
