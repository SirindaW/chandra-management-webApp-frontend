import React from 'react'
import { NavLink } from 'react-router-dom';

import { links } from '../../images';

const Sidebar = ({ activeMenu, setActiveMenu }) => {

    const handleCloseSideBar = () => {
      if (activeMenu !== undefined && window.innerWidth <= 900) {
        setActiveMenu(false);
      }
    };

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2 rounded-lg m-2 transition-all bg-white text-primary';
    const normalLink = 'flex items-center gap-5 pl-4 pt-2 pb-2 rounded-lg m-2 transition-all text-gray-200 hover:bg-white hover:text-primary ';
  
    return (
        <div className="transition-all h-screen w-[340px] bg-primary md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
            {links.map((item) => (
                <div key={item.title}>
                    <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                    {item.title}
                    </p>
                    {item.links.map((link) => (
                    <NavLink
                        to={`/${link.name}`}
                        key={link.name}
                        onClick={handleCloseSideBar}
                        className={({ isActive }) => (isActive ? activeLink : normalLink)}
                    >
                        {link.icon}
                        <span className="capitalize">{link.name}</span>
                    </NavLink>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Sidebar