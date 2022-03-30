import React from "react";

/** Import MUI components */
import { Box } from "@mui/system";
import theme from "../../assets/theme";

const boxOptions = {
  display: "flex",
  flexDirection: "row",
};

const boxBodyHalf = {
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  width: "50%",
  m: "0.5rem",
  pl: "1rem",
};

const boxBodyFull = {
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  m: "0.5rem",
  width: "100%",
  pl: "1rem",
};

const boxMain = {
  marginTop: "5rem",
  direction: "row",
  width: "100%",
};

export default function Home(props) {
  return (
    <Box component={"div"} sx={boxMain}>
      <Box sx={boxOptions}>
        <Box sx={boxBodyFull}>
          <h1>Div Top</h1>
        </Box>
      </Box>
      <Box sx={boxOptions}>
        <Box sx={boxBodyHalf}>
          <h1>Div Left</h1>
        </Box>
        <Box sx={boxBodyHalf}>
          <h1>Div Right</h1>
        </Box>
      </Box>
      <Box sx={boxOptions}>
        <Box sx={boxBodyFull}>
          <h1>Div Bottom</h1>
        </Box>
      </Box>
    </Box>
  );
}
