import React, { useState } from 'react';
import { CircularProgress } from '@mui/material';

const EventTable = ({ data }) => {
   const table_header = ['Guest', 'Type', 'Place', 'Revenue', 'Check-in', 'Nights'];
   const [isLoading, setisLoading] = useState(true);

   return (
      <>
         <table className="w-full">
            <thead className="p-4 bg-lightGray">
               {table_header.map((h, idx) => (
                  <th key={h + idx}>{h}</th>
               ))}
            </thead>
            <tbody>
               {!isLoading &&
                  data.map((d, idx) => (
                     <tr key={d + idx}>
                        <td></td>
                     </tr>
                  ))}
            </tbody>
         </table>
         {isLoading && (
            <div className="w-full flex justify-center items-center mt-[8rem]">
               <CircularProgress />
            </div>
         )}
      </>
   );
};

export default EventTable;
