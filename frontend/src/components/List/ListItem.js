import { styled } from '@mui/material';
function setStyle({theme}) {
    return {
        position: "relative",
        marginBottom: "10px",
        paddingLeft: "20px",
        "&::before":{
            content: '"▹"',
            position: "absolute",
            left: "0px",
            color: theme.palette.secondary.main,
        }
    }
};

export default styled('li')(setStyle);
