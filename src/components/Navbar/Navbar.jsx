import React from "react";
import styles from "./styles";
import homeicon from "../../images/nav/homeIcon.svg";
import contentsicon from "../../images/nav/ContentsIcon.svg";
import categoriesicon from "../../images/nav/CategoriesIcon.svg";
import settingsicon from "../../images/nav/Settings.svg";
import { Button } from "@mui/material";
import muiStyles from "./muiStyles";
import { useDispatch, useSelector } from "react-redux";
import { select_page } from "../../reducers/currentpage";

const Navbar = () => {
  const currentpage = useSelector((state) => state.currentpage.value);
  const dispatch = useDispatch();
  console.log(currentpage === 'home')

  return (
    <div className="flex justify-between items-center absolute top-0 left-0 sticky w-full h-[55px] sm:w-auto bg-primary">
      <div className={`${styles.flextCenter} h-full`}>
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
      </div>

      {/* Right Side / User */}
      <div className={`${styles.flextCenter} h-full`}>
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
