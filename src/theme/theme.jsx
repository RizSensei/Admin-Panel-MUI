import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, //0-599px //mobile
      sm: 600, //600px - 899px //tablet
      md: 900, //900px //tablet
      lg: 1200, //desktop
      xl: 1536,
    },
  },

  palette:{
    primary: {
      main: '#343a40',
    },
    secondary: {
      main: '#f3f0f9',
    },
  },
});

export default theme;
