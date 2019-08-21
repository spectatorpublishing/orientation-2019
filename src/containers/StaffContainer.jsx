import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../components/SectionTitle';

// temporarily all the data are stored here
const StaffInfo = {
  titles: [
    'Corporate Board',
    'News',
    'Opinion',
    'Arts & Entertainment',
    'Product',
  ],
  members: [
    [
      'Katherine Gerberich, Editor in Chief',
      'Rahil Kamath, Managing Editor',
      'Nima Mozhgani, Publisher',
    ],
    [
      'Kevin Li, Head of Product',
      'Arsalaan Ansari, Head of Engineering',
      'Cecilia Orduna, Lead Product Designer',
    ],
  ],
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background: #106e75;
  position: relative;
  padding: 3rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0.5rem;
  align-items: flex-start;
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  color: white;
`;

const ImageContainer = styled.div`
  margin: 0.5rem;
  width: 50%;
  padding: 0.8rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const LastRow = styled.div`
  display: flex;
  flex-direction: column;
`;

const StaffContainer = (props) => {
  const { url, alt } = props;
  return (
    <Container>
      <Row>
        <TitleContainer>
          <Title>Staff</Title>
        </TitleContainer>
      </Row>
      <Row>
        <SectionTitle
          title={StaffInfo.titles[0]}
          members={StaffInfo.members[0]}
        />
        <SectionTitle
          title={StaffInfo.titles[1]}
          members={StaffInfo.members[1]}
        />
        <SectionTitle
          title={StaffInfo.titles[2]}
          members={StaffInfo.members[0]}
        />
        <SectionTitle
          title={StaffInfo.titles[3]}
          members={StaffInfo.members[1]}
        />
        <SectionTitle
          title={StaffInfo.titles[4]}
          members={StaffInfo.members[0]}
        />
      </Row>
      <Row>
        <SectionTitle
          title={StaffInfo.titles[0]}
          members={StaffInfo.members[0]}
        />
        <SectionTitle
          title={StaffInfo.titles[1]}
          members={StaffInfo.members[1]}
        />
        <SectionTitle
          title={StaffInfo.titles[2]}
          members={StaffInfo.members[0]}
        />
        <SectionTitle
          title={StaffInfo.titles[3]}
          members={StaffInfo.members[1]}
        />
        <SectionTitle
          title={StaffInfo.titles[4]}
          members={StaffInfo.members[0]}
        />
      </Row>
      <Row>
        <LastRow>
          <Row>
            <SectionTitle
              title={StaffInfo.titles[0]}
              members={StaffInfo.members[0]}
            />
            <SectionTitle
              title={StaffInfo.titles[1]}
              members={StaffInfo.members[1]}
            />
          </Row>
          <Row>
            <SectionTitle
              title={StaffInfo.titles[0]}
              members={StaffInfo.members[0]}
            />
            <SectionTitle
              title={StaffInfo.titles[1]}
              members={StaffInfo.members[1]}
            />
          </Row>
        </LastRow>
        <ImageContainer>
          <Image src={url} alt={alt} />
        </ImageContainer>
      </Row>
    </Container>
  );
};

StaffContainer.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

StaffContainer.defaultProps = {
  alt: 'staff photo',
};

export default StaffContainer;
