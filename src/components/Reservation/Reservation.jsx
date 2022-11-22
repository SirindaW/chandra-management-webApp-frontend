import React, { useState } from 'react';
import { FilterBox } from '../Filterbox/FilterBox.jsx';
import { tableHeaderList_Accommodation, guestsDetailDataMockUp } from '../../constants/text';
import AddNewReservation from './AddNewReservation.jsx';
import Table from './Table.jsx';
import Button from '@mui/material/Button';

const Reservation = () => {
   const initialState = { type: [], country: [], status: [], checkIn: '', checkOut: '' };

   const [isAdding, setIsAdding] = useState(false);
   const [filter, setFilter] = useState(initialState);

   const handleAdd = () => {
      setIsAdding(true);
   };
   const handleCancel = () => {
      setIsAdding(false);
   };

   return (
      <div className="py-10 px-20 w-full">
         {!isAdding && (
            <>
               <div className="mt-5 flex flex-row justify-end">
                  <Button variant="contained" sx={{ backgroundColor: '#27BE5A' }} onClick={handleAdd}>
                     CREATE NEW RESERVATION
                  </Button>
               </div>
               <FilterBox filter={filter} setFilter={setFilter} initialState={initialState} />
               <Table tableName="Reservation" header={tableHeaderList_Accommodation} data={guestsDetailDataMockUp} />
            </>
         )}

         {isAdding && (
            <>
               <div className="mt-5 flex flex-row justify-end mr-16">
                  <Button variant="contained" sx={{ backgroundColor: '#B2BEB5' }} onClick={handleCancel}>
                     CANCEL
                  </Button>
               </div>
               <AddNewReservation setIsAdding={setIsAdding} />
            </>
         )}
      </div>
   );
};
export default Reservation;
