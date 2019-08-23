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
    display: flex;
    flex-wrap: wrap;
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 5vw;
  padding-right: 5vw;
  width: 90vw;
  height: auto;

  & > button {
    height: 5vh;
    width: 7vw;
    margin: 0 5vw;
    font-size: 1.4vw;
    background: transparent;
    border-radius: ${theme.borderRadius};
    border-width: 0.1rem;
    border-color: ${theme.purple};
    color: ${theme.purple};

    &:hover {
      background: ${theme.purple};
      color: white;
    }
  }
`;

const MobileArticleContainer = styled.div`
  display: flex;
  width: 80vw;
`;

const DesktopContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-top: 8vh;
  margin-bottom: 15vh;
`;

const MobileContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
`;

const TitleContainer = styled.div`
  margin-left: 3rem;
  margin-bottom: -1vh;
`;

const Title = styled.h3``;

const Carousel = (props) => {
  const { slides } = props;

  return (
    <div>
      <Desktop>
        <DesktopContainer>
          <TitleContainer>
            <Title>Stories to Follow</Title>
          </TitleContainer>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={30}
            totalSlides={slides.length}
            currentSlide={Math.floor(slides.length / 2)}
          >
            <Slider>
              {slides.map((slide, i) => (
                <Slide index={i}>
                  <ArticleRowWrapper>
                    {slide.map((entry) => (
                      <Article
                        href={entry.href}
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
              <ButtonBack>Back</ButtonBack>
              <ButtonNext>Next</ButtonNext>
            </ArrowContainer>
          </CarouselProvider>
        </DesktopContainer>
      </Desktop>

      <MobileAndTablet>
        <MobileContainer>
          <MobileArticleContainer>
            {slides.map((slide) => slide.map((entry) => (
              <Article
                href={entry.href}
                photoAlt={entry.photoAlt}
                photoUrl={entry.photoUrl}
                headline={entry.headline}
              />
            )))}
          </MobileArticleContainer>
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
