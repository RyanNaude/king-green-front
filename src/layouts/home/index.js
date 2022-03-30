import React from "react";

/** Import MUI components */
import { Box } from "@mui/system";
import theme from "../../assets/theme";

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
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
            m: "0.5rem",
            width: "100%",
            pl: "1rem",
          }}
        >
          <h1>Div Top</h1>
        </Box>
      </Box>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
            width: "50%",
            m: "0.5rem",
            pl: "1rem",
          }}
        >
          <h1>Div Left</h1>
        </Box>
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
            width: "50%",
            m: "0.5rem",
            pl: "1rem",
          }}
        >
          <h1>Div Right</h1>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
            m: "0.5rem",
            width: "100%",
            pl: "1rem",
          }}
        >
          <h1>Div Bottom</h1>
        </Box>
      </Box>
    </Box>
  );
}
