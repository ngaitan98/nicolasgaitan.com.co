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
                <Grid item sx={{ width: 0.8}}>
                    <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                        Hey! I am
                    </Typography>
                    <Typography variant="h1" sx={{ fontWeight: 'bold' }}>
                        Nicolás Gaitán
                    </Typography>
                    <Typography variant="p" sx={{ fontWeight: 400, fontSize: 25 }} align="center">
                        In the meantime you can <Link href={resume} target="_blank">check my resume</Link> or <Link href="mailto:nicolasgaitanps4@gmail.com">email me</Link> too.
                    </Typography>
                </Grid>
            </Grid>
        </Fade>)
}

export default Main;