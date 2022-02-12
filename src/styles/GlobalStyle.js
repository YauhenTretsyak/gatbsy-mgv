import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import bottom_bg from '../images/backgound_bottom.png';

const GlobalStyle = createGlobalStyle `
  ${ normalize }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    overflow-x: hidden;
    position: relative;
    background-size: cover;
    background-position-x: center;
    font-family: "Roboto", sans-serif;
    font-size: 2.5rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 8.3rem;
      left: 43.08%;
      width: 254.693rem;
      height: 93.8rem;
      background-image: url(${ bottom_bg });
      background-size: cover;
      transform: translateX(-48.08%);
      z-index: -1;
    }
  }

  h2 {
    color: #3d1a02;
  }

  a {
    text-decoration: none;
    transition: all .3s ease-in-out;

    &:hover {
      cursor: pointer;
    }
  }
`

export default GlobalStyle;