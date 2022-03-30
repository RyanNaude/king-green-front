import React from "react";

/** Import MUI components */
import { Box } from "@mui/system";

import theme from "../../assets/theme";

/** Style Objects */
const boxMain = {
  marginTop: "5rem",
  direction: "row",
  width: "100%",
  display: "flex",
  flexDirection: "column",
};

const boxBodyFoot = {
  backgroundColor: theme.palette.primary.main,
  p: "0.5rem",
  direction: "column",
};

const boxBodyQuart = {
  backgroundColor: theme.palette.primary.main,
  width: "25%",
  m: "0.5rem",
};

const boxBodyContainer = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

export default function Enviroment(props) {
  return (
    <Box component={"div"} sx={boxMain}>
      <Box sx={{ backgroundColor: theme.palette.primary.main }}>
        <h1>Local Weather Info</h1>
      </Box>

      <Box sx={boxBodyContainer}>
        <Box sx={boxBodyQuart}>
          <h1>Day time Details</h1>
        </Box>
        <Box sx={boxBodyQuart}>
          <h1>Day time stats</h1>
        </Box>
        <Box sx={boxBodyQuart}>
          <h1>Night time Details</h1>
        </Box>
        <Box sx={boxBodyQuart}>
          <h1>Night time stats</h1>
        </Box>
      </Box>

      <Box sx={boxBodyFoot}>
        <Box>
          <h1>Month Weather Prediction : Display as flex-grid</h1>
        </Box>
        <Box>
          <h1>Month Weather Prediction : Display as flex-grid</h1>
        </Box>
        <Box>
          <h1>Month Weather Prediction : Display as flex-grid</h1>
        </Box>
        <Box>
          <h1>Month Weather Prediction : Display as flex-grid</h1>
        </Box>
      </Box>
    </Box>
  );
}
