import React, { useState } from "react";
import { Link } from "react-router-dom";

/** Import Material UI components */
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function CustTabs(props) {
  const menuOption = [
    "Home",
    "Enviroment",
    "Calander",
    "Gallery",
    "Cost",
    "Setting",
  ];

  const linkOption = [
    "/",
    "/enviroment",
    "/calander",
    "/gallery",
    "/cost",
    "/settings",
  ];

  return (
    <Tabs
      value={props.value}
      onChange={props.handleChange}
      centered
      textColor="secondary"
      indicatorColor="primary"
    >
      {menuOption.map((data, index) => {
        return (
          <Tab
            label={data}
            sx={{ textTransform: "uppercase", fontSize: "1.1rem" }}
            value={index}
            key={index}
            LinkComponent={Link}
            to={linkOption[index]}
          />
        );
      })}
    </Tabs>
  );
}
