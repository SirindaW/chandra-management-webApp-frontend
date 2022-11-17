import React from 'react';
import TextField from '@mui/material/TextField';
const NoteDetail = () => {
    return(
        <div className='flex flex-row'>  
            <div className='bg-[#D9D9D9] flex flex-col flex-start h-[418px]  w-[300px]'>
                <button className='bg-secondary text-left p-4'  >Note 1</button>
            </div>
            <div className = 'w-full bg-[#F5F5F5] flex flex-col'>
                <div className=' flex flex-row  justify-center'>
                    <TextField required id="outlined-basic" label="Add notes here" variant="outlined" sx={{width: "1400px" , mt: 5}}/>
                </div>
                <div className='flex flex-row justify-end mr-8'>
                    <button className = " rounded-lg bg-secondary text-white text-m p-2 mx-1 my-5 hover:bg-white hover:inner-border  hover:text-secondary hover:inner-border-secondary" >Submit</button>
                </div>
                <hr/>
                <div className='bg-white w-full h-full '>
                    <div className='m-5 border border-2 rounded-lg '>
                        <p className='p-5'>note 1 description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolor quam dolorum accusamus itaque! Animi ut ratione, laborum sed, nam molestias in asperiores minima officia, sint totam sit tenetur dolore.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default NoteDetail;