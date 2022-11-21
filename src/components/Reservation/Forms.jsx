import React from "react";
import TextField from '@mui/material/TextField';

export const Forms = ({labels}) => {
  console.log(labels);

  return (
    <div className="flex flex-col items-center px-[30px] py-10 space-y-5">
      {labels.map((label,index) => (
          <TextField 
            required
            id={index}
            // inputProps={{min: 0, style: { textAlign: 'center' }}} 
            className="w-[600px] "
            label={label}
            // defaultValue={1}
            variant="filled"
          />
      ))}

          
    </div>
  );
}
export default Forms;