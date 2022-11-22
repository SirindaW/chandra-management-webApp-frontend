import React from 'react';
import { Button } from '@mui/material';
import { MultiSelect } from 'react-multi-select-component';
import { filterSelect } from '../../constants/text';
import { CircularProgress } from '@mui/material';

const FilterBox = ({ states, hk, isLoading, onApply, onClear }) => {

   const AS_OPTIONS = {
      label: 'Assigned to',
      options: hk.map((h) => {
         return { label: h.fname, value: h._id };
      }),
   };

   return (
      /* Filter box*/
      <div className="flex flex-col min-h-[207px] m-[2rem] rounded-[8px] bg-[#D9D9D9] border-[1px] border-primaryfade shadow-lg">
         <div className="p-[1rem] font-[15px] uppercase flex-1">Filter</div>
         {isLoading && <CircularProgress />}
         {!isLoading && (
            <div className="p-[1rem] flex gap-[1rem] bg-white">
               {filterSelect.map((select, index) => (
                  <div key={select.label + index}>
                     <div>{select.label}</div>
                     <MultiSelect className="w-[180px]" options={select.options} value={states[index].state} onChange={states[index].setState} labelledBy={select.label} />
                  </div>
               ))}
               <div>
                  <div className="capitalized">{AS_OPTIONS.label}</div>
                  <MultiSelect className="w-[180px]" options={AS_OPTIONS.options} value={states.at(-1).state} onChange={states.at(-1).setState} labelledBy={AS_OPTIONS.label} />
               </div>
            </div>
         )}

         <div className="flex justify-end items-center p-[0.5rem] gap-[1rem]">
            <Button variant="contained" onClick={onApply}>Apply</Button>
            <Button variant="contained" onClick={onClear}>Clear</Button>
         </div>
      </div>
   );
};

export default FilterBox;
