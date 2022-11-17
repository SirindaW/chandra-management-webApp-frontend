import React , {useState} from 'react';
import GuestsMain from "./GuestsMain.jsx";
import GuestsDetail from "./GuestsDetail.jsx";
const Guests=()=>{
    // const pageList = ["GuestsMain", "GuestsDetail"];
    const [page, setPage] = useState("GuestsMain");
    const guestName = "guestName";
    // const [guestName,setGuestName] = useState("Guest Name");
    const [guestStatus,setGuestStatus] = useState("Guest Status");
    return (
        <>  
        {/* {guestName},{guestStatus} */}
            <div className='flex flex-row justify-between mt-5 mx-10'>
                
                <div>
                    {page === "GuestsMain" ? 
                    <button className="bg-secondary" onClick={()=>{setPage("GuestsDetail")}}>see detail</button> 
                    : 
                    <button className="bg-secondary" onClick={()=>{setPage("GuestsMain")}}>go back</button>}
                
                
                
                </div>
                
            </div>
            { page === "GuestsMain" ? <GuestsMain /> 
                : 
            <GuestsDetail guestName = {guestName} guestStatus={guestStatus}  setGuestStatus ={setGuestStatus} />}
        </>
        
    );
}
export default Guests;