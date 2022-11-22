import React from 'react';
import Button from '@mui/material/Button';



export const AddNote = () => {
  return (
    <div >
      <div className='mx-10 my-5'>
      {/* <form className='w-[500px]'>
        <label>
          Add Note here
          <input type="text" name="name" multiple={true} placeholder="Add note here" className='w-[500px] h-[300px] border px-4 py2 align-top'/>
        </label>
      </form> */}
      <textarea className='w-[500px] h-[300px] p-4 border-2'>Add note here</textarea>
        
      </div>
      <div className='flex flex-row justify-end mr-10'>
        <Button variant="contained" sx={{backgroundColor: '#D4990D', my: '15px'}} >SUBMIT NOTE</Button>
      </div>
      
          <hr className='mx-4'/>
    </div>
    
  );
} 
export default AddNote;