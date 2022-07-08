import { Box, styled } from '@mui/material';

function TopBlob() {
    return (
        <Box component="span" sx={{ position: "absolute", width: 0.5, right: 0, bottom: 0, zIndex: -3 }}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#404EED" d="M35.7,-59.3C44.7,-49.8,49.3,-37.2,52.7,-25.4C56.1,-13.5,58.3,-2.4,60.7,11.5C63,25.5,65.6,42.3,59.5,54.4C53.4,66.5,38.7,74,23.4,77.5C8,81.1,-7.8,80.8,-19,73.5C-30.2,66.2,-36.7,51.9,-48.6,40.7C-60.4,29.5,-77.5,21.6,-84.8,8.7C-92.1,-4.2,-89.6,-22,-79.3,-32.7C-68.9,-43.4,-50.7,-47,-36.2,-53.9C-21.7,-60.8,-10.8,-71.1,1.3,-73C13.4,-75,26.7,-68.7,35.7,-59.3Z" transform="translate(100 100)" />
            </svg>
        </Box>
    )
}

export default TopBlob;
