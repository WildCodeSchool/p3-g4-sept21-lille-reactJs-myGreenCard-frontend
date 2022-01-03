import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

body{
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
}

}
p,h1,h2,h3{
  font-family: 'Montserrat', sans-serif;
}

a {
  text-decoration: none;
  color:black;
}

button{
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
}

`;

export default GlobalStyles;