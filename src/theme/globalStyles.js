import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
  
  ol,
  ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  body {
    margin: 0;
    color: #333;
    background-color: #f9f9f9;
    font-family: "Fira Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h2 {
    margin-bottom: 1rem;
    font-size: 1.75rem;
    font-weight: 900;
    text-transform: uppercase;
  }
`;

export default GlobalStyles;
