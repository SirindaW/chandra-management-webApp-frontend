import EditField from './EditField';

const GreyBox = ({ header, data }) => {
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
               {data?.map((d) => (
                  <tr key={d._id} className="text-center">
                     <td className="h-[65px] border-b border-gray-200">{d._id}</td>
                     <td className="h-[65px] border-b border-gray-200">
                        {d.prefix} {d.fname} {d.lname}
                     </td>
                     <td className="h-[65px] border-b border-gray-200">{d.type}</td>
                     <td className="h-[65px] border-b border-gray-200">{d.place}</td>
                     <td className="h-[65px] border-b border-gray-200">{d.start}</td>
                     <td className="h-[65px] border-b border-gray-200">{d.end}</td>
                     <td className="h-[65px] border-b border-gray-200">
                        {d.min_budget.toLocaleString()}-{d.max_budget.toLocaleString()}
                     </td>
                     <td className="h-[65px] border-b border-gray-200">
                        <EditField status={d.status} id={d._id} data={d} />
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </>
   );
};
export default GreyBox;
