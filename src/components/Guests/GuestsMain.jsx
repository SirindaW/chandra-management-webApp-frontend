import React from 'react';
// import React , {useState} from 'react';
// import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import FilterBox from '../Filterbox/FilterBox.jsx';
import GreyBox from './GreyBox.jsx';
import {filterSelect_Guest} from "../../constants/text";
import {tableHeaderList_specific_Guest_detail,guestsDataMockUp}  from "../../constants/text";


// import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
const GuestsMain = () => {
  // const [filterSelected,setFilterSelected] = useState(
  //   {
  //     guestType: [],
  //     country: [],
  //     guestStatus : [],
  //     checkInDate: "",
  //     checkOutDate: ""
  //   }
  // );
  // const handleGuestTypeSelected = (newFilter)=>{
  //   setFilterSelected({...filterSelected, guestType: newFilter})
  // }

  // const handleCountrySelected = (newFilter)=>{
  //   setFilterSelected({...filterSelected, country: newFilter})
  // }
  
  // const handleGuestStatusSelected = (newFilter)=>{
  //   setFilterSelected({...filterSelected, guestStatus: newFilter})
  // }

  // const handleCheckInDateSelected = (newFilter)=>{
  //   setFilterSelected({...filterSelected, checkInDate: newFilter})
  // }

  // const handleCheckOutDateSelected = (newFilter)=>{
  //   setFilterSelected({...filterSelected, checkOutDate: newFilter})
  // }

  // const updateFunctions = [handleGuestTypeSelected,handleCountrySelected,handleGuestStatusSelected,handleCheckInDateSelected,handleCheckOutDateSelected]

  return (
    <div>
      <FilterBox filter = {filterSelect_Guest} />
      <div className="flex flex-col justify-start item mx-[2rem] rounded-[8px] min-h-[588px] border border-[1px] border-primaryfade shadow-lg mb-[110px]">
        <div className="font-extrabold text-[20px] p-[1rem] bg-secondary  text-white">
          Inspection
        </div>
        <GreyBox parentName="GuestsMain" header ={tableHeaderList_specific_Guest_detail} data = {guestsDataMockUp} />

      </div>
    </div>
  );
};
export default GuestsMain;

