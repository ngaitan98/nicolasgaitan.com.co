import { Fade, Grid, Typography } from "@mui/material";
import Link from "../../components/Link/Link";
import Navbar from "../Navbar/Navbar";

function Main() {
    return (
        <>
            <Navbar />
            <Fade in={true} style={{ transitionDelay: "400ms" }}>
                <Grid
                    sx={{ width: 1, height: "100vh" }}
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item sx={{ width: 0.65 }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                            Hi! My name is
                        </Typography>
                        <Typography variant="h1" sx={{ fontWeight: 'bold' }}>
                            Nicolás Gaitán
                        </Typography>
                        <Typography variant="h2" sx={{ fontWeight: 'bold' }} color="secondary.main">
                            And I like to develop cool things.
                        </Typography>
                        <Typography variant="p" sx={{ fontWeight: 400, fontSize: 20 }} align="center">
                            I am a software engineer specialized in building backends (mainly NodeJS) and deploying them to the cloud. Sometimes I like to work with user interfaces too. At the moment I'm open to offers.
                        </Typography>
                        <br />
                        <Typography variant="p" sx={{ fontWeight: 400, fontSize: 20 }} align="center">
                            Not sure yet? <Link href="https://s3.us-east-1.amazonaws.com/nicolasgaitan.com.co/files/resume.pdf" target="_blank">Check my resume</Link> or <Link href="mailto:nicolasgaitanps4@gmail.com">say hi</Link>.
                        </Typography>
                    </Grid>
                </Grid>
            </Fade>
        </>)
}

export default Main;