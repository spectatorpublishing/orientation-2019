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

const ArticleWrapper = styled.div`
  height: 10vh;
  width: 20vw;
  padding: 3vw;
`;

const ArticleWrapperMobile = styled.div`
  width: 20vw;
  height: 20vh;
  padding: 3vw;
`;

const ArticleRowWrapper = styled.div`
  display: flex;
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 5vw;
  padding-right: 5vw;
  width: 90vw;
  height: auto;
`;

const MobileArticleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
`;

const SuperContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
`;

const Carousel = (props) => {
  const { slides } = props;

  return (
    <div>
      <Desktop>
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
                    <ArticleWrapper>
                      <Article
                        href={entry.href}
                        photoAlt={entry.photoAlt}
                        photoUrl={entry.photoUrl}
                        headline={entry.headline}
                      />
                    </ArticleWrapper>
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
      </Desktop>

      <MobileAndTablet>
        <SuperContainer>
          <MobileArticleContainer>
            {slides.map((slide) => slide.map((entry) => (
              <ArticleWrapperMobile>
                <Article
                  href={entry.href}
                  photoAlt={entry.photoAlt}
                  photoUrl={entry.photoUrl}
                  headline={entry.headline}
                />
              </ArticleWrapperMobile>
            )))}
          </MobileArticleContainer>
        </SuperContainer>
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
