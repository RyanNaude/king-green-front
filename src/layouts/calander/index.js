import React from "react";

// /** Import MUI components */
import { Box } from "@mui/system";
// import { makeStyles } from "@mui/styles";
// import { useTheme } from "@emotion/react";
// import { Typography } from "@mui/material";

/** Material UI Styles */
// const useStyles = makeStyles((theme) => ({}));

export default function Calander(props) {
  //   const classes = useStyles();

  const tempCal = [
    "1",
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];

  const calEntries = ["Entry 1", "Entry 2", "Entry 3", "Entry 4", "Entry 5", "Entry 6", "Entry 7"];
  return (
    <Box
      component={"div"}
      sx={{
        marginTop: "5rem",
        direction: "row",
        width: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        component={"div"}
        sx={{ display: "flex", flexDirection: "column", width: "15%" }}
      >
        {calEntries.map((data) => (
          <Box sx={{ width: "100%", backgroundColor: "" }}>
            <h1>{data}</h1>
          </Box>
        ))}
      </Box>

      <Box
        component={"div"}
        sx={{
          width: "85%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          component={"div"}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1>Month Details</h1>
        </Box>
        <Box
          component={"div"}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <h2>Sunday</h2>
          <h2>Monday</h2>
          <h2>Tuesday</h2>
          <h2>Wednesday</h2>
          <h2>Thursday</h2>
          <h2>Friday</h2>
          <h2>Saterday</h2>
        </Box>
        <Box
          component={"div"}
          sx={{
            width: "100%",
            display: "grid",
            flexDirection: "row",
            // justifyContent: "space-evenly",
            gridTemplateColumns: "repeat(7, 1fr)",
          }}
        >
          {tempCal.map((data) => (
            <Box sx={{ width: "100%", backgroundColor: "" }}>
              <h1>{data}</h1>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
