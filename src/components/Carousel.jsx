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
    box-sizing: border-box !important;
    flex: 0 1 25%;
    padding: 1rem;
    flex-wrap: wrap;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  height: auto;
  position: absolute;
  top: 75%;

  & > button {
    width: 3rem;
    background: transparent;
    border-color: transparent;
  }
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -5rem;
  direction: rtl;
  align-items: flex-start;

  & > a {
    box-sizing: border-box !important;
    flex: 1 1 33%;
    min-width: 20rem;
    direction: ltr;
    padding: 1rem;

    @media only screen and (max-width: ${(props) => props.theme.small}) {
      flex-basis: 100%;
      min-width: 5rem;
    }
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
  color: ${theme.purple};
`;

const ArrowBack = () => (
  <ButtonBack>
    <svg id="left-icon" viewBox="0 0 30 40">
      <path fill={theme.purple} d="M25 0 L20 0 L5 20 L20 40 L25 40 L10 20 Z" />
    </svg>
  </ButtonBack>
);

const ArrowNext = () => (
  <ButtonNext>
    <svg id="right-icon" viewBox="0 0 30 40">
      <path fill={theme.purple} d="M5 0 L10 0 L25 20 L10 40 L5 40 L20 20 Z" />
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
            <NavigationContainer>
              <ArrowContainer>
                <ArrowBack />
                <ArrowNext />
              </ArrowContainer>
            </NavigationContainer>
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
