import { styled } from '@mui/material';
function setStyle({ theme }) {
    return {
        textDecoration: "none",
        fontWeight: "bold",
        color: theme.palette.secondary.main,
        position: "relative",
        "&:hover": {
            cursor: 'pointer'
        },
        "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            bottom: 0,
            height: "10%",
            width: "15%",
            background: theme.palette.secondary.main,
            zIndex: -1,
            transition: "all ease-in 0.1s",
        },
        "&:hover::after": {
            width: "100%",
            background: theme.palette.secondary.main,
        }
    }
};

export default styled('a')(setStyle);
