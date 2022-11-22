import React from 'react';
import ReservationInfo from './ReservationInfo';
import ActivityInfo from './ActivityInfo';
import CalendarDashboard from './CalendarDashboard';

const StatBox = ({ title, number, styleContainer, styleNumber, styleTitle, startAdornment }) => {
   return (
      <div className={`bg-white px-4 py-2 ${styleContainer ? styleContainer : 'w-full h-[100px] border border-lightGray shadow-xl rounded-xl'}`}>
         <div className={`${styleNumber ? styleNumber : 'text-[36px]'}`}> {(startAdornment ? startAdornment : '') + ' ' + number}</div>
         <span className={`${styleTitle ? styleTitle : 'text-[20px]'}`}> {title} </span>
      </div>
   );
};

const Home = () => {
   return (
      <div className="w-full">
         <div className="flex justify-start items-center gap-[4.5rem] mt-8 mx-[9rem]">
            <StatBox title={'ARRIVALS'} number={'11'} />
            <StatBox title={'DEPARTURES'} number={'1'} />
            <StatBox title={'ACCOMMODATIONS BOOKED'} number={'12'} />
         </div>
         <div className="flex justify-center mx-[8rem] gap-[2rem] mt-8">
            <ReservationInfo />
            <ActivityInfo />
         </div>
         <div className="flex justify-start mx-[8rem] gap-[2rem] mt-8">
            <CalendarDashboard />
         </div>
      </div>
   );
};

export default Home;
