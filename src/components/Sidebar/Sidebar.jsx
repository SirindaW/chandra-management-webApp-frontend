import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.js';
import { menu } from '../../constants/text';
import { logo } from '../../images';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE } from '../../constants/actionTypes.js';

const Sidebar = () => {
   const { isMenu } = useSelector((state) => state.menu);
   const dispatch = useDispatch();

   const handleCloseSideBar = () => {
      if (isMenu && window.innerWidth <= 900) {
         dispatch({ type: CLOSE });
      }
   };

   return (
      <>
         {isMenu && (
            <div className=" transition-all sticky top-0 h-screen w-[300px] flex-none bg-primary md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 pt-5 caret-transparent">
               <img src={logo} alt="chandra logo" className="mx-auto mb-6" />
               {menu.map((item) => {
                  console.log(item.path);
                  return (
                     <div key={item.title}>
                        <NavLink end to={item.path} onClick={handleCloseSideBar} className={({ isActive }) => (isActive ? styles.activeLink : styles.normalLink)}>
                           {item.title}
                        </NavLink>
                     </div>
                  );
               })}
            </div>
         )}
      </>
   );
};

export default Sidebar;
