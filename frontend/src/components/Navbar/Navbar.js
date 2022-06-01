import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Box, Slide, Fade } from '@mui/material';
import logo from "../../assets/img/logo.png";
import links from '../../utils/constants/links.js';
import SocialLink from '../SocialLink/SocialLink';

function Navbar() {
  return (
    <Box component="header" sx={{ position: "absolute", width: 1, height: "10vh" }}>
      <Grid
        sx={{ width: 1, height: 1 }}
        container
        spacing={2}>
        <Grid item xs={9}>
          <Fade in={true} style={{ transitionDelay: "200ms" }}>
            <a href = "/"><img height="100px" alt="Logo" src={logo} /></a>
          </Fade>
        </Grid>
        <Grid item xs={3}>
          <Grid
            sx={{ width: 1, height: 1 }}
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center">
            {links.map((el, i) => <SocialLinkEntry key = {el.link} delay={300 + 500/(i/3+1)} link = {el.link} component = {el.component}/>)}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

function SocialLinkEntry({delay, link, component}) {
  const handleLinkClick = () => {
    window.open(link, "_blank")
  }
  return (
    <Slide key={link} in={true} style={{ transitionDelay: `${delay}ms` }}>
      <SocialLink onClick={handleLinkClick}>
        <FontAwesomeIcon icon={component} />
      </SocialLink>
    </Slide>
  )
}
export default Navbar;
