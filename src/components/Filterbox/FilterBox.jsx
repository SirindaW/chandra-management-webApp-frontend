import styles from './styles.js';

import { MultiSelect } from 'react-multi-select-component';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { filterSelect_Guest } from '../../constants/text.js';
import { addMonths } from 'date-fns';

export function NativePickers({ title, date, onChange }) {
   const mindate = new Date();
   const maxdate = addMonths(mindate, 3);
   return (
      <>
         {title === 'Check In' || title === 'Check Out' ? (
            <>
               <FormControl sx={{ m: 1, marginLeft: '20px', marginTop: '15px', backgroundColor: '#ffffff' }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                     <DesktopDatePicker
                        minDate={mindate}
                        maxDate={maxdate}
                        label={title}
                        inputFormat="MM/DD/YYYY"
                        value={date || null}
                        onChange={onChange}
                        renderInput={(params) => <TextField {...params} />}
                     />
                  </LocalizationProvider>
               </FormControl>
            </>
         ) : (
            <>
               <FormControl sx={{ m: 1, width: 220, backgroundColor: '#ffffff' }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                     <DesktopDatePicker
                        minDate={mindate}
                        maxDate={maxdate}
                        label={title}
                        inputFormat="MM/DD/YYYY"
                        value={date}
                        onChange={onChange}
                        renderInput={(params) => <TextField {...params} />}
                     />
                  </LocalizationProvider>
               </FormControl>
            </>
         )}
      </>
   );
}

export const FilterBox = ({ filter, setFilter, initialState }) => {
   const { guestType, country, status } = filterSelect_Guest;

   return (
      <div className="w-full">
         <div className="mt-10 mb-16">
            <div className="text-left  bg-[#D9D9D9] p-2 rounded-t-lg border border-solid border-[#A7A5A5]">FILTER</div>
            <div className="px-5 border border-solid border-x-[#A7A5A5] p-2 flex lg:flex-row flex-col justify-evenly items-center py-5">
               <div className="w-2/3 space-x-5 flex">
                  <div className="flex-1">
                     <div>{guestType.label}</div>
                     <MultiSelect options={guestType.options} value={filter.type} onChange={(value) => setFilter({ ...filter, type: value })} labelledBy={guestType.label} />
                  </div>
                  <div className="flex-1">
                     <div>{country.label}</div>
                     <MultiSelect options={country.options} value={filter.country} onChange={(value) => setFilter({ ...filter, country: value })} labelledBy={country.label} />
                  </div>
                  <div className="flex-1">
                     <div>{status.label}</div>
                     <MultiSelect options={status.options} value={filter.status} onChange={(value) => setFilter({ ...filter, status: value })} labelledBy={status.label} />
                  </div>
               </div>
               <NativePickers
                  title="Check In"
                  date={filter.checkIn}
                  onChange={({ $d }) => {
                     setFilter({ ...filter, checkIn: $d });
                  }}
               />
               <NativePickers
                  title="Check Out"
                  date={filter.checkOut}
                  onChange={({ $d }) => {
                     setFilter({ ...filter, checkOut: $d });
                  }}
               />
            </div>
            <div className="text-right bg-[#D9D9D9] p-2 rounded-b-lg border border-solid border-[#A7A5A5]">
               <button className={`${styles.button} bg-secondary hover:text-secondary hover:inner-border-secondary`}>APPLY</button>
               <button className={`${styles.button} bg-[#9D9B9B] hover:text-primary hover:inner-border-primary`} onClick={() => setFilter(initialState)}>
                  CLEAR
               </button>
            </div>
         </div>
      </div>
   );
};
export default FilterBox;
