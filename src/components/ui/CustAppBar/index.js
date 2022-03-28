import React from "react";

/** Import Material UI components */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useScrollTrigger from "@mui/material/useScrollTrigger";

/** Import Custom Components */
import CustTabs from "../CustTabs";

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

export default function CustAppBar() {
  return (
    <div sx={{ width: "100%" }}>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Box display={"flex"} sx={{ width: "100%" }}>
              <Box sx={{ width: "20%" }}>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                  king green
                </Typography>
              </Box>
              <Box sx={{ width: "65%" }}>
                <CustTabs />
              </Box>
              <Box
                sx={{
                  width: "15%",
                  flexDirection: "row",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "row",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: "50%",
                      justifyContent: "space-around",
                    }}
                  >
                    <Button color="inherit">Register</Button>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "50%",
                      justifyContent: "space-around",
                    }}
                  >
                    <Button color="inherit">Login</Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}
