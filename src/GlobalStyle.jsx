import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  p,h1,h2,h3{
    font-family: Carmen;
  }
  a {
    text-decoration: none;
    color:black;
  }
`;

export default GlobalStyle;