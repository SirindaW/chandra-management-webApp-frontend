import React, { useState, useRef, Fragment } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { guestDetails, navList_specific_guest, tableHeaderList_Accommodation, tableHeaderList_specific_Guest_detail, guestsDetailDataMockUp, guestMainDataMockUp } from '../../constants/text';
import GreyBox from './GreyBox';
import NoteDetail from './NoteDetail';

function SplitButton({ setGuestStatus }) {
   const guestStatusList = ['Confirmed', 'Cancelled', 'Stayover', 'Checked Out'];
   const [open, setOpen] = useState(false);
   const anchorRef = useRef(null);
   const [selectedIndex, setSelectedIndex] = React.useState(0);

   const handleClick = () => {
      console.info(`You clicked ${guestStatusList[selectedIndex]}`);
   };

   const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setOpen(false);
      setGuestStatus(`${guestStatusList[index]}`);
   };

   const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
   };

   const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
         return;
      }

      setOpen(false);
   };

   return (
      <Fragment>
         <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
            <Button onClick={handleClick}>SELECT GUEST STATUS</Button>
            <Button
               size="small"
               aria-controls={open ? 'split-button-menu' : undefined}
               aria-expanded={open ? 'true' : undefined}
               aria-label="select merge strategy"
               aria-haspopup="menu"
               onClick={handleToggle}
            >
               <ArrowDropDownIcon />
            </Button>
         </ButtonGroup>
         <Popper
            sx={{
               zIndex: 1,
            }}
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
         >
            {({ TransitionProps, placement }) => (
               <Grow
                  {...TransitionProps}
                  style={{
                     transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
               >
                  <Paper>
                     <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu" autoFocusItem>
                           {guestStatusList.map((option, index) => (
                              <MenuItem key={option} selected={index === selectedIndex} onClick={(event) => handleMenuItemClick(event, index)}>
                                 {option}
                              </MenuItem>
                           ))}
                        </MenuList>
                     </ClickAwayListener>
                  </Paper>
               </Grow>
            )}
         </Popper>
      </Fragment>
   );
}

const GuestsDetail = ({ guestId }) => {
   const guest = guestMainDataMockUp.filter((g) => g._id === guestId)[0];
   console.log(guest);
   const [page, setPage] = useState('Accommodation');
   return (
      <>
         <div className="flex md:flex-row xs:flex-col justify-between  py-2 my-5 border-t-2 border-primary/20">
            <div className="ml-10">
               <h1 className="text-lg uppercase font-bold">
                  {guest.fname} {guest.lname}
               </h1>
               <h3 className="text-m text-slate-700">#{guest._id}</h3>
            </div>
            <div className="mr-10 flex lg:flex-col lg:justify-center">
               <SplitButton />
            </div>
         </div>

         <div className="bg-[#D9D9D9] shadow-lg flex flex-row justify-between">
            <div className="flex lg:flex-row p-5">
               {guestDetails.map((item, index) => (
                  <div className="flex flex-col mx-8" key={index}>
                     <h1 className="text-[#858080]">{item.title}</h1>
                     <br />
                     <h3>{item.value}</h3>
                  </div>
               ))}
            </div>
            <div className="flex flex-col justify-center mr-10">
               <span>Grand total : THB 3,180</span>
            </div>
         </div>

         <div className="flex justify-start items-center w-full h-[4rem] text-xl gap-[2rem] border-b border-b-1 border-b-[#A7A5A5]">
            {navList_specific_guest.map((p, idx) => (
               <div key={idx} className={`w-fit h-full pt-[1rem] px-[0.5rem] ml-[1rem] ${page === p ? 'border-b-[5px] border-b-[#D4990D]' : ''} transition-all`}>
                  <Button
                     sx={{
                        fontSize: '20px',
                        fontWeight: '400',
                        width: '100%',
                     }}
                     onClick={() => {
                        setPage(p);
                     }}
                  >
                     {p}
                  </Button>
               </div>
            ))}
         </div>
         {page === 'Accommodation' ? (
            <GreyBox parentName="Accommodation" header={tableHeaderList_Accommodation} data={guestsDetailDataMockUp} />
         ) : page === 'Guest Datails' ? (
            <GreyBox parentName="Guest Datails" header={tableHeaderList_specific_Guest_detail} data={guestMainDataMockUp} />
         ) : (
            <NoteDetail />
         )}

         {/* <button className={`${styles.button} hover:text-secondary`}
              onClick={()=>setGuestName(dummyData)}>change name
            </button> */}
      </>
   );
};
export default GuestsDetail;
