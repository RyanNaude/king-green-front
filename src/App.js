import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/** Import Material UI components */
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import theme from "../src/assets/theme/index";

/** Import Custom Components */
import Header from "./layouts/header";
import Home from "./layouts/home";
import Calander from "./layouts/calander";
import Cost from "./layouts/cost";
import Enviroment from "./layouts/enviroment";
import Gallery from "./layouts/gallery";

function App() {
  return (
    <Box className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/calander" element={<Calander />} />
          <Route exact path="/cost" element={<Cost />} />
          <Route exact path="/enviroment" element={<Enviroment />} />
          <Route exact path="/gallery" element={<Gallery />} />
        </Routes>
      </ThemeProvider>
    </Box>
  );
}

export default App;
