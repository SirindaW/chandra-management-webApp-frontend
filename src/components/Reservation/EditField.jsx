import { useState } from 'react';
import { TextField, MenuItem } from '@mui/material';
import { bookingStatus } from '../../constants/text';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import { changeEventStatus } from '../../actions/events';

const EditField = ({ status, id, data }) => {
   const [newStatus, setNewStatus] = useState(status);
   const [isEdit, setIsEdit] = useState(false);
   const dispatch = useDispatch();

   const handleChangeStatus = (id, status) => {
      dispatch(changeEventStatus({ id, status }));
      setIsEdit(false);
   };
   return (
      <>
         {isEdit ? (
            <div className="flex items-center justify-center">
               <TextField select name="status" label="Status" value={newStatus} onChange={(e) => setNewStatus(e.target.value)} sx={{ width: '70%' }}>
                  {bookingStatus.map((p) => (
                     <MenuItem key={p.value} value={p.value}>
                        {p.label}
                     </MenuItem>
                  ))}
               </TextField>
               <button
                  disabled={!newStatus}
                  className="bg-green-500 hover:bg-green-600 disabled:bg-primary/30 rounded-full w-[30px] h-[30px] transition-all ml-5"
                  onClick={() => handleChangeStatus(id, newStatus)}
               >
                  <CheckIcon fontSize="small" color="white" />
               </button>
            </div>
         ) : (
            <div>
               <span className="mr-2">{data.status}</span>
               <button className="hover:bg-primary/10 rounded-full w-[30px] h-[30px] transition-all" onClick={() => setIsEdit(true)}>
                  <EditIcon fontSize="small" />
               </button>
            </div>
         )}
      </>
   );
};

export default EditField;
