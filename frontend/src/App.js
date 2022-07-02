import { CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import { darkTheme } from "./utils/constants/styles.js";
import "swiper/css/bundle";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Main />
      <About />
    </ThemeProvider>
  );
}

export default App;
