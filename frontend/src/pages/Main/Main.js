import { Fade, Grid, Typography } from "@mui/material";
import Link from "../../components/Link/Link";
import resume from "../../assets/files/resume.pdf";

function Main() {
    return (
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
                        I'm building something cool.
                        Come back soon!
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="p" sx={{ fontWeight: 400, fontSize: 25 }} align="center">
                        In the meantime you can <Link href={resume} target="_blank">check my resume</Link> or <Link href="mailto:nicolasgaitanps4@gmail.com">email me</Link> too.
                    </Typography>
                </Grid>
            </Grid>
        </Fade>)
}

export default Main;