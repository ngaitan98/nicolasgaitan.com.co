import { Fade, Grid, Typography } from "@mui/material";

import SectionTitle from "../../components/SectionTitle/SectionTitle";

import Link from "../../components/Link/Link";
import List from "../../components/List/List";
import ListItem from "../../components/List/ListItem";

function Experience() {
    return (
        <>
            <Fade in={true} style={{ transitionDelay: "400ms" }}>
                <Grid
                    sx={{ width: 1, minHeight: "60vh", paddingLeft: "15%"}}
                    container
                    spacing = {10}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid
                        item>
                        <SectionTitle component="h1">
                            Experience
                        </SectionTitle>
                        <Typography variant="p" sx={{ fontWeight: 400, fontSize: 20 }} align="center">
                            Hello! My name is Nicolás, and I enjoy creating strong back-ends. My interest in programming started back when I was 10 years old when I dreamed about creating video games. I built a simple stickman game and it led me to study Software Engineering.
                        </Typography>
                        <br />
                        <br />
                        <Typography variant="p" sx={{ fontWeight: 400, fontSize: 20 }} align="center">
                            Fast-forward to today and I no longer want to build only video games, but I want to build challenging back-ends. So far, I’ve had the privilege to work at a <Link href="https://www.phitech.io/" rel="noreferrer" target="_blank">sart-up</Link>, at <Link href = "https://cupi2.virtual.uniandes.edu.co/" rel="noreferrer" target="_blank"> my university</Link>, and a <Link href = "https://thesoftwaredesignlab.github.io/proyectoCovidAngel/" rel = "noreferrer" target="_blank">non-profit mobile app</Link>. My focus right now is building back-ends with modern technologies such as containers and cloud services.
                        </Typography>
                        <br />
                        <br />
                        <Typography variant="p" sx={{ fontWeight: 400, fontSize: 20 }} align="center">
                            Also my dream has changed, and I’d like to keep my current career path, and learn Machine Learning somewhere soon to build fun useless side projects.
                        </Typography>
                        <br />
                        <br />
                        <Typography variant="p" sx={{ fontWeight: 400, fontSize: 20 }} align="center">
                           Here are a few technologies I've been working with recently:
                        </Typography>
                        <List>
                            <ListItem>JavaScript</ListItem>
                            <ListItem>TypeScript</ListItem>
                            <ListItem>Python</ListItem>
                            <ListItem>Node.js</ListItem>
                            <ListItem>PostgreSQL</ListItem>
                            <ListItem>MongoDB</ListItem>
                            <ListItem>ElasticSearch</ListItem>
                            <ListItem>Docker</ListItem>
                            <ListItem>AWS</ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Fade>
        </>)
}


export default Experience;