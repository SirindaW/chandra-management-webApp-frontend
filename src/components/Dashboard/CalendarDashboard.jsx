import React, { useState } from "react";
import { Button } from "@mui/material";
import CalendarTable from "./CalendarTable";
import moment from "moment";
import { Calendar_DB_Data } from "../../constants/text"
import AccomGraph from "./AccomGraph";

const defaultPageClicked = {
  accom : false,
  avail : false,
  currentPage : 'accom'
}

const pages = [
  {
    show: "Accommodations Booked + Blocked",
    value: "accom"
  },
  {
    show: "Available",
    value: "avail",
  }
]

const CalendarDashboard = () => {

  const today = moment();
  const [isPageClicked,setIsPageClicked] = useState({...defaultPageClicked, accom: true});
  const [dateList, setDateList] = useState(
    [...Array(14)].map((d, index) => moment(today).add(index, "days"))
  );

  const handlePageClick = (page) => {
    setIsPageClicked({
      ...defaultPageClicked, [page]: true, currentPage:page
    })
  }

  return (
    <div className="mb-16 flex flex-col justify-start items-start w-full h-[650px] overflow-hidden bg-secondary rounded-xl border border-lightGray shadow-xl">
      <div className="p-2">14 DAY OUTLOOK</div>
      <div className="flex-1 bg-white flex flex-col w-full h-full">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center p-4 gap-8">
            <div>
              <div className="text-[32px] text-secondary">{"23.54 %"}</div>
              <div>{"14 DAY OCCUPANCY"}</div>
            </div>
            <div>
              <div className="text-[32px] text-secondary">{"23.54 %"}</div>
              <div>{"14 DAY OCCUPANCY"}</div>
            </div>
          </div>

          {isPageClicked.avail && <div className="flex justify-start p-4">MonthPicker</div>}
        </div>

        <div className="flex justify-start items-center mx-4 border-b-[3px] border-b-lightGray">
          {pages.map((p)=>(
            <div key={p.show} className={`transition-all border-b-[4px] ${p.value === isPageClicked.currentPage ? 'border-b-secondary': 'border-b-white'}`}>
              <Button onClick={()=> handlePageClick(p.value)}>{p.show}</Button>
            </div>
          ))}
        </div>
        {isPageClicked.accom && <AccomGraph/>}
        {isPageClicked.avail && <CalendarTable dateList={dateList} data={Calendar_DB_Data} page={isPageClicked}/>}
      </div>
    </div>
  );
};

export default CalendarDashboard;
