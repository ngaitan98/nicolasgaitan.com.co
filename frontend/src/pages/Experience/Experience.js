import { useEffect, useState } from "react";

import { Container, Fade, Typography } from "@mui/material";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import List from "../../components/List/List";
import Link from "../../components/Link/Link";
import ListItem from "../../components/List/ListItem";

import { getExeperience } from "../../services/axios";


function Experience() {
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        async function init() {
            const response = await getExeperience();
            setExperience(response);
        }
        init();
    }, []);

    return (
        <Fade in={true} style={{ transitionDelay: "400ms" }}>
            <Container sx={{ minHeight: "100vh" }}>
                <SectionTitle>Where I've worked</SectionTitle>
                <br />
                <Timeline align="a">
                    {experience.map((el) => <ExperienceEntry entry={el} key={`${el.position}-${el.company}-${el.dates}`} />)}
                </Timeline>
            </Container>
        </Fade>)
}

function ExperienceEntry({ entry }) {
    return (
        <TimelineItem>
            <TimelineOppositeContent sx={{ flex: "1" }}>
                <Typography element="span" color="secondary.main" fontSize={14}>
                    {`${entry.position}\n`} <br/>
                    at{" "}
                    <Link target="_blank" href={entry.link} rel="noreferrer">{entry.company}</Link>
                </Typography>
                <Typography element="span" fontSize={12} fontStyle="italic">
                    {entry.dates}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ flex: "3" }}>
                <List sx={{ gridTemplateColumns: "1fr", margin: "auto" }}>
                    {entry.tasks.map((el, i) => <ListItem key={el}>{el}</ListItem>)}
                </List>
            </TimelineContent>
        </TimelineItem>
    )
}

export default Experience;