import { styled } from '@mui/material';
function setStyle({theme}) {
    return {
        display: "grid",
        gap: "0px 10px",
        padding: "0px",
        margin: "20px 0px 0px",
        overflow: "hidden",
        listStyle: "none",
        gridTemplateColumns: "1fr 1fr 1fr"
    }
};

export default styled('ul')(setStyle);
