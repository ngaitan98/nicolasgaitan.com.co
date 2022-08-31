import { Box, Button, Fade, Typography } from "@mui/material";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SectionTitle from "../../components/SectionTitle/SectionTitle";

function Contact() {
    function openLinkedin(){
        window.open("https://www.linkedin.com/in/ngaitan98", "_blank");
    }
    function openEmail(){
        window.open("mailto:nicolasgaitanps4@gmail.com", "_blank");
    }
    return (
        <>
            <Fade in={true} style={{ transitionDelay: "400ms" }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "80vh"
                    }}

                >
                    <SectionTitle sx={{ fontSize: 18, textAlign: "center" }}>
                        So, now what?
                    </SectionTitle>
                    <Typography variant="h2" sx={{ fontWeight: 'bold' }} color="secondary.main">
                        Get In Touch
                    </Typography>
                    <Typography variant="p" sx={{ fontWeight: 400, fontSize: 18, textAlign: "center", maxWidth: "500px" }} align="center">
                        Even though I'm not actively looking for an offer, feel free to say hi or tell me what you have in mind
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            pt:5,
                            width: 500
                        }}>
                            <Button onClick = {openEmail} variant="outlined" color = "secondary" sx={{textTransform: "none", fontSize: "18px"}} startIcon={<FontAwesomeIcon icon = {faEnvelope}/>}>
                                Say Hello
                            </Button>
                            <Button onClick = {openLinkedin} variant="outlined" color = "secondary" sx={{textTransform: "none", fontSize: "18px"}} startIcon={<FontAwesomeIcon icon = {faLinkedin}/>}>
                                Linkedin
                            </Button>
                    </Box>
                </Box>
            </Fade>
        </>)
}

export default Contact;