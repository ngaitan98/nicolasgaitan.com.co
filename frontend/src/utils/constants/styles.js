import { createTheme } from "@mui/material"

const baseTheme = createTheme({
  typography: {
    fontFamily: "'PT Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
  }
})

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
    background: {
        default: "#404EED"
    },
    primary: {
      main: "#F6F6F6"
    },
    secondary: {
      main: "#151617"
    }
  }
})
const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#fafafa"
    },
    secondary: {
      main: "#26a27b"
    }
  }
})

export { darkTheme, lightTheme }