import { useState } from 'react';
import FilterBox from '../Filterbox/FilterBox.jsx';
import GreyBox from './GreyBox.jsx';
import { tableHeaderList_Event } from '../../constants/text';
import { useSelector } from 'react-redux';
import { getEvents } from '../../actions/events';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Event = () => {
   const dispatch = useDispatch();
   const { events } = useSelector((state) => state.events);
   console.log(events);
   const initialState = { type: [], country: [], status: [], checkIn: '', checkOut: '' };
   useEffect(() => {
      dispatch(getEvents());
   }, []);

   const [filter, setFilter] = useState(initialState);
   return (
      <div className="w-full px-20">
         <FilterBox filter={filter} setFilter={setFilter} initialState={initialState} />
         <div className="flex flex-col justify-start item rounded-lg min-h-[588px] border border-[1px] border-primaryfade shadow-lg mb-[110px]">
            <div className="font-extrabold text-[20px] p-[1rem] bg-secondary rounded-t-lg  text-white">Event</div>
            <GreyBox parentName="GuestsMain" header={tableHeaderList_Event} data={events} />
         </div>
      </div>
   );
};

export default Event;
