import React from 'react';
import TextField from '@mui/material/TextField';

export const Forms = ({labels,states}) => {
  console.log({states})
  return (
    <div className='flex flex-col items-center  px-[30px] py-10 space-y-5'>
      {labels.map((label,index) => (
          <TextField 
            required
            id={index}
            key = {index}
            className='md:w-[600px] w-[100px] '
            label={label}

            // value = {states[index].state}
            // onChange ={states[index].setState}

            // defaultValue={1} 
            variant='filled'
          />
      ))}

          
    </div>
  );
}
export default Forms;