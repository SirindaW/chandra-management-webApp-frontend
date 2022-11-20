import React from "react";
import {
  filterSelect,
  tableHeaderList,
  InspDataMockup,
} from "../../constants/text";
import { Button, CircularProgress, MenuItem, Select } from "@mui/material";
import FilterBox from "./FilterBox";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { CheckBox } from "@mui/icons-material";
import { BiCommentEdit } from 'react-icons/bi'

const Inspection = () => {
  const [R_Type, set_R_Type] = useState([]);
  const [R_Status, set_R_Status] = useState([]);
  const [R_Condition, set_R_Condition] = useState([]);
  const [F_Status, set_F_Status] = useState([]);
  const [AssignedTo, setAssignTo] = useState([]);

  const [tasks, setTasks] = useState(null);
  const [hkList, setHkList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const tasks = await axios.get(
      "http://localhost:3001/api/admin/housekeeping/tasks"
    );
    const hk = await axios.get("http://localhost:3001/api/admin/housekeeping/housekeepers");
    setHkList(hk.data);
    setTasks(tasks.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    axios
      .post(
        "http://localhost:3001/api/admin/housekeeping/task/changeCondition",
        body
      )
      .then(() => fetchData());
  };

  const handleAssignedTo = (e,id) => {

  }

  const statesList = [
    { state: R_Type, setState: handle_R_Type },
    { state: R_Status, setState: handle_R_Status },
    { state: R_Condition, setState: handle_R_Condition },
    { state: F_Status, setState: handle_F_Status },
    { state: AssignedTo, setState: handle_AssignedTo },
  ];

  return (
    <>
      <FilterBox states={statesList} />
      <div className="flex flex-col justify-start item mx-[2rem] bg-secondary rounded-[8px] min-h-[588px] border border-[1px] border-primaryfade shadow-lg mb-[110px]">
        <div className="font-extrabold text-[20px] p-[1rem] text-white">
          Inspection
        </div>
        <div className="w-full h-full flex-1 bg-white">
          <table className="w-full table-auto">
            <thead className="h-[47px] bg-[#D9D9D9]">
              <tr>
                {tableHeaderList.map((header, idx) => (
                  <th key={idx} className={ idx !== tableHeaderList.length - 1 ? "border-r border-r-[1px] border-r-[#9A9A9A]":null } >{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {isLoading ? <CircularProgress /> : null }
              {!isLoading ?
                tasks.map((task, idx) => (
                  <tr key={idx} className="text-center">
                    <td className="h-[65px]">{101 + idx}</td>
                    <td className="h-[65px]">{task.type}</td>
                    <td className="h-[65px]">
                      <div className="flex justify-center items-center">
                        <select id="countries" class="h-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100px] p-2.5 " value={task.condition} onChange={(e) => { handleCondition(e, task._id); }}>
                          <option value="cleaned">Clean</option>
                          <option value="dirty">Dirty</option>
                        </select>
                      </div>
                    </td>
                    <td className="h-[65px]">{task.roomStatus}</td>
                    <td className="h-[65px]">{task.arrivalDate}</td>
                    <td className="h-[65px]">{task.departureDate}</td>
                    <td className="h-[65px]">{task.frontdeskStatus}</td>
                    <td className="h-[65px]">
                      <div className="flex justify-center items-center">
                        <select
                          id="countries"
                          class="h-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100px] p-2.5 "
                          value={task.assiged}
                          onChange={(e) => {
                            handleAssignedTo(e, task._id);
                          }}
                        >
                         {hkList.map((hk)=> <option value={hk.fname}>{hk.fname}</option>)}
                        </select>
                      </div>
                    </td>
                    <td className="h-[65px]">
                      <CheckBox checked={task.doNotDisturb}/>
                    </td>
                    <td className="h-[65px]">
                      <div className="flex justify-center items-center">
                        <BiCommentEdit style={{fontSize:"30px"}} />
                      </div>
                    </td>
                  </tr>
                )) : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Inspection;
