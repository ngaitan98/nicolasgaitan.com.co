import { IconButton, styled } from '@mui/material';
function setStyle({theme}) {
    return {
        "&:hover": {
            cursor: 'pointer',
            backgroundColor: 'transparent'
        },
        "& > *":{
            transition: "all ease-in 100ms"
        },
        "&:hover > *": {
            transform: "translateY(-5px)"
        }
    }
};

export default styled(IconButton)(setStyle);
