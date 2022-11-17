import React from "react";
import { Button } from "@mui/material";

import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const MultiInputSelect = ({select, index,onUpdate}) => {
  const [selected, setSelected] = useState([]);

  const handleUpdate = (val)=>{
    onUpdate(val);
    setSelected(val)
  }

  return (
    <div>
      <div>{select.label}</div>
      <MultiSelect
        className="w-[180px]"
        options={select.options}
        value={selected}
        onChange={handleUpdate}
        labelledBy={select.label}
      />
    </div>
  );
};

const FilterBox = ({filters,updateFunctions}) => {

  return (
    /* Filter box*/
    <div className="flex flex-col m-[2rem] rounded-[8px] bg-[#D9D9D9] border-[1px] border-primaryfade shadow-lg">
      {/* Header */}
      <div className="p-[1rem] font-[15px] uppercase">Filter</div>

      {/* Filter options box */}
      <div className="p-[1rem] flex gap-[1rem] bg-white">
        {filters.map((select,index)=> <MultiInputSelect onUpdate={updateFunctions[index]}  select={select} index={index}/>)}
      </div>

      <div className="flex justify-end items-center p-[0.5rem] gap-[1rem]">
        <Button variant="contained">Apply</Button>
        <Button variant="contained">Clear</Button>
      </div>
    </div>
  );
};

export default FilterBox;
