import { styled } from '@mui/material';
function setStyle({ theme }) {
    return {
        fontWeight: "bold",
        color: theme.palette.primary.main,
        position: "relative",
        "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            bottom: 0,
            height: "30%",
            width: "10%",
            background: theme.palette.secondary.main,
            zIndex: -1,
            transition: "all ease-in 0.1s",
        }
    }
};

export default styled('h1')(setStyle);
