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
  width: 100%;
  flex: 1;
  background: #106e75;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 5vh 5vw 0vh 5vw;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Title = styled.h2`
  color: white;
`;

const ImageContainer = styled.div`
  padding: 1.5rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const LastRow = styled.div`
  display: flex;
  flex-direction: column;
`;

const LastRowTextSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
  padding-bottom: 1rem;
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
          <LastRowTextSection>
            <SectionTitle
              title={StaffInfo.titles[0]}
              members={StaffInfo.members[0]}
            />
            <SectionTitle
              title={StaffInfo.titles[1]}
              members={StaffInfo.members[1]}
            />
            <SectionTitle
              title={StaffInfo.titles[0]}
              members={StaffInfo.members[0]}
            />
          </LastRowTextSection>
          <LastRowTextSection>
            <SectionTitle
              title={StaffInfo.titles[0]}
              members={StaffInfo.members[0]}
            />
            <SectionTitle
              title={StaffInfo.titles[1]}
              members={StaffInfo.members[1]}
            />
            <SectionTitle
              title={StaffInfo.titles[0]}
              members={StaffInfo.members[0]}
            />
            <SectionTitle
              title={StaffInfo.titles[1]}
              members={StaffInfo.members[1]}
            />
          </LastRowTextSection>
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
