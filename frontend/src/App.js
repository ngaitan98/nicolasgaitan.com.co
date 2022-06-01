import { CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main/Main";
import { darkTheme } from "./utils/constants/styles.js";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Main />
    </ThemeProvider>
  );
}

export default App;
