import { useEffect, useState } from "react";

import { Box, Card, CardActions, CardContent, Chip, Container, Fade, Grid, Typography } from "@mui/material";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SocialLink from "../../components/SocialLink/SocialLink";

import { getProjects } from "../../services/axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function init() {
            const response = await getProjects();
            setProjects(response);
        }
        init();
    }, []);

    return (
        <Fade in={true} style={{ transitionDelay: "400ms" }}>
            <Container>
                <SectionTitle>Things I've built</SectionTitle>
                <br />
                <Grid container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 1, sm: 2, md: 8 }}
                >
                    {projects.map((el) => <Project key={el.title} project={el}>{el.title}</Project>)}
                </Grid>
            </Container>
        </Fade>)
}

function Project({ project }) {
    const handleRepoClick = () => {
        window.open(project.repo, "_blank")
    }
    const handleDemoClick = () => {
        window.open(project.demo, "_blank")
    }
    return (
        <Grid item
            xs={1} sm={1} md={2}
        >
            <Card sx={{ width: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {project.summary}
                    </Typography>
                    <Box
                        sx={{
                            "display": "flex",
                            "flexWrap": "wrap"
                        }}>
                        {project.stack.map(el => <Chip sx = {{mt: 1,mr: 0.5, ml: 0.5}} key={`${project.title}-${el}`} label={el} />)}
                    </Box>
                </CardContent>
                <CardActions sx ={{display: "flex", justifyContent: "flex-end", bottom: "0"}}>
                    <SocialLink onClick={handleDemoClick} color="secondary" sx = {{display: project.demo?"block":"none"}}>
                        <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </SocialLink>
                    <SocialLink onClick={handleRepoClick} color="secondary">
                        <FontAwesomeIcon icon={faGithub} />
                    </SocialLink>
                </CardActions>
            </Card>
        </Grid>
    )
}
export default Projects;