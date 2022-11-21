import React , {useState} from 'react';
import {FilterBox} from '../Filterbox/FilterBox.jsx';
import {filterSelect_Guest,tableHeaderList_Accommodation,guestsDetailDataMockUp} from "../../constants/text";
import AddNewReservation from './AddNewReservation.jsx';
import Table from './Table.jsx';
import Button from '@mui/material/Button';

const Reservation = () => {
   const [filter1, setFilter1] = useState([]); // new or old guests
   const [filter2, setFilter2] = useState([]); // home country of guests
   const [filter3, setFilter3] = useState([]); // guest Status
   const [filter4, setFilter4] = useState(); // guest check in date
   const [filter5, setFilter5] = useState(); // guest check out date

  const [isAdding, setIsAdding] = useState(false); 

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

  const handleAdd = () => {
    setIsAdding(true);
  }
  const handleCancel = () => {
    setIsAdding(false);
  }


  // const statesList = [
  //     { state: filter1, setState: handle_filter1 },
  //     { state: filter2, setState: handle_filter2 },
  //     { state: filter3, setState: handle_filter3 },
  //     { state: filter4, setState: handle_filter4 },
  //     { state: filter5, setState: handle_filter5 },
  // ];
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
    <div className='py-10'>

      {(!(isAdding))&&(
        <>
          <div className='mt-5 flex flex-row justify-end mr-16'>
            <Button variant="contained"  sx={{backgroundColor: '#27BE5A'}} onClick={handleAdd} >CREATE NEW RESERVATION</Button> 
          </div>
          <FilterBox filter = {filterSelect_Guest}   textStates = {textStates}  dateStates = {dateStates} clear = {handleClear}  />
          <Table tableName="Reservation" header={tableHeaderList_Accommodation} data={guestsDetailDataMockUp}/>
        </>
      )}
      
      {(isAdding)&&(
        <>
          <div className='mt-5 flex flex-row justify-end mr-16'>
            <Button variant="contained"  sx={{backgroundColor: '#B2BEB5'}} onClick={handleCancel}>CANCEL</Button>
          </div>
          <AddNewReservation isAdding={isAdding} setIsAdding = {setIsAdding}/>
          
          
        </>
      )}
      
    </div>
  )
  }
export default Reservation;
