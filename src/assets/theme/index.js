import { createTheme } from "@mui/material/styles";

const col1 = "#062C30";
const col2 = "#05595B";
const col3 = "#E2D784";
const col4 = "#F5F5F5";

const theme = createTheme({
  palette: {
    common: {
      col1: col1,
      col2: col2,
      col3: col3,
      col4: col4,
    },
    primary: {
      main: col2,
    },
    secondary: {
      main: col4,
    },
    tertiary: {
      main: col3,
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
