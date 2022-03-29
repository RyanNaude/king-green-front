import React from "react";

// /** Import MUI components */
import { Box } from "@mui/system";
// import { makeStyles } from "@mui/styles";
// import { useTheme } from "@emotion/react";
// import { Typography } from "@mui/material";

/** Material UI Styles */
// const useStyles = makeStyles((theme) => ({}));

export default function Enviroment(props) {
  //   const classes = useStyles();
  return (
    <Box
      component={"div"}
      sx={{
        marginTop: "5rem",
        direction: "row",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ backgroundColor: "green", p: "0rem" }}>
        <h1>Local Weather Info</h1>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ backgroundColor: "green", width: "25%", m: "0.5rem" }}>
          <h1>Day time Details</h1>
        </Box>
        <Box sx={{ backgroundColor: "green", width: "25%", m: "0.5rem" }}>
          <h1>Day time stats</h1>
        </Box>
        <Box sx={{ backgroundColor: "green", width: "25%", m: "0.5rem" }}>
          <h1>Night time Details</h1>
        </Box>
        <Box sx={{ backgroundColor: "green", width: "25%", m: "0.5rem" }}>
          <h1>Night time stats</h1>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: "green", p: "0.5rem", direction: "column" }}>
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
