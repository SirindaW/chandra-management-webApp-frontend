import React from "react";
import {filterSelect, tableHeaderList, InspDataMockup } from "../../constants/text";
import { Button } from "@mui/material";
import FilterBox from "./FilterBox";
import { useState } from "react";

const Inspection = () => {

  const [filterSelected,setFilterSelected] = useState(
    {
      roomtype: [],
      roomStatus: [],
      roomCondition : [],
      frontdeskStatus: [],
      assignedTo: [],
    }
  );

  console.log(filterSelected)

  const handleRoomTypeSelected = (newFilter)=>{
    setFilterSelected({...filterSelected, roomtype: newFilter})
  }

  const handleRoomStatusSelected = (newFilter)=>{
    setFilterSelected({...filterSelected, roomStatus: newFilter})
  }
  
  const handleRoomConditionSelected = (newFilter)=>{
    setFilterSelected({...filterSelected, roomCondition: newFilter})
  }

  const handleFrontdeskStatusSelected = (newFilter)=>{
    setFilterSelected({...filterSelected, frontdeskStatus: newFilter})
  }

  const handleAssignedToSelected = (newFilter)=>{
    setFilterSelected({...filterSelected, assignedTo: newFilter})
  }

  const updateFunctions = [handleRoomTypeSelected,handleRoomStatusSelected,handleRoomConditionSelected,handleFrontdeskStatusSelected,handleAssignedToSelected]

  return (
    <>
      <FilterBox filters = {filterSelect} updateFunctions={updateFunctions}/>
      

      <div className="flex flex-col justify-start item mx-[2rem] bg-secondary rounded-[8px] min-h-[588px] border border-[1px] border-primaryfade shadow-lg mb-[110px]">
        <div className="font-extrabold text-[20px] p-[1rem] text-white">
          Inspection
        </div>
        <div className="w-full h-full flex-1 bg-white">
          <table className="w-full table-auto">
            <thead className="h-[47px] bg-[#D9D9D9]">
              <tr>
                {tableHeaderList.map((header, idx) => (
                  <th
                    key={idx}
                    className={
                      idx !== tableHeaderList.length - 1
                        && "border-r border-r-[1px] border-r-[#9A9A9A]"
                    }
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {InspDataMockup.map((data,idx) => (
                <tr key={idx} className="text-center">
                  <td className="h-[65px]">{data.room}</td>
                  <td className="h-[65px]">{data.condition}</td>
                  <td className="h-[65px]">{data.roomStatus}</td>
                  <td className="h-[65px]">{data.type}</td>
                  <td className="h-[65px]">{data.arrivalData}</td>
                  <td className="h-[65px]">{data.departureDate}</td>
                  <td className="h-[65px]">{data.frontdeskStatus}</td>
                  <td className="h-[65px]">{data.assignedTo}</td>
                  <td className="h-[65px]">{data.donotDisturb}</td>
                  <td className="h-[65px]">comments</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Inspection;
