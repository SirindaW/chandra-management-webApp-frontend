import React, { useEffect } from "react";
import { Button } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { AiOutlineMenu } from 'react-icons/ai';
import muiStyles from "./muiStyles";
import { useDispatch, useSelector } from "react-redux";

import styles from "./styles";

const Navbar = ({ activeMenu, setActiveMenu }) => {
  const today = new Date();

  useEffect(() => {
    if (window.innerWidth <= 900) {
      setActiveMenu(false);
    }
  }, [window.innerWidth]);

  const handleActiveMenu = () => setActiveMenu((prev) => !prev);

  return (
    <div className={`w-full flex items-center justify-between transition-all h-[100px] px-7 caret-transparent shadow-md ${activeMenu && 'sidebar'}`}>
      <div className="flex items-center">
        <div onClick={handleActiveMenu} className="flex items-center justify-center text-white font-bold cursor-pointer rounded-xl w-[45px] h-[45px] bg-secondary hover:bg-primary transition-all duration-300">
          {activeMenu ? <ChevronLeftIcon fontSize="large" /> : <AiOutlineMenu size={20} />}
        </div>
        <div className="text-2xl font-bold ml-5">{today.toDateString()}</div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
