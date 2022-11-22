import React, { useState } from 'react';
import { FilterBox } from '../Filterbox/FilterBox.jsx';
import { tableHeaderList_Accommodation, guestsDetailDataMockUp } from '../../constants/text';
import AddNewReservation from './AddNewReservation.jsx';
import Table from './Table.jsx';
import Button from '@mui/material/Button';

const Reservation = () => {
   const initialFilterState = { type: [], country: [], status: [], checkIn: '', checkOut: '' };
   const initialState = {
      prefix: '',
      fname: '',
      lname: '',
      email: '',
      phone: '',
      address: '',
      addition: '',
      guest: { adult: 0, child: 0 },
      checkIn_date: '',
      checkOut_date: '',
      breakfast: null,
      roomType: { type: '', title: '', price: 0 },
   };

   const [isAdding, setIsAdding] = useState(false);
   const [filter, setFilter] = useState(initialFilterState);
   const [bookingData, setBookingData] = useState(initialState);

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
               <FilterBox filter={filter} setFilter={setFilter} initialState={initialFilterState} />
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
               <AddNewReservation setIsAdding={setIsAdding} bookingData={bookingData} setBookingData={setBookingData} />
            </>
         )}
      </div>
   );
};
export default Reservation;
