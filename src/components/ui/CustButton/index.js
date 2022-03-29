import React from "react";

/** Import MUI components */
import Button from "@mui/material/Button";

export default function CustButton(props) {
  return (
    <Button
      variant={props.variant}
      sx={{
        width: props.butWidth,
        color: props.color,
        fontFamily: "Commissioner",
        backgroundColor: props.backgroundColor,
        fontWeight: props.fontWeight,
        borderColor: props.color,
        fontSize: props.fontSize,
        borderRadius: "25pt",
      }}
      disableElevation
      name={props.butName}
      onClick={props.handleChange}
      value={props.butValue}
    >
      {props.butName}
    </Button>
  );
}
