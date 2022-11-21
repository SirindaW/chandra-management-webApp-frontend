import React , {useState}  from 'react';
// import React , { useState } from 'react';
import styles from './styles.js';

import { MultiSelect } from "react-multi-select-component";

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export function NativePickers({title,date,onChange}) {
    return(
        <> 
            { (title === "Check  In" || title === "Check  Out") ? 
                <>
                    <FormControl sx={{ m: 1, display: 'flex' , flexGrow: 1 , backgroundColor: '#ffffff'}}>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DesktopDatePicker
                                label={title}
                                inputFormat="MM/DD/YYYY"
                                value={date}
                                onChange={onChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                            </LocalizationProvider>
                    </FormControl>
                </>
                :
                    <>
                        <FormControl sx={{ m: 1, width: 220 , backgroundColor: '#ffffff'}}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DesktopDatePicker
                                    label={title}
                                    inputFormat="MM/DD/YYYY"
                                    value={date}
                                    onChange={onChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </FormControl>
                    </>
            }
        </>
    )
}

export const FilterBox = ({filter,textStates,dateStates,clear}) => {

    return (
        <div>            
            <div className='m-2 md:m-10 mt-24 p-2 md:p-10'>
                <div className='text-left  bg-[#D9D9D9] p-2 rounded-t-lg border border-solid border-[#A7A5A5]'>
                    FILTER
                </div>
                <div className='border border-solid border-x-[#A7A5A5] p-2 flex lg:flex-row flex-col justify-evenly'>
                        {filter.map((select, index) => (
                            <div key={index}>
                                <div>{select.label}</div>
                                <MultiSelect
                                className=" w-[150px] xl:w-[350px]"
                                options={select.options}
                                value={textStates[index].state}
                                onChange={textStates[index].setState}
                                labelledBy={select.label}
                                />
                            </div>
                            ))}
                    <NativePickers title="Check In" date = {dateStates[0].state}
                        onChange={dateStates[0].setState}
                    />
                    <NativePickers title="Check Out" date = {dateStates[1].state}
                        onChange={dateStates[1].setState}
                    />
                </div>
                <div className='text-right bg-[#D9D9D9] p-2 rounded-b-lg border border-solid border-[#A7A5A5]'>
                    <button className={`${styles.button} bg-secondary hover:text-secondary hover:inner-border-secondary`} >APPLY</button>
                    <button className={`${styles.button} bg-[#9D9B9B] hover:text-primary hover:inner-border-primary`} onClick = {clear} >CLEAR</button>
                </div>
            </div>
        </div>
        
    );
}
export default FilterBox;



