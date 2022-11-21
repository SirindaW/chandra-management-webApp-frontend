import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Forms from "./Forms";
import AddNote from "./AddNote";

const Table = ({tableName,header,data}) => {
  
    return (
        <div className="flex flex-col justify-start item mx-[2rem] mt-10 rounded-lg min-h-[588px] border border-primaryfade shadow-lg ">
          <div className="font-extrabold text-[20px] p-[1rem] bg-secondary rounded-t-lg  text-white">
            {tableName}
          </div>
          {header!=="null" && (          
            <table className="w-full table-fixed bg-white overflow-scroll">
                <thead className="h-[47px] w-full bg-[#D9D9D9]">
                  <tr>
                    {header.map((h, idx) => (
                      <th
                        key={idx}
                        className={
                          idx !== header.length - 1
                            && "border-r border-r-[1px] border-r-[#9A9A9A]"
                        }
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {
                    (tableName === "Availability") ? 
                      <>
                        {data.map((d,idx) => (
                          <tr key={idx} className="text-center hover:cursor-pointer h-[65px] border-b border-gray-200">
                              <td >{d.TYPE}</td>
                              <td >{d.START}</td>
                              <td >{d.ARRIVE}</td>
                              <td >{d.DEPART}</td>
                              <td >{d.AVAILABLE}</td>
                              <td className='px-14'>
                              <TextField
                                required
                                id="filled-required"
                                inputProps={{min: 0, style: { textAlign: 'center' }}} 
                                label="Required"
                                defaultValue={1}
                                variant="filled"
                              />
                              </td>
                              <td className='px-14'>
                              <TextField
                                id="filled-number"
                                inputProps={{min: 0, style: { textAlign: 'center' }}} 
                                variant="filled"
                              />
                              </td>
                              <td className='px-2'>
                              <TextField
                                id="filled-numbrt"
                                inputProps={{min: 0, style: { textAlign: 'center' }}} 
                                variant="filled"
                              />
                              </td>
                              <td>
                                <Button variant="contained" sx={{backgroundColor: '#27BE5A'}}>ADD</Button>
                              </td>
                            {/* <td className="h-[65px]">comments</td> */}
                          </tr>
                        ))}
                      </>
                      
                      :
                      <>
                        {data.map((d,idx) => (
                          <tr key={idx} className="text-center hover:cursor-pointer">
                            {d.map((v) => (
                              <td className="h-[65px] border-b border-gray-200">{v}</td>
                            ))}
                            {/* <td className="h-[65px]">comments</td> */}
                          </tr>
                        ))}
                      </>
                      

                  }
                  
                </tbody>
              </table>
          )}

          {/* ======================== for reservation info ============================== */}
          {(tableName==="RESERVATION INFORMATION" || tableName==="Payment Information") && (
            <Forms labels = {data}/>
          )
          }
          {(tableName==="Additional Details and Preferences") && (
            <AddNote />
          )
          }
      </div>
      
    );
}
export default Table;