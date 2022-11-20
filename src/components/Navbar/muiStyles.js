import { THEME } from '../../muitheme';

const styles = {
   userInfo: {
      height: '70%',
      border: '0px',
      backgroundColor: 'white',
      color: 'black',
      borderRadius: '100px',
      '&:hover': {
         backgroundColor: '#cccc',
      },
   },
   navItem: {
      height: '100%',
      borderRadius: '20% 20% 0% 0%',
   },

   activeNavItem: {
      height: '100%',
      backgroundColor: THEME.palette.secondary.main,
      borderRadius: '20% 20% 0% 0%',
      '&:hover': {
         backgroundColor: THEME.palette.secondary.fade,
      },
   },
};

export default styles;
