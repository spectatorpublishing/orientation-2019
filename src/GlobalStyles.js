import { createGlobalStyle } from 'styled-components';

export const theme = {
  black: '#000000',
  white: '#FFFFFF',
  purple: '#9193C8',
  orange: '#EC7100',
  navy: '#242C49',
  yellow: '#FFD05F',
  darkGray: '#555555',
  mediumGray: '#AAAAAA',
  lightGray: '#DDDDDD',
  shadow: 'rgba(0, 0, 0, 0.3) 0 0 10px',
  grayBorder: 'border: 1px #DDDDDD solid; border-radius: 10px;',
  borderRadius: '10px',
  small: '576px',
  medium: '768px',
  large: '992px',
  extraLarge: '1200px',
};

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'HalloEuroboy';
    src: url('https://spectator-fonts.s3.amazonaws.com/HalloEuroboy.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @import url("https://p.typekit.net/p.css?s=1&k=cdu0unr&ht=tk&f=35475.35476.35477.35478.35479&a=7799304&app=typekit&e=css");

@font-face {
font-family:"basic-sans";
src:url("https://use.typekit.net/af/d34176/00000000000000003b9b043b/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("woff2"),url("https://use.typekit.net/af/d34176/00000000000000003b9b043b/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("woff"),url("https://use.typekit.net/af/d34176/00000000000000003b9b043b/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:600;
}

@font-face {
font-family:"basic-sans";
src:url("https://use.typekit.net/af/fe293c/00000000000000003b9b043c/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff2"),url("https://use.typekit.net/af/fe293c/00000000000000003b9b043c/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff"),url("https://use.typekit.net/af/fe293c/00000000000000003b9b043c/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:600;
}

@font-face {
font-family:"basic-sans";
src:url("https://use.typekit.net/af/1a9b5f/00000000000000003b9b043d/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/1a9b5f/00000000000000003b9b043d/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/1a9b5f/00000000000000003b9b043d/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:400;
}

@font-face {
font-family:"basic-sans";
src:url("https://use.typekit.net/af/cc97f2/00000000000000003b9b043e/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/cc97f2/00000000000000003b9b043e/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/cc97f2/00000000000000003b9b043e/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;
}

@font-face {
font-family:"basic-sans";
src:url("https://use.typekit.net/af/3f4c96/00000000000000003b9b043f/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff2"),url("https://use.typekit.net/af/3f4c96/00000000000000003b9b043f/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff"),url("https://use.typekit.net/af/3f4c96/00000000000000003b9b043f/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:300;
}
  body,
  button {
    font-family: 'basic-sans', sans-serif !important; 
  }
  div {
    color: ${(props) => props.theme.darkGray};
  }
  h1 {
    color: ${(props) => props.theme.navy} !important;
    font-family: 'HalloEuroboy', sans-serif;
    font-size: 8rem;
    font-weight: 400;
    letter-spacing: 0.1em;
    margin: 0;
    @media (max-width: ${theme.small}){
      font-size: 4rem;
    }
  }
  h2 {
    color: ${(props) => props.theme.navy} !important;
    font-family: 'HalloEuroboy', sans-serif;
    font-size: 4.9rem;
    font-weight: 300;
    letter-spacing: 0.07em;
    margin: 0;
    @media (max-width: ${theme.medium}) {
      font-size: 2.6rem;
    }


  }
  h3 {
    color: ${(props) => props.theme.navy} !important;
    font-family: 'HalloEuroboy', sans-serif;
    font-size: 2.2rem;
    font-weight: 300;
    letter-spacing: 0.06em;
    margin: 0;

    @media (min-width: ${theme.large}){
      font-size: 3rem;
    }

    @media (min-width: ${theme.extralarge}){
      font-size: 4rem;
    }
  }
  h4 {
    color: ${(props) => props.theme.orange};
    font-size: 1.6rem;
    font-weight: 300;
    font-family: 'HalloEuroboy', sans-serif;
    margin: 0;
    @media (min-width: ${theme.extraLarge}){
      font-size: 2.7rem;
    }
  }
  h5 {
    @import url('https://fonts.googleapis.com/css?family=Raleway:400,700,800');
    font-family: 'Raleway', sans-serif;
    color: ${(props) => props.theme.navy};
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
  }
  h6 {
    color: ${(props) => props.theme.navy} !important;
    font-size: 1rem;
    font-weight: 300; 
    margin: 0;
    font-family: 'HalloEuroboy', sans-serif;

    @media (min-width: ${theme.large}){
      font-size: 1.5rem;
    }
    @media (min-width: ${theme.extraLarge}){
      font-size: 1.8rem;

    }
  }
  p {
    color: ${(props) => props.theme.navy} !important;
    font-size: 0.8rem;
    font-weight: 700;
    margin: 0;
    @media (min-width: ${theme.large}){
      font-size: 1rem;
    }
    @media (min-width: ${theme.extraLarge}){
      font-size: 1.3rem;

    }
  }

  a {
    color: ${(props) => props.theme.navy} !important;
    font-size: 0.8rem;
    font-weight: 400;
    margin: 0;
    @media (min-width: ${theme.large}){
      font-size: 1rem;
    }
    @media (min-width: ${theme.extraLarge}){
      font-size: 1.3rem;

    }
    
  }

  b {
    color: ${(props) => props.theme.navy} !important  ;
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0;
  }
`;
