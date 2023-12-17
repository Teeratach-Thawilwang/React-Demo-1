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
  user-select: none;
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

.swiper {
  height: 100%;
  padding: 10px 0;
}

.swiper-pagination {
  height: 10px;
  padding: 0;
  margin: 0;
  line-height: 0;
  position: absolute;
  bottom: 0px !important;
  text-align: end;
}

.swiper-pagination-bullet{
  text-align: center;
  width: 10px;
  height: 10px;
  background-color: #FFF;
}

.swiper-pagination-bullet-active{
  width: 10px;
  height: 10px;
  background-color: #FFF;
}
`;

export default GlobalStyle;
