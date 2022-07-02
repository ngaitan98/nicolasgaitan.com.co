import { Fade, Grid, Typography, Box } from "@mui/material";

import SectionTitle from "../../components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import 'swiper/css';
import "swiper/css/effect-cards";

import portrait1 from "../../assets/img/portraits/portrait1.jpeg"
import portrait2 from "../../assets/img/portraits/portrait3.jpeg"
import portrait3 from "../../assets/img/portraits/portrait2.jpeg"
import Link from "../../components/Link/Link";

function About() {
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
                        item
                        xs={6}>
                        <SectionTitle component="h1">
                            About
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
                    </Grid>
                    <Grid
                        item
                        xs={6}>
                        <Cards />
                    </Grid>
                </Grid>
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
            <SwiperSlide><Box sx={{ height: 480, width: 360, borderRadius: "18px", background: `url(${portrait1})`, backgroundRepeat: "no-repeat", backgroundSize: "auto 115%"}} /></SwiperSlide>
            <SwiperSlide><Box sx={{ height: 480, width: 360, borderRadius: "18px", background: `url(${portrait2})`, backgroundRepeat: "no-repeat", backgroundSize: "auto 115%"}} /></SwiperSlide>
            <SwiperSlide><Box sx={{ height: 480, width: 360, borderRadius: "18px", background: `url(${portrait3})`, backgroundRepeat: "no-repeat", backgroundSize: "auto 115%"}} /></SwiperSlide>
        </Swiper>
    )
}
export default About;