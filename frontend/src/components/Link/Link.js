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
            width: "0%",
            background: theme.palette.primary.main,
            zIndex: -1,
            transition: "all ease-in 0.2s",
        },
        "&:hover::after": {
            width: "100%"
        }
    }
};

export default styled('a')(setStyle);
