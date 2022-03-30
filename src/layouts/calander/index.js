import React from "react";

/** Import MUI components */
import { Box } from "@mui/system";

const boxBodyCalander = {
  width: "100%",
  display: "grid",
  flexDirection: "row",
  justifyContent: "space-evenly",
  gridTemplateColumns: "repeat(7, 1fr)",
};

const boxBodyWeekdays = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
};

const boxBodyEntry = {
  display: "flex",
  flexDirection: "column",
  width: "15%",
};

const boxBodyMain = {
  width: "85%",
  display: "flex",
  flexDirection: "column",
};

const boxBodyContainer = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
};

const boxMain = {
  marginTop: "5rem",
  direction: "row",
  width: "100%",
  display: "flex",
  flexDirection: "row",
};

export default function Calander(props) {
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

  const calEntries = [
    "Entry 1",
    "Entry 2",
    "Entry 3",
    "Entry 4",
    "Entry 5",
    "Entry 6",
    "Entry 7",
  ];
  return (
    <Box component={"div"} sx={boxMain}>
      <Box component={"div"} sx={boxBodyEntry}>
        {calEntries.map((data) => (
          <Box sx={{ width: "100%" }}>
            <h1>{data}</h1>
          </Box>
        ))}
      </Box>

      <Box component={"div"} sx={boxBodyMain}>
        <Box component={"div"} sx={boxBodyContainer}>
          <h1>Month Details</h1>
        </Box>
        <Box component={"div"} sx={boxBodyWeekdays}>
          <h2>Sunday</h2>
          <h2>Monday</h2>
          <h2>Tuesday</h2>
          <h2>Wednesday</h2>
          <h2>Thursday</h2>
          <h2>Friday</h2>
          <h2>Saterday</h2>
        </Box>
        <Box component={"div"} sx={boxBodyCalander}>
          {tempCal.map((data) => (
            <Box sx={{ width: "100%" }}>
              <h1>{data}</h1>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
