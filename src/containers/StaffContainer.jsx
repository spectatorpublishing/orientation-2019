import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { Mobile, Tablet, Desktop } from 'react-responsive-simple';
import SectionTitle from '../components/SectionTitle';
import { theme } from '../GlobalStyles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: ${theme.navy};
  align-items: center;
  padding: 1.5rem 2.5rem;

  @media (max-width: ${theme.medium}) {
    padding: 1rem;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const SectionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => (props.mobile ? 'stretch' : 'flex-start')};
  justify-content: ${(props) => (props.mobile ? 'space-around' : 'center')};
  margin: 0vh 5vw 0vh 5vw;
  flex-wrap: wrap;
  width: 100%;

  &::after {
    content: "";
    flex: auto;
    width: 52vw;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 20%;
  text-align: center;

  @media (max-width: ${theme.medium}) {
    flex: 1 1 35%;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const Title = styled.h3`
  color: white !important;
`;

const StaffContainer = (props) => {
  const { id, staffInfo, staffInfoMobile } = props;

  return (
    <div>
      <Mobile>
        <Container id={id}>
          <Row>
            <TitleContainer>
              <Title>STAFF</Title>
            </TitleContainer>
          </Row>
          <SectionRow mobile>
            <Col>
              {staffInfoMobile
                .slice(0, Math.floor(staffInfo.length / 2))
                .map((info) => (
                  <SectionTitle title={info.title} members={info.members} />
                ))}
            </Col>
            <Col>
              {staffInfoMobile
                .slice(Math.floor(staffInfo.length / 2), staffInfo.length + 1)
                .map((info) => (
                  <SectionTitle title={info.title} members={info.members} />
                ))}
            </Col>
          </SectionRow>
        </Container>
      </Mobile>

      <Tablet>
        <Container id={id}>
          <Row>
            <TitleContainer>
              <Title>STAFF</Title>
            </TitleContainer>
          </Row>
          <SectionRow>
            <Col>
              {staffInfo
                .slice(0, Math.floor(staffInfo.length / 3))
                .map((info) => (
                  <SectionTitle title={info.title} members={info.members} />
                ))}
            </Col>
            <Col>
              {staffInfo
                .slice(
                  Math.floor(staffInfo.length / 3),
                  Math.floor((staffInfo.length / 3) * 2 - 1),
                )
                .map((info) => (
                  <SectionTitle title={info.title} members={info.members} />
                ))}
            </Col>
            <Col>
              {staffInfo
                .slice(
                  Math.floor((staffInfo.length / 3) * 2 - 1),
                  staffInfo.length + 1,
                )
                .map((info) => (
                  <SectionTitle title={info.title} members={info.members} />
                ))}
            </Col>
          </SectionRow>
        </Container>
      </Tablet>

      <Desktop>
        <Container id={id}>
          <Row>
            <TitleContainer>
              <Title>STAFF</Title>
            </TitleContainer>
          </Row>
          <SectionRow>
            <Col>
              {staffInfo
                .slice(0, Math.floor(staffInfo.length / 4))
                .map((info) => (
                  <SectionTitle title={info.title} members={info.members} />
                ))}
            </Col>
            <Col>
              {staffInfo
                .slice(
                  Math.floor(staffInfo.length / 4),
                  Math.floor(staffInfo.length / 2),
                )
                .map((info) => (
                  <SectionTitle title={info.title} members={info.members} />
                ))}
            </Col>
            <Col>
              {staffInfo
                .slice(
                  Math.floor(staffInfo.length / 2),
                  Math.floor((staffInfo.length / 4) * 3),
                )
                .map((info) => (
                  <SectionTitle title={info.title} members={info.members} />
                ))}
            </Col>
            <Col>
              {staffInfo
                .slice(
                  Math.floor((staffInfo.length / 4) * 3),
                  staffInfo.length + 1,
                )
                .map((info) => (
                  <SectionTitle title={info.title} members={info.members} />
                ))}
            </Col>
          </SectionRow>
        </Container>
      </Desktop>
    </div>
  );
};

StaffContainer.propTypes = {
  id: PropTypes.string.isRequired,
  staffInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  staffInfoMobile: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StaffContainer;
