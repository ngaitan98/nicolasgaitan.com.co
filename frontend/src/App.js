import { CssBaseline, Grid, Typography } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import Navbar from "./components/Navbar/Navbar";
import { darkTheme } from "./utils/constants/styles.ts";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Grid
        sx = {{width: 1, height: "100vh"}}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h1" sx={{ fontWeight: 'bold' }} align="center">
            Building something cool.<br/>
            Come back soon!
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
