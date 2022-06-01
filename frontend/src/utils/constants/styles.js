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
    mode: "light",
    background: {
        default: "#FFF"
    },
    primary: {
      main: "#000"
    },
    secondary: {
      main: "#404EED"
    },
    secondary_b: {
      main: "#000"
    }
  }
})
const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
    background: {
        default: "#FFF"
    },
    primary: {
      main: "#000"
    },
    secondary: {
      main: "#404EED"
    }
  }
})

export { darkTheme, lightTheme }