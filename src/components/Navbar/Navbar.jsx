import React, { useEffect } from 'react';
// import { Button } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { AiOutlineMenu } from 'react-icons/ai';
// import muiStyles from "./muiStyles";
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE, SWITCH } from '../../constants/actionTypes.js';
import { logout } from '../../actions/auth.js';
import { useNavigate } from 'react-router-dom';

// import styles from "./styles";

const Navbar = () => {
   const navigate = useNavigate();
   const user = JSON.parse(localStorage.getItem('user')) || '';
   const { isMenu } = useSelector((state) => state.menu);

   const dispatch = useDispatch();
   const today = new Date();

   const handleLogout = async () => {
      await dispatch(logout(navigate));
   };

   useEffect(() => {
      if (window.innerWidth <= 900) {
         dispatch({ type: CLOSE });
      }
   }, [window.innerWidth]);

   return (
      <div className="w-full flex items-center justify-between transition-all h-[100px] px-7 caret-transparent shadow-md">
         <div className="flex items-center">
            <div
               onClick={() => dispatch({ type: SWITCH })}
               className="flex items-center justify-center text-white font-bold cursor-pointer rounded-xl w-[45px] h-[45px] bg-secondary hover:bg-primary transition-all duration-300"
            >
               {isMenu ? <ChevronLeftIcon fontSize="large" /> : <AiOutlineMenu size={20} />}
            </div>
            <div className="text-2xl font-bold ml-5">{today.toDateString()}</div>
         </div>
         <div>
            <span className="font-bold text-xl mr-8">
               {user?.fname} {user?.lname}
            </span>
            <button onClick={handleLogout} className="bg-secondary rounded-xl px-5 py-2 text-white font-bold shadow-md hover:bg-primary/90 transition-all">
               LOG OUT
            </button>
         </div>
      </div>
   );
};

export default Navbar;
