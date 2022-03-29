import React from "react";

/** Import MUI components */
import { Typography } from "@mui/material";

export default function CustTypog(props) {
  return (
    <Typography
      sx={{
        fontSize: props.fonts,
        fontWeight: props.weight,
        letterSpacing: props.letSpace,
        fontFamily: props.fontFamily,
        color: props.colorFont,
        textAlign: props.align,
        flexGrow: props.flexGrow,
        pl: props.pl,
      }}
      variant={props.variant}
    >
      {props.text}
    </Typography>
  );
}
