import React from "react";

/** Import MUI components */
import { Box } from "@mui/system";

export default function Home(props) {
  return (
    <Box
      component={"div"}
      sx={{
        marginTop: "5rem",
        direction: "row",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ backgroundColor: "green", m: "0.5rem", width: "100%" }}>
          <h1>Journal Div</h1>
        </Box>
      </Box>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <Box sx={{ backgroundColor: "green", width: "50%", m: "0.5rem" }}>
          <h1>Current Journal</h1>
        </Box>
        <Box sx={{ backgroundColor: "green", width: "50%", m: "0.5rem" }}>
          <h1>Location Summary</h1>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ backgroundColor: "green", m: "0.5rem", width: "100%" }}>
          <h1>Add Journal Entry</h1>
        </Box>
      </Box>
    </Box>
  );
}
