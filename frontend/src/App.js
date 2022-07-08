//MUI
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';

// Pages
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";

//Other requirements
import { darkTheme } from "./utils/constants/styles.js";

import "swiper/css/bundle";

function App() {
  return (
    <ThemeProvider theme={darkTheme} >
      <CssBaseline />
      <Main />
      <About id = "about"/>
      <Experience id = "experience"/>
      <Projects id = "projects"/>
    </ThemeProvider>
  );
}

export default App;
