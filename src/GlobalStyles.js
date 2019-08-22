import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'HalloEuroboy';
    src: url('https://spectator-fonts.s3.amazonaws.com/HalloEuroboy.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  body,
  button {
    @import url('https://fonts.googleapis.com/css?family=Basic&display=swap');
    font-family: 'Basic', sans-serif;
  }
  div {
    color: ${(props) => props.theme.darkGray};
  }
  h1 {
    color: ${(props) => props.theme.black};
    font-family: 'HalloEuroboy', sans-serif;
    font-size: 8rem;
    font-weight: 400;
    letter-spacing: 0.1em;
    margin: 0;
  }
  h2 {
    color: ${(props) => props.theme.black};
    font-family: 'HalloEuroboy', sans-serif;
    font-size: 4.9rem;
    font-weight: 300;
    letter-spacing: 0.07em;
    margin: 0;
  }
  h3 {
    color: ${(props) => props.theme.darkGray};
    font-family: 'HalloEuroboy', sans-serif;
    font-size: 3rem;
    font-weight: 300;
    letter-spacing: 0.06em;
    margin: 0;
  }
  h4 {
    color: ${(props) => props.theme.darkGray};
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
  }
  h5 {
    color: ${(props) => props.theme.darkGray};
    font-size: 1rem;
    font-weight: 400; 
    margin: 0;
  }
  h6 {
    color: ${(props) => props.theme.darkGray};
    font-size: 0.8rem;
    font-weight: 700; 
    margin: 0;
  }
  p {
    color: ${(props) => props.theme.black};
    font-size: 1.4rem;
    font-weight: 400; 
    margin: 0;
  }
  b {
    color: ${(props) => props.theme.black};
    font-size: 1.4rem;
    font-weight: 700;  
    margin: 0;
  }
`;

export const theme = {
  black: '#000000',
  white: '#FFFFFF',
  barnardBlue: '#00489A',
  columbiaBlue: '#62A8E5',
  darkGray: '#555555',
  mediumGray: '#AAAAAA',
  lightGray: '#DDDDDD',
  shadow: 'rgba(0, 0, 0, 0.3) 0 0 10px',
  grayBorder: 'border: 1px #DDDDDD solid; border-radius: 10px;',
  borderRadius: '10px',
  small: '576px',
  medium: '768px',
  large: '992px',
};
