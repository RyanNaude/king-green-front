/** Main Body */
import React from "react";

/** Import Material UI Components */
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

/** Import Custom Components */
import CustAppBar from "../../components/ui/CustAppBar";

export default function Header(props) {
  return (
    <Box>
      <CustAppBar />
    </Box>
  );
}
