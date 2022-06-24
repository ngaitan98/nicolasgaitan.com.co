import { Fade, Grid, Typography } from "@mui/material";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

function About() {
    return (
        <>
            <Fade in={true} style={{ transitionDelay: "400ms" }}>
                <Grid
                    sx={{ width: 1, minHeight: "60vh" }}
                    container
                    direction="column"
                    alignItems="center"
                >
                    <Grid item sx={{ width: 0.65 }}>
                        <SectionTitle component="h1">
                            About
                        </SectionTitle>
                        <Typography variant="p" sx={{ fontWeight: 400, fontSize: 20 }} align="center">
                            Hello! My name is Nicolás, and I enjoy creating strong back-ends. My interest in programming started back when I was 10 years old when I dreamed about creating video games. I built a simple stickman game and it led me to study Software Engineering.
                        </Typography>
                        <br />
                        <br />
                        <Typography variant="p" sx={{ fontWeight: 400, fontSize: 20 }} align="center">
                            Fast-forward to today and I no longer want to build only video games, but I want to build challenging back-ends. So far, I’ve had the privilege to work at a start-up (Link Phi), at my university (Link Cupi), and a non-profit mobile app (Link Senecare). My focus right now is building back-ends with modern technologies such as containers and cloud solutions.
                        </Typography>
                        <br />
                        <br />
                        <Typography variant="p" sx={{ fontWeight: 400, fontSize: 20 }} align="center">
                            Also my dream has changed, and I’d like to learn Machine Learning somewhere soon to build fun useless side projects.
                        </Typography>
                    </Grid>
                </Grid>

            </Fade>
        </>)
}

export default About;