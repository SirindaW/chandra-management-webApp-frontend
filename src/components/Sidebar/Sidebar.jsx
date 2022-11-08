import React from 'react'
import { NavLink } from 'react-router-dom';

import styles from './styles.js';
import { menu } from '../../constants/text';
import { logo } from '../../images';

const Sidebar = ({ activeMenu, setActiveMenu }) => {

    const handleCloseSideBar = () => {
      if (activeMenu && window.innerWidth <= 900) {
        setActiveMenu(false);
      }
    };
  
    return (
        <div className="transition-all h-screen w-[300px] flex-none sidebar bg-primary md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 pt-5 caret-transparent">
            <img src={logo} alt="chandra logo" className='mx-auto mb-6' />
            {menu.map((item) => { console.log(item.path); return(
                <div key={item.title}>
                    <NavLink
                        end
                        to={item.path}
                        onClick={handleCloseSideBar}
                        className={({ isActive }) => (isActive ? styles.activeLink : styles.normalLink)}
                    >
                        {item.title}
                    </NavLink>
                </div>
            )})}
        </div>
    )
}

export default Sidebar