import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { Routes } from "./routes";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
