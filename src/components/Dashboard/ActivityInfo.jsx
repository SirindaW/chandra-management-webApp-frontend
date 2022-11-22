import React, { useState } from 'react';
import { TfiReload } from 'react-icons/tfi';
import { Button } from '@mui/material';
import { MdEditNote } from 'react-icons/md';
import { table2 } from '../../constants/text';
import ActiTable from './ActiTable';

const defaultACTI = {
   sales: false,
   sancellation: false,
   currentPage: 'sales',
};

const ActivityInfo = () => {
   const [isACTIClicked, setIsACTIClicked] = useState({
      ...defaultACTI,
      sales: true,
      currentPage: 'sales',
   });

   const handlePageClick_ACTI = (page) => {
      setIsACTIClicked({ ...defaultACTI, [page]: true, currentPage: page });
   };

   const ACTI_pages = [
      {
         title: 'Sales',
         onClick: () => {
            handlePageClick_ACTI('sales');
         },
      },
      {
         title: 'Cancellation',
         onClick: () => {
            handlePageClick_ACTI('cancellation');
         },
      },
   ];

   const pageActive = 'bg-gray-100';

   let totalBooked;
   let totalNights;
   let totalRevenue;

   if (isACTIClicked.currentPage === 'sales') {
      totalBooked = table2.sales.length + '';
      totalNights = table2.sales.map((el) => el.nights).reduce((prev, cur) => parseInt(prev) + parseInt(cur), 0) + '';
      totalRevenue = table2.sales.map((el) => el.revenue).reduce((prev, cur) => parseInt(prev) + parseInt(cur), 0) + '';
   } else {
      totalBooked = table2.cancellation.length + '';
      totalNights = table2.cancellation.map((el) => el.nights).reduce((prev, cur) => parseInt(prev) + parseInt(cur), 0) + '';
      totalRevenue = table2.cancellation.map((el) => el.revenue).reduce((prev, cur) => parseInt(prev) + parseInt(cur), 0) + '';
   }

   return (
      <div className="flex flex-col flex-1 h-[600px] bg-secondary rounded-lg shadow-xl overflow-y-auto">
         <div className="p-2 text-[#fff] text-[18px] font-bold flex justify-between items-center">
            <div>TODAY&apos;S ACTIVITY</div>
            <div className="flex gap-4">
               <div className="font-extrabold ">
                  <TfiReload />
               </div>
            </div>
         </div>
         <div className="flex-1 bg-white p-2">
            <div className="w-full bg-lightGray flex justify-start items-center">
               {ACTI_pages.map((page, index) => (
                  <div key={index} className={`flex justify-start items-center h-[40px] ${isACTIClicked[page.title.toLowerCase()] && pageActive}`}>
                     <Button onClick={page.onClick}>{page.title}</Button>
                  </div>
               ))}
            </div>
            <div className="flex justify-center border-b border-b-lightGray border-b-[2px]flex justify-between items-center py-[0.65rem]">
               <div className="flex flex-col p-2 ">
                  <div className="text-[20px] text-secondary">{totalBooked}</div>
                  <div>BOOKED TODAY</div>
               </div>
               <div className="flex flex-col p-2 ">
                  <div className="text-[20px] text-secondary">{totalNights}</div>
                  <div>ROOM NIGHTS</div>
               </div>
               <div className="flex flex-col p-2 ">
                  <div className="text-[20px] text-secondary">{`B ${totalRevenue}`}</div>
                  <div>TOTAL REVENUE</div>
               </div>
            </div>
            <ActiTable table={table2} page={isACTIClicked.currentPage} />
         </div>
      </div>
   );
};

export default ActivityInfo;
