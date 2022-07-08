import { styled } from '@mui/material';
function setStyle({ theme }) {
    return {
        fontWeight: "bold",
        color: theme.palette.primary.main,
        position: "relative",
        paddingLeft: "40px",
        "&::after": {
            
            content: '""',
            position: "absolute",
            left: "40px",
            bottom: "-3px",
            height: "30%",
            width: "10%",
            background: theme.palette.secondary.main,
            zIndex: -1,
            transition: "all ease-in 0.1s",
        },
        "&::before":{
            counterIncrement: "section",
            content: '"0" counter(section) ". "',
            position: "absolute",
            left: "0px",
            fontWeight: "0",
            color: theme.palette.secondary.main,
        }
    }
};

export default styled('h1')(setStyle);
