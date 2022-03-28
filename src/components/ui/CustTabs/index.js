import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function CustTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange} textColor="teriary" centered>
        <Tab label="Home" color="secondary"/>
        <Tab label="Enviroment" />
        <Tab label="Calander" />
        <Tab label="Gallery" />
        <Tab label="Cost" />
        <Tab label="Setting" />
      </Tabs>
    </Box>
  );
}
