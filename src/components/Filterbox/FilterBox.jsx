import React from 'react';
import styles from './styles.js';
import {filterSelect_Guest} from "../../constants/text";

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

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
    const [personName, setPersonName] = React.useState([]);
        const handleChange = (event) => {
            const {
                target: { value },
            } = event;
            setPersonName(
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
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label={title} />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
            >
                {vals.map((name) => (
                <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                </MenuItem>
                ))}
            </Select>
            </FormControl>
        </>
        );
    }    

export  function NativePickers(val) {
    const date = new Date();
    const currentDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    return (
        <TextField 
            id="date"
            label={val}
            type="date"
            defaultValue= {currentDate}
            sx={{ m:1 ,width: 220 }}
            InputLabelProps={{
            shrink: true,
            }}
            />
        );
    }        

const FilterBox = () => {
//   const editing = { allowDeleting: true, allowEditing: true };
    const handleClearClick = () => {
        console.log('clear');
    }
    return (
        <div>
            <div className='m-2 md:m-10 mt-24 p-2 md:p-10'>
                <div className='text-left font-semibold bg-[#D9D9D9] p-2 rounded-t-lg border border-solid border-[#A7A5A5]'>
                    FILTER
                </div>
                <div className='border border-solid border-x-[#A7A5A5] p-2'>
                        {filterSelect_Guest.map((condition) => (
                        MultipleSelectCheckmarks(condition.title,condition.items)
                    ))}
                    {/* <DateSelect /> */}
                    { NativePickers('Check In') }
                    { NativePickers('Check Out') }
                </div>
                <div className='text-right bg-[#D9D9D9] p-2 rounded-b-lg border border-solid border-[#A7A5A5]'>
                    <button className={`${styles.button} bg-secondary hover:text-secondary hover:inner-border-secondary`} >APPLY</button>
                    <button className={`${styles.button} bg-[#9D9B9B] hover:text-primary hover:inner-border-primary`} onClick = {handleClearClick}>CLEAR</button>
                </div>
            </div>
        </div>
        
    );
};
export default FilterBox;



