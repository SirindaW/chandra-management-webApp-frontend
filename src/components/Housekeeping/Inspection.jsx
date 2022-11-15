import React from "react";
import {filterSelect, tableHeaderList } from "../../constants/text";
import { Button } from "@mui/material";

const InspDataMockup = [
    {
      room: "SUP(1)",
      type: "SUP",
      condition: "clean",
      roomStatus: "vacant",
      arrivalData: "10/22/2022",
      departureDate: "10/25/2022",
      frontdeskStatus: "Ckeck-in",
      assignedTo: "Susy",
      donotDisturb: "false",
      comments: ["Lovely room"],
    },
    {
      room: "SUP(1)",
      type: "SUP",
      condition: "clean",
      roomStatus: "vacant",
      arrivalData: "10/22/2022",
      departureDate: "10/25/2022",
      frontdeskStatus: "Ckeck-in",
      assignedTo: "Susy",
      donotDisturb: "false",
      comments: ["Lovely room"],
    },
    {
      room: "SUP(1)",
      type: "SUP",
      condition: "clean",
      roomStatus: "vacant",
      arrivalData: "10/22/2022",
      departureDate: "10/25/2022",
      frontdeskStatus: "Ckeck-in",
      assignedTo: "Susy",
      donotDisturb: "false",
      comments: ["Lovely room"],
    }
  ];

const Inspection = () => {

  return (
    <>
      <div class="flex flex-col m-[2rem] rounded-[8px] bg-[#D9D9D9] border-[1px] border-primaryfade shadow-lg">
        <div class="p-[1rem] font-[15px] uppercase">Filter</div>
        <div class="p-[1rem] flex gap-[1rem] bg-white">
          {filterSelect.map((f) => (
            <div key={f.label}>
              <label for={f.label} class="block mb-2 text-sm font-medium ">
                {f.label}
              </label>
              <select
                id={f.label}
                class="bg-gray-50 border focus:ring-blue-500 focus:border-blue-500 text-sm rounded-lg block w-full p-2.5 "
              >
                {f.options.map((o, idx) => (
                  <option value={o}>{o}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <div class="flex justify-end items-center p-[0.5rem] gap-[1rem]">
          <Button variant="contained">Apply</Button>
          <Button variant="contained">Clear</Button>
        </div>
      </div>

      <div class="flex flex-col justify-start item mx-[2rem] bg-secondary rounded-[8px] min-h-[588px] border border-[1px] border-primaryfade shadow-lg mb-[110px]">
        <div class="font-extrabold text-[20px] p-[1rem] text-white">
          Inspection
        </div>
        <div class="w-full h-full flex-1 bg-white">
          <table class="w-full table-auto">
            <thead className="h-[47px] bg-[#D9D9D9]">
              <tr>
                {tableHeaderList.map((header, idx) => (
                  <th
                    class={
                      idx !== tableHeaderList.length - 1
                        ? "border-r border-r-[1px] border-r-[#9A9A9A]"
                        : ""
                    }
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {InspDataMockup.map((data) => (
                <tr>
                  <th class="h-[65px]">{data.room}</th>
                  <th class="h-[65px]">{data.condition}</th>
                  <th class="h-[65px]">{data.roomStatus}</th>
                  <th class="h-[65px]">{data.type}</th>
                  <th class="h-[65px]">{data.arrivalData}</th>
                  <th class="h-[65px]">{data.departureDate}</th>
                  <th class="h-[65px]">{data.frontdeskStatus}</th>
                  <th class="h-[65px]">{data.assignedTo}</th>
                  <th class="h-[65px]">{data.donotDisturb}</th>
                  <th class="h-[65px]">comments</th>
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
