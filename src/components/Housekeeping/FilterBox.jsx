import React from "react";
import { Button } from "@mui/material";
import { MultiSelect } from "react-multi-select-component";

const FilterBox = ({ states }) => {
  return (
    /* Filter box*/
    <div className="flex flex-col m-[2rem] rounded-[8px] bg-[#D9D9D9] border-[1px] border-primaryfade shadow-lg">
      {/* Header */}
      <div className="p-[1rem] font-[15px] uppercase">Filter</div>

      {/* Filter options box */}
      <div className="p-[1rem] flex gap-[1rem] bg-white">
        {filterSelect.map((select, index) => (
          <div key={index}>
            <div>{select.label}</div>
            <MultiSelect
              className="w-[180px]"
              options={select.options}
              value={states[index].state}
              onChange={states[index].setState}
              labelledBy={select.label}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end items-center p-[0.5rem] gap-[1rem]">
        <Button variant="contained">Apply</Button>
        <Button variant="contained">Clear</Button>
      </div>
    </div>
  );
};

export default FilterBox;
