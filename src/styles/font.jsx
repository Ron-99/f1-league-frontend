import { createGlobalStyle } from "styled-components";
import LatoThin from "../fonts/Lato-Thin.ttf";
import LatoRegular from "../fonts/Lato-Regular.ttf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Lato';
  src: url(${LatoRegular}) format('ttf');
  font-style: normal;
}
`;

export default FontStyles;
