import { Fade, Grid, Typography, Box, Container } from "@mui/material";

import SectionTitle from "../../components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import 'swiper/css';
import "swiper/css/effect-cards";

import Link from "../../components/Link/Link";
import List from "../../components/List/List";
import ListItem from "../../components/List/ListItem";

function About() {
    return (
        <>
            <Fade in={true} style={{ transitionDelay: "400ms" }}>
                <Container sx = {{minHeight: "100vh"}}>
                    <Grid
                        sx={{ width: 1 }}
                        container
                        spacing={10}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Grid
                            item
                            xs={7}>
                            <SectionTitle component="h1">
                                About Me
                            </SectionTitle>
                            <br />
                            <Typography variant="p" sx={{ fontWeight: 400, fontSize: "18px" }} align="center">
                                Hello! My name is Nicolás, and I enjoy creating strong back-ends. My interest in programming started back when I was 10 years old when I dreamed about creating video games. I built a simple stickman game and it led me to study Software Engineering.
                            </Typography>
                            <br />
                            <br />
                            <Typography variant="p" sx={{ fontWeight: 400, fontSize: "18px" }} align="center">
                                Fast-forward to today and I no longer want to build only video games, but I want to build challenging back-ends. So far, I’ve had the privilege to work at a <Link href="https://www.phitech.io/" rel="noreferrer" target="_blank">start-up</Link>, at <Link href="https://cupi2.virtual.uniandes.edu.co/" rel="noreferrer" target="_blank"> my university</Link>, a <Link href="https://thesoftwaredesignlab.github.io/proyectoCovidAngel/" rel="noreferrer" target="_blank">non-profit mobile app</Link>, and a <Link href="https://www.amazon.com/" rel="noreferrer" target="_blank">big tech</Link>. My focus right now is building back-ends with modern technologies such as containers and cloud services.
                            </Typography>
                            <br />
                            <br />
                            <Typography variant="p" sx={{ fontWeight: 400, fontSize: "18px" }} align="center">
                                At the moment, I'm aiming my career towards becoming a back-end engineer, but I'd like to work with Aritificial Intelligence in the future, so I can build fun useless projects.
                            </Typography>
                            <br />
                            <br />
                            <Typography variant="p" sx={{ fontWeight: 400, fontSize: "18px" }} align="center">
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
                        <Grid
                            item
                            xs={5}>
                            <Cards />
                        </Grid>
                    </Grid>
                </Container>
            </Fade>
        </>)
}

function Cards() {
    return (
        <Swiper
            effect="cards"
            grabCursor={true}
            cardsEffect={{
                slideShadows: false
            }}
            modules={[EffectCards]}
        >
            <SwiperSlide><Box sx={{ height: 480, width: 360, borderRadius: "18px", background: 'url("https://s3.us-east-1.amazonaws.com/nicolasgaitan.com.co/images/portrait1.jpeg")', backgroundRepeat: "no-repeat", backgroundSize: "auto 115%" }} /></SwiperSlide>
            <SwiperSlide><Box sx={{ height: 480, width: 360, borderRadius: "18px", background: 'url("https://s3.us-east-1.amazonaws.com/nicolasgaitan.com.co/images/portrait2.jpeg")', backgroundRepeat: "no-repeat", backgroundSize: "auto 115%" }} /></SwiperSlide>
            <SwiperSlide><Box sx={{ height: 480, width: 360, borderRadius: "18px", background: 'url("https://s3.us-east-1.amazonaws.com/nicolasgaitan.com.co/images/portrait3.jpeg")', backgroundRepeat: "no-repeat", backgroundSize: "auto 115%" }} /></SwiperSlide>
        </Swiper>
    )
}
export default About;