import { createTheme } from '@mui/material/styles';

export const THEME = createTheme({
    typography: {
     "fontFamily": `'Poppins', sans-serif`,
     "fontWeightLight": 300,
     "fontWeightRegular": 400,
     "fontWeightMedium": 500
    },
    palette: {
        primary: {
          main: '#484848',
        },
        secondary: {
          main: '#D4990D',
        },
      },
 });