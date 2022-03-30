import { createTheme } from "@mui/material/styles";

const prim = "#05595B";
const col1 = "#062C30";
const ter = "#E2D784";
const sec = "#F5F5F5";

const theme = createTheme({
  palette: {
    common: {
      col1: col1,
      col2: prim,
      col3: ter,
      col4: sec,
    },
    primary: {
      main: prim,
    },
    secondary: {
      main: sec,
    },
    tertiary: {
      main: ter,
    },
    background: {
      paper: "#000",
      default: "#000",
    },
  },
  typography: {
    fontFamily: "Commissioner",
  },
});
export default theme;
