import { CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';

import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";

import { darkTheme } from "./utils/constants/styles.js";

import "swiper/css/bundle";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Main />
      <About id = "about"/>
      <Experience id = "experience"/>

    </ThemeProvider>
  );
}

export default App;
