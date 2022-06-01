import { Grid, Box } from '@mui/material';
import './Navbar.css';

function Navbar() {
  return (
      <Box component= "header" sx = {{position: "absolute", width: 1, height: "10vh"}}>
        <Grid
          sx = {{width: 1, height: 1}}
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center">
          <Grid item>
            Hello
          </Grid>
          <Grid item>
            Something really long is written here
          </Grid>
        </Grid>
      </Box>
  );
}

export default Navbar;
