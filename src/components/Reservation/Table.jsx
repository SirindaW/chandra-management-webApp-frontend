import React from 'react';
const Table = ({ tableName, header, data }) => {
   return (
      <div className="flex flex-col justify-start item mx-[2rem] rounded-lg min-h-[588px] border border-[1px] border-primaryfade shadow-lg mb-[110px]">
         <div className="font-extrabold text-[20px] p-[1rem] bg-secondary rounded-t-lg  text-white">{tableName}</div>
         <table className="w-full table-auto bg-white overflow-scroll">
            <thead className="h-[47px] w-full bg-[#D9D9D9]">
               <tr>
                  {header.map((h, idx) => (
                     <th key={idx} className={idx !== header.length - 1 && 'border-r border-r-[1px] border-r-[#9A9A9A]'}>
                        {h}
                     </th>
                  ))}
               </tr>
            </thead>
            <tbody>
               {data.map((d, idx) => (
                  <tr key={idx} className="text-center hover:cursor-pointer">
                     {d.map((v, index) => (
                        <td key={index} className="h-[65px]">
                           {v}
                        </td>
                     ))}
                     {/* <td className="h-[65px]">comments</td> */}
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};
export default Table;
