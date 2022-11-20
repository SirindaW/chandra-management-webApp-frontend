import { createTheme } from '@mui/material/styles';

export const THEME = createTheme({
   typography: {
      fontFamily: `'Poppins', sans-serif`,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
   },
   palette: {
      primary: {
         main: '#262626',
      },
      secondary: {
         main: '#D4990D',
      },
      white: {
         main: '#FFFFFF',
      },
      lightGray: {
         main: '#D9D9D9',
      },
      lightGreen: {
         main: '#27BE5A',
         contrastText: '#fff',
      },
   },
   secondary: {
      main: '#D4990D',
   },
   white: {
      main: '#FFFFFF',
   },
});
