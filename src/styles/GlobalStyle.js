import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

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
    position: relative;
    font-family: "Roboto", sans-serif;
    font-size: 2.5rem;
  }

  h1, h2, h3, h4, h5 {
    margin:0;
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