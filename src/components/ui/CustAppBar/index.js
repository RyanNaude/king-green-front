import React, { useState } from "react";

/** Import Material UI components */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useScrollTrigger from "@mui/material/useScrollTrigger";

/** Import Custom Components */
import CustTabs from "../CustTabs";
import CustButton from "../CustButton";
import CustTypog from "../CustTypog";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const buttonBoxContainer = {
  width: "15%",
  flexDirection: "row",
  display: "flex",
  justifyContent: "space-around",
};

const buttonBox = {
  display: "flex",
  width: "50%",
  justifyContent: "space-around",
};

export default function CustAppBar() {
  const [value, setValue] = useState(0);

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <div sx={{ width: "100%" }}>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Box display={"flex"} sx={{ width: "100%" }}>
              <Box sx={{ width: "20%" }}>
                <CustTypog
                  text={"Test Logo"}
                  colorFont={"secondary"}
                  weight={"600"}
                  fontFamily={"Commissioner"}
                  variant={"h4"}
                  align={"left"}
                  flexGrow={1}
                  pl={"2rem"}
                />
              </Box>
              <Box sx={{ width: "65%" }}>
                <CustTabs value={value} handleChange={handleChange} />
              </Box>
              <Box sx={buttonBoxContainer}>
                <Box sx={buttonBox}>
                  <CustButton
                    butName={"Login"}
                    butValue={"Login"}
                    variant={"outlined"}
                    color={"#fff"}
                    fontSize={"1rem"}
                    backgroundColor={"primary"}
                  />
                </Box>
                <Box sx={buttonBox}>
                  <CustButton
                    butName={"Register"}
                    butValue={"Register"}
                    variant={"contained"}
                    fontSize={"1rem"}
                    color={"secondary"}
                    backgroundColor={"secondary"}
                  />
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}
