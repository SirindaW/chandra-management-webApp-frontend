import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { AiOutlineMenu } from 'react-icons/ai';
import muiStyles from "./muiStyles";
import { useDispatch, useSelector } from "react-redux";

import styles from "./styles";
import homeicon from "../../images/nav/homeIcon.svg";
import contentsicon from "../../images/nav/ContentsIcon.svg";
import categoriesicon from "../../images/nav/CategoriesIcon.svg";
import settingsicon from "../../images/nav/Settings.svg";
import { select_page } from "../../reducers/currentpage";

const Navbar = ({ setActiveMenu }) => {
  // const currentpage = useSelector((state) => state.currentpage.value);
  // const dispatch = useDispatch();
  // console.log(currentpage === 'home')

  useEffect(() => {
    if (window.innerWidth <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [window.innerWidth]);

  const handleActiveMenu = () => setActiveMenu((prev) => !prev);

  return (
    <div className={`flex items-center justify-between w-full h-[55px] bg-primary pr-10 pl-2`}>
      {/* <div className={`${styles.flextCenter} h-full`}>
        <Button
          variant="contained"
          disableElevation
          sx={currentpage === "home" ?  muiStyles.activeNavItem:muiStyles.navItem}
          onClick={()=>dispatch(select_page("home"))}
        >
          <img className={`${styles.icon}`} src={homeicon} alt="homeicon" />
          <p className={`${styles.navTextSize}`}>Home</p>
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={currentpage === "contents" ?  muiStyles.activeNavItem:muiStyles.navItem}
          onClick={()=>dispatch(select_page("contents"))}
        >
          <img className={`${styles.icon}`} src={contentsicon} alt="contentsicon" />
          <p className={`${styles.navTextSize}`}>Contents</p>
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={currentpage === "categories" ?  muiStyles.activeNavItem:muiStyles.navItem}
          onClick={()=>dispatch(select_page("categories"))}
        >
          <img
            className={`${styles.icon}`}
            src={categoriesicon}
            alt="categoriesicon"
          />
          <p className={`${styles.navTextSize}`}>Categories</p>
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={currentpage === "settings" ?  muiStyles.activeNavItem:muiStyles.navItem}
          onClick={()=>dispatch(select_page("settings"))}
        >
          <img className={`${styles.icon}`} src={settingsicon} alt="settingsicon" />
          <p className={`${styles.navTextSize}`}>Settings</p>
        </Button>
      </div> */}

      {/* menu open close */}
      <div>
        <button type="button" onClick={handleActiveMenu} className="rounded-full p-2 hover:bg-secondary transition-all">
          <AiOutlineMenu color='white' size={20} />
        </button>
      </div>

      {/* Right Side / User */}
      <div className={`${styles.flexCenter} h-full`}>
        <Button variant="contained" disableElevation sx={muiStyles.userInfo}>
          <img
            className="w-[30px] h-[30px] rounded-4xl mr-2"
            src="https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png"
            alt="profilepic"
          />
          <div>Name Lastname</div>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
