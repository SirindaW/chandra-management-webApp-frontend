import React from 'react';
import { tableHeaderList } from '../../constants/text';
import { CircularProgress } from '@mui/material';
import FilterBox from './FilterBox';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { CheckBox } from '@mui/icons-material';
import { BiCommentEdit } from 'react-icons/bi';
import moment from 'moment';

const Inspection = () => {
   const [R_Type, set_R_Type] = useState([]);
   const [R_Status, set_R_Status] = useState([]);
   const [R_Condition, set_R_Condition] = useState([]);
   const [F_Status, set_F_Status] = useState([]);
   const [AssignedTo, setAssignTo] = useState([]);

   const [tasks, setTasks] = useState([]);
   const [hkList, setHkList] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   const fetchData = async () => {
      const tasks = await axios.get('http://localhost:3001/api/admin/housekeeping/tasks');
      const hk = await axios.get('http://localhost:3001/api/admin/housekeeping/housekeepers');
      setHkList(hk.data);
      setTasks(tasks.data);
      setIsLoading(false);
      // console.log(tasks.data);
   };

   useEffect(() => {
      clearInterval(myInterval);
      fetchData();
   }, []);

   const myInterval = setInterval(() => {
      clearInterval(myInterval);
      fetchData();
   }, 300000);

   const handle_R_Type = (newFilter) => {
      set_R_Type(newFilter);
   };

   const handle_R_Status = (newFilter) => {
      set_R_Status(newFilter);
   };

   const handle_R_Condition = (newFilter) => {
      set_R_Condition(newFilter);
   };

   const handle_F_Status = (newFilter) => {
      set_F_Status(newFilter);
   };

   const handle_AssignedTo = (newFilter) => {
      setAssignTo(newFilter);
   };

   const handleCondition = (e, id) => {
      const body = {
         _id: id,
         condition: e.target.value,
      };
      axios.post('http://localhost:3001/api/admin/housekeeping/task/changeCondition', body).then(() => fetchData());
   };

   const handleAssignedTo = (e, id) => {
      const body = { taskId: id, employeeId: e.target.value };
      axios.post('http://localhost:3001/api/admin/housekeeping/task/changeAssignedTo', body).then(() => fetchData());
   };

   const handleDoNotDisturb = (task) => {
      const body = { taskId: task._id, doNotDisturb: !task.doNotDisturb };
      axios.post('http://localhost:3001/api/admin/housekeeping/task/changeDoNotDisturb', body).then(() => fetchData());
   };

   const handleFilter = () => {
      let path = 'http://localhost:3001/api/admin/housekeeping/tasks/filter';
      let param = [];

      R_Type.forEach((el) => param.push(`type=${el.value}`));
      R_Status.forEach((el) => param.push(`roomStatus=${el.value}`));
      R_Condition.forEach((el) => param.push(`condition=${el.value}`));
      F_Status.forEach((el) => param.push(`frontdeskStatus=${el.value}`));
      AssignedTo.forEach((el) => param.push(`employeeId=${el.value}`));

      param.forEach((p, i) => (i === 0 ? (path += `?${p}`) : (path += `&${p}`)));
      axios.get(path).then((r) => {
         setTasks(r.data);
      });
   };

   const handleClear = () => {
      set_R_Type([]);
      set_R_Status([]);
      set_R_Condition([]);
      set_F_Status([]);
      setAssignTo([]);
   };

   const statesList = [
      { state: R_Type, setState: handle_R_Type },
      { state: R_Status, setState: handle_R_Status },
      { state: R_Condition, setState: handle_R_Condition },
      { state: F_Status, setState: handle_F_Status },
      { state: AssignedTo, setState: handle_AssignedTo },
   ];

   const cb = { inputProps: { 'aria-label': 'Checkbox demo' } };

   return (
      <>
         <FilterBox states={statesList} hk={hkList} onApply={handleFilter} onClear={handleClear} />
         <div className="flex flex-col justify-start item mx-[2rem] bg-secondary rounded-[8px] min-h-[588px] border border-[1px] border-primaryfade shadow-lg mb-[110px]">
            <div className="font-extrabold text-[20px] p-[1rem] text-white">Inspection</div>
            <div className="w-full h-full flex-1 bg-white">
               <table className="w-full table-auto">
                  <thead className="h-[47px] bg-[#D9D9D9]">
                     <tr>
                        {tableHeaderList.map((header, idx) => (
                           <th key={header + idx} className={idx !== tableHeaderList.length - 1 ? 'border-r border-r-[1px] border-r-[#9A9A9A]' : null}>
                              {header}
                           </th>
                        ))}
                     </tr>
                  </thead>
                  <tbody>
                     {isLoading ? <CircularProgress /> : null}
                     {!isLoading
                        ? tasks.map((task, idx) => (
                             <tr key={task.roomNumber + idx} className="text-center uppercase">
                                <td className="h-[65px]">{task.roomNumber}</td>
                                <td className="h-[65px] uppercase">{task.type}</td>
                                <td className="h-[65px]">
                                   <div className="flex justify-center items-center">
                                      <select
                                         id="countries"
                                         className="h-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100px] p-2.5 "
                                         value={task.condition}
                                         onChange={(e) => {
                                            handleCondition(e, task._id);
                                         }}
                                      >
                                         <option value="clean">Clean</option>
                                         <option value="dirty">Dirty</option>
                                      </select>
                                   </div>
                                </td>
                                <td className="h-[65px]">{task.roomStatus}</td>
                                <td className="h-[65px]">{moment.utc(task.arrivalDate).format('MM/DD/YYYY')}</td>
                                <td className="h-[65px]">{moment.utc(task.departureDate).format('MM/DD/YYYY')}</td>
                                <td className="h-[65px]">{task.frontdeskStatus}</td>
                                <td className="h-[65px]">
                                   <div className="flex justify-center items-center">
                                      <select
                                         id="countries"
                                         className="h-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100px] p-2.5 "
                                         value={task.employeeId}
                                         onChange={(e) => {
                                            handleAssignedTo(e, task._id);
                                         }}
                                      >
                                         {hkList.map((hk, index) => (
                                            <option key={hk.fname + index} value={hk._id}>
                                               {hk.fname}
                                            </option>
                                         ))}
                                      </select>
                                   </div>
                                </td>
                                <td>
                                   <input
                                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-50 focus:ring-2 "
                                      type="checkbox"
                                      checked={task.doNotDisturb}
                                      onClick={() => handleDoNotDisturb(task)}
                                   />
                                </td>
                                <td>
                                   <div className="flex justify-center items-center">
                                      <BiCommentEdit style={{ fontSize: '30px' }} />
                                   </div>
                                </td>
                             </tr>
                          ))
                        : null}
                  </tbody>
               </table>
            </div>
         </div>
      </>
   );
};

export default Inspection;
