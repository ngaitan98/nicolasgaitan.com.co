import { Box, Button, Fade, Typography } from "@mui/material";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SectionTitle from "../../components/SectionTitle/SectionTitle";

function Contact() {
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
                        At the moment, I'm looking for a new workplace where I can bring to the table all that you've seen so far. Therefore, feel free to contact me whether you want to tell me about a position or just say hi!
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            pt:5,
                            width: 500
                        }}>
                            <Button variant="outlined" color = "secondary" sx={{textTransform: "none", fontSize: "18px"}} startIcon={<FontAwesomeIcon icon = {faEnvelope}/>}>
                                Say Hello
                            </Button>
                            <Button variant="outlined" color = "secondary" sx={{textTransform: "none", fontSize: "18px"}} startIcon={<FontAwesomeIcon icon = {faLinkedin}/>}>
                                Linkedin
                            </Button>
                    </Box>
                </Box>
            </Fade>
        </>)
}

export default Contact;