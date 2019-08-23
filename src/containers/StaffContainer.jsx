import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { Desktop, MobileAndTablet } from 'react-responsive-simple';
import SectionTitle from '../components/SectionTitle';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #106e75;
  align-items: center;
  padding: 1.5rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: ${(props) => (props.mobile ? 'space-around' : 'center')};
  margin: 5vh 5vw 0vh 5vw;
  flex-wrap: wrap;
  width: ${(props) => (props.mobile ? '100%' : 'auto')};
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 30%;
`;

const TitleContainer = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  color: white;
`;

const StaffContainer = (props) => {
  const { staffInfo } = props;

  return (
    <div>
      <MobileAndTablet>
        <Container>
          <Row>
            <TitleContainer>
              <Title>Staff</Title>
            </TitleContainer>
          </Row>
          <Row mobile>
            <Col>
              {staffInfo
                .slice(0, Math.floor(staffInfo.length / 2))
                .map((info) => (
                  <SectionTitle title={info.title} members={info.members} />
                ))}
            </Col>
            <Col>
              {staffInfo
                .slice(Math.floor(staffInfo.length / 2), staffInfo.length)
                .map((info) => (
                  <SectionTitle title={info.title} members={info.members} />
                ))}
            </Col>
          </Row>
        </Container>
      </MobileAndTablet>

      <Desktop>
        <Container>
          <Row>
            <TitleContainer>
              <Title>Staff</Title>
            </TitleContainer>
          </Row>
          <Row>
            {staffInfo.map((info) => (
              <SectionTitle title={info.title} members={info.members} />
            ))}
          </Row>
        </Container>
      </Desktop>
    </div>
  );
};

StaffContainer.propTypes = {
  staffInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StaffContainer;
