import { Box, Fade, Typography } from "@mui/material";

import Link from "../../components/Link/Link";

function Footer() {
    return (
        <>
            <Fade in={true} style={{ transitionDelay: "400ms" }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "10vh"
                    }}

                >
                    <Typography component="span">
                        Built by <Link href="https://github.com/ngaitan98/nicolasgaitan.com.co" rel="noreferrer" target="_blank">Nicolás Gaitán Escobar</Link>
                    </Typography>
                    <Typography component="span">
                        Inspired by <Link href="https://brittanychiang.com/" rel="noreferrer" target="_blank">Brittany Chiang</Link>
                    </Typography>

                </Box>
            </Fade>
        </>)
}

export default Footer;