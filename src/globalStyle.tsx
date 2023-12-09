import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #262626;
}

div, p, a {
  color: #FFF;
}

button {
  color: #FFF;
  background-color: #ff9595;
}

body {
  margin: 0;
  padding: 0;
}
`;

export default GlobalStyle;
