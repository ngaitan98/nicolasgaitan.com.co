import { Fade, Grid, Typography } from "@mui/material";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Link from "../../components/Link/Link";
import List from "../../components/List/List";
import ListItem from "../../components/List/ListItem";

import experience from "../../assets/files/experience.json";

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
                            Where I've worked
                        </SectionTitle>
                        {experience.map((el, i) => <div key={`${el.company} ${el.position} ${el.dates}`}>{el.position}@{el.company}</div>)}
                    </Grid>
                </Grid>
            </Fade>
        </>)
}


export default Experience;