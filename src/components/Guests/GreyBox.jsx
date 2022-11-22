import React from 'react';
const GreyBox = ({ setGuestId, header, data, setPage }) => {
   const handleToDetail = (id) => {
      setPage('GuestsDetail');
      setGuestId(id);
   };

   return (
      <>
         <table className="w-full table-auto bg-white overflow-scroll">
            <thead className="h-[47px] w-full bg-[#D9D9D9]">
               <tr>
                  {header.map((h, idx) => (
                     <th key={idx} className={idx !== header.length - 1 && 'border-r  border-r-[#9A9A9A]'}>
                        {h}
                     </th>
                  ))}
               </tr>
            </thead>
            <tbody>
               {data.map((d) => (
                  <tr key={d._id} className="text-center cursor-pointer hover:bg-primary/5 transition-all" onClick={() => handleToDetail(d._id)}>
                     <td className="h-[65px] border-b border-gray-200">{d.fname}</td>
                     <td className="h-[65px] border-b border-gray-200">{d.lname}</td>
                     <td className="h-[65px] border-b border-gray-200">{d.email}</td>
                     <td className="h-[65px] border-b border-gray-200">{d.phone}</td>
                     <td className="h-[65px] border-b border-gray-200">{d.country}</td>
                     <td className="h-[65px] border-b border-gray-200">{d.attended ? 'Yes' : 'No'}</td>
                     <td className="h-[65px] border-b border-gray-200">{d.status}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </>
   );
};
export default GreyBox;
