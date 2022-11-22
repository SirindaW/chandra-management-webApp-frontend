import React, { useEffect, useState } from 'react';
import FilterBox from '../Filterbox/FilterBox.jsx';
import GreyBox from './GreyBox.jsx';
import { tableHeaderList_specific_Guest_detail, guestMainDataMockUp } from '../../constants/text';
import { useDispatch, useSelector } from 'react-redux';
import { getGuests } from '../../actions/guests.js';

// import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
const GuestsMain = ({ setPage, setGuestId }) => {
   const dispatch = useDispatch();
   const { guests } = useSelector((state) => state.guests);
   const initialState = { type: [], country: [], status: [], checkIn: '', checkOut: '' };

   const [filter, setFilter] = useState(initialState);

   useEffect(() => {
      dispatch(getGuests());
   }, []);
   return (
      <div className="w-full px-20">
         <FilterBox filter={filter} setFilter={setFilter} initialState={initialState} />

         <div className="flex flex-col justify-start item rounded-lg min-h-[588px] border border-[1px] border-primaryfade shadow-lg mb-[110px]">
            <div className="font-extrabold text-[20px] p-[1rem] bg-secondary rounded-t-lg  text-white">Guests</div>
            <GreyBox setGuestId={setGuestId} setPage={setPage} parentName="GuestsMain" header={tableHeaderList_specific_Guest_detail} data={guests} />
         </div>
      </div>
   );
};
export default GuestsMain;
