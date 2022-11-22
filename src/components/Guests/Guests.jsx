import React, { useState } from 'react';
import GuestsMain from './GuestsMain.jsx';
import GuestsDetail from './GuestsDetail.jsx';

const Guests = () => {
   const [guestId, setGuestId] = useState('');
   const [page, setPage] = useState('GuestsMain');
   return (
      <>
         <div className="flex flex-row justify-between mt-5 mx-10">
            {page === 'GuestsDetail' && (
               <button
                  className="bg-secondary px-5 py-2 text-white rounded-xl hover:bg-primary transition-all"
                  onClick={() => {
                     setPage('GuestsMain');
                  }}
               >
                  ◄ BACK TO GUEST LISTS
               </button>
            )}
         </div>
         {page === 'GuestsMain' ? <GuestsMain setPage={setPage} setGuestId={setGuestId} /> : <GuestsDetail guestId={guestId} />}
      </>
   );
};
export default Guests;
