import React , {useState} from 'react';
import FilterBox from '../Filterbox/FilterBox.jsx';
import GreyBox from './GreyBox.jsx';
import {filterSelect_Guest} from "../../constants/text";
import {tableHeaderList_specific_Guest_detail,guestMainDataMockUp}  from "../../constants/text";


// import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
const GuestsMain = () => {
  const [filter1, setFilter1] = useState([]); // new or old guests
  const [filter2, setFilter2] = useState([]); // home country of guests
  const [filter3, setFilter3] = useState([]); // guest Status
  const [filter4, setFilter4] = useState(); // guest check in date
  const [filter5, setFilter5] = useState(); // guest check out date


  const handle_filter1 = (newFilter) => {
    setFilter1(newFilter);
  };
  const handle_filter2 = (newFilter) => {
    setFilter2(newFilter);
  };
  const handle_filter3 = (newFilter) => {
    setFilter3(newFilter);
  };
  const handle_filter4 = (newFilter) => {
    setFilter4(newFilter);
  };
  const handle_filter5 = (newFilter) => {
    setFilter5(newFilter);
  };

  const handleClear = () => {
    setFilter1([]);
    setFilter2([]);
    setFilter3([]);
    setFilter4();
    setFilter5();
  }

  const statesList = [
      { state: filter1, setState: handle_filter1 },
      { state: filter2, setState: handle_filter2 },
      { state: filter3, setState: handle_filter3 },
      { state: filter4, setState: handle_filter4 },
      { state: filter5, setState: handle_filter5 },
  ];
  const textStates = [
    { state: filter1, setState: handle_filter1 },
    { state: filter2, setState: handle_filter2 },
    { state: filter3, setState: handle_filter3 }
  ];
  const dateStates = [
    { state: filter4, setState: handle_filter4 },
    { state: filter5, setState: handle_filter5 },
  ];

  return (
    <div>
      <FilterBox filter = {filterSelect_Guest}  textStates = {textStates}  dateStates = {dateStates} clear = {handleClear} />
      
      <div className="flex flex-col justify-start item mx-[2rem] rounded-lg min-h-[588px] border border-[1px] border-primaryfade shadow-lg mb-[110px]">
        <div className="font-extrabold text-[20px] p-[1rem] bg-secondary rounded-t-lg  text-white">
        Reservation
        </div>
        <GreyBox parentName="GuestsMain" header ={tableHeaderList_specific_Guest_detail} data = {guestMainDataMockUp} />

      </div>
    </div>
  );
};
export default GuestsMain;

