import { CssBaseline, Fade, Grid, Typography } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import Link from "./components/Link/Link";
import Navbar from "./components/Navbar/Navbar";
import { darkTheme } from "./utils/constants/styles.js";
import resume from "./assets/files/resume.pdf";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Fade in={true} style={{ transitionDelay: "700ms" }}>
        <Grid
          sx={{ width: 1, height: "100vh" }}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h1" sx={{ fontWeight: 'bold' }} align="center">
              I'm building something cool.<br />
              Come back soon!
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="p" sx={{ fontWeight: 400, fontSize: 25 }} align="center">
              In the meantime you can <Link href={resume} target="_blank">check my resume</Link> or <Link href="mailto:nicolasgaitanps4@gmail.com">email me</Link> too.
            </Typography>
          </Grid>
        </Grid>
      </Fade>
    </ThemeProvider>
  );
}

export default App;
