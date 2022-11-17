import React , { useState } from 'react';
import dayjs from 'dayjs';
import styles from './styles.js';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
    };

const MultipleSelectCheckmarks = (title,vals) => {
    const [selected, setSelected] = React.useState([]);
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelected(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    
        return (
        <>
            <FormControl sx={{ m: 1, width: 345 }}>
            <InputLabel id="demo-multiple-checkbox-label">{title}</InputLabel>
            <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={selected}
                onChange={handleChange}
                input={<OutlinedInput label={title} />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
            >
                {vals.map((name) => (
                <MenuItem key={name} value={name}>
                    <Checkbox checked={selected.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                </MenuItem>
                ))}
            </Select>
            </FormControl>
        </>
        );
    }    

function NativePickers(props) {
    const [selectedDate, setSelectedDate] = React.useState(props.date);
    const handleChange = (newValue) => {
        setSelectedDate(dayjs(newValue.toDate()).format('YYYY-MM-DD'));
        props.changeDate(dayjs(newValue.toDate()).format('YYYY-MM-DD'));
    };

    return(
        <>
            <FormControl sx={{ m: 1, width: 220 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DesktopDatePicker
                    label={props.title}
                    inputFormat="MM/DD/YYYY"
                    value={selectedDate}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
                </LocalizationProvider>
            </FormControl>
        </>
    )
    }     

const FilterBox = ({filter}) => {
    
    // if props.filter == 
    const date = new Date();
    const currentDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    const [filter1, setFilter1] = React.useState('');
    const [filter2, setFilter2] = React.useState('');
    const [filter3, setFilter3] = React.useState('');
    const [checkInFilter, setCheckInFilter] = React.useState(currentDate);
    const [checkOutFilter, setCheckOutFilter] = React.useState(currentDate);
    const handleClear = () =>{
        setFilter1('');
        setFilter2('');
        setFilter3('');
        setCheckInFilter(currentDate);
        setCheckOutFilter(currentDate);
    }
    return (
        <div>            
            <div className='m-2 md:m-10 mt-24 p-2 md:p-10'>
                <div className='text-left font-semibold bg-[#D9D9D9] p-2 rounded-t-lg border border-solid border-[#A7A5A5]'>
                    FILTER
                </div>
                <div className='border border-solid border-x-[#A7A5A5] p-2'>
                        {filter.map((condition) => (
                        MultipleSelectCheckmarks(condition.title,condition.items)
                    ))}
                    {/* <DateSelect /> */}
                    <NativePickers className="checkInBox" title="Check In" date = {checkInFilter}
                        changeDate={checkInFilter=>setCheckInFilter(checkInFilter) }
                    />
                    <NativePickers title="Check Out" 
                        changeDate={checkOutFilter=>setCheckOutFilter(checkOutFilter)}
                    />
                    {/* { NativePickers ({title:'Check In' , setSelectedDate: {setCheckInFilter}})} */}
                </div>
                <div className='text-right bg-[#D9D9D9] p-2 rounded-b-lg border border-solid border-[#A7A5A5]'>
                    <button className={`${styles.button} bg-secondary hover:text-secondary hover:inner-border-secondary`} >APPLY</button>
                    <button className={`${styles.button} bg-[#9D9B9B] hover:text-primary hover:inner-border-primary`} onClick={handleClear} >CLEAR</button>
                </div>
            </div>
            {/* <div>
                check in date: {checkInFilter}
            </div>
            <div>check out date: {checkOutFilter}</div> */}
        </div>
        
    );
}
export default FilterBox;



