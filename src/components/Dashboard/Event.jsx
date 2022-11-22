import React, { useState } from 'react';
import { TfiReload } from 'react-icons/tfi';
import { AiFillPrinter, AiOutlineSearch } from 'react-icons/ai';
import { Button, TextField, InputAdornment } from '@mui/material';
import EventTable from './EventTable';

const Event = () => {
   const [inputText, setInputText] = useState('');
   const handleSearch = (e) => {
      e.preventDefault();
      setInputText('');
   };

   return (
      <div className="flex flex-col flex-1 h-[500px] bg-secondary rounded-lg shadow-xl overflow-y-auto">
         <div className="p-2 text-[#fff] text-[18px] font-bold flex justify-between items-center">
            <div>RESERVATION</div>
            <div className="flex gap-4">
               <div className="font-extrabold ">
                  <TfiReload />
               </div>
               <div className="font-extrabold ">
                  <AiFillPrinter />
               </div>
            </div>
         </div>
         <div className="flex-1 bg-white p-2">
            <div className="border-b w-full border-b-lightGray gap-4 mt-5 flex justify-end items-center mb-2">
               <div className="mb-2">
                  <form onSubmit={handleSearch}>
                     <TextField
                        variant="standard"
                        placeholder="Guest Name"
                        value={inputText}
                        onChange={(e) => {
                           setInputText(e.target.value);
                        }}
                        InputProps={{
                           endAdornment: (
                              <InputAdornment position="end">
                                 <AiOutlineSearch />
                              </InputAdornment>
                           ),
                        }}
                     />
                  </form>
               </div>
            </div>
            <EventTable data={[]}/>
         </div>
      </div>
   );
};

export default Event;
