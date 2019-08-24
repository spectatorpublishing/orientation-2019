import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Desktop, MobileAndTablet } from 'react-responsive-simple';
import Article from './Article';
import { theme } from '../GlobalStyles';

const ArticleRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0rem 2rem;

  & > a {
    box-sizing: border-box;
    flex: 0 1 25%;
    padding: 1rem;
    flex-wrap: wrap;
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: auto;
  position: absolute;
  top: 50%;

  & > button {
    height: 4vh;
    width: 4vw;
    margin: -8vh 0vw;
    background: transparent;
    border-color: transparent;
  }
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2vh 6vw;

  & > a {
    flex: 0 1 46%;
    padding: 0rem 0.25rem 1rem 0.25rem;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    max-height: 100%;
  }
`;

const DesktopContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
`;

const MobileContainer = styled.div`
  margin: 5vh 3vw 10vh 3vw;
  display: flex;
  flex-direction: column;

  @media (max-width: ${theme.medium}) {
    margin-bottom: 5vh;
  }
`;

const TitleContainer = styled.div`
  margin-left: 3rem;
  margin-bottom: -1vh;
  display: flex;

  @media (max-width: ${theme.medium}) {
    margin: 0rem;
    justify-content: center;
  }
`;

const Title = styled.h3`
  text-transform: uppercase;
`;

const ArrowBack = () => (
  <ButtonBack style={{ paddingLeft: 0, paddingRight: '1vw' }}>
    <svg id="left-icon" style={{ height: '60px', width: '30px' }}>
      <path fill={theme.orange} d="M25 0 L15 0 L0 20 L15 40 L25 40 L10 20 Z" />
    </svg>
  </ButtonBack>
);

const ArrowNext = () => (
  <ButtonNext style={{ paddingRight: 0 }}>
    <svg id="right-icon" style={{ height: '60px', width: '30px' }}>
      <path fill={theme.orange} d="M0 0 L10 0 L25 20 L10 40 L0 40 L15 20 Z" />
    </svg>
  </ButtonNext>
);

const Carousel = (props) => {
  const { slides } = props;

  return (
    <div>
      <Desktop>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={27}
          totalSlides={slides.length}
          currentSlide={Math.floor(slides.length / 2) - 1}
        >
          <DesktopContainer>
            <TitleContainer>
              <Title>Stories to Follow</Title>
            </TitleContainer>
            <Slider>
              {slides.map((slide, i) => (
                <Slide index={i}>
                  <ArticleRowWrapper>
                    {slide.map((entry) => (
                      <Article
                        href={entry.href}
                        link={entry.link}
                        photoAlt={entry.photoAlt}
                        photoUrl={entry.photoUrl}
                        headline={entry.headline}
                      />
                    ))}
                  </ArticleRowWrapper>
                </Slide>
              ))}
            </Slider>
            <ArrowContainer>
              <ArrowBack />
              <ArrowNext />
            </ArrowContainer>
          </DesktopContainer>
        </CarouselProvider>
      </Desktop>
      <MobileAndTablet>
        <MobileContainer>
          <TitleContainer>
            <Title>Stories To Follow</Title>
          </TitleContainer>
          <ArticleContainer>
            {slides.map((slide) => slide.map((article) => (
              <Article
                href={article.href}
                link={article.link}
                photoAlt={article.photoAlt}
                photoUrl={article.photoUrl}
                headline={article.headline}
              />
            )))}
          </ArticleContainer>
        </MobileContainer>
      </MobileAndTablet>
    </div>
  );
};

export default Carousel;

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.array),
};

Carousel.defaultProps = {
  slides: null,
};
