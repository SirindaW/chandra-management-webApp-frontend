import React from "react";
import { Button } from "@mui/material";
import addIcon from "../../images/housekeeping/addIcon.svg";
import arrow from "../../images/housekeeping/dropdownArrow.svg"
import { useState } from "react";
import AddModal from "./AddModal";

const Housekeeper = () => {

  const housekeeperDataMockup = ["Susy", "Lisa", "Kim"];

  const [housekeepers, setHousekeepers] = useState(housekeeperDataMockup);
  const [open, setOpen] = useState({index: null});
  const [addModal, setAddModal] = useState(false);
  const [editPopup, setEditPopup] = useState();

  const AddIcon = () => {
    return <img src={addIcon} alt="addIcon" />;
  };

  const Arrow = ()=>{
    return <img src={arrow} alt="addIcon" />;
  };

  const handleClose=()=>{
    if (open.index != null){
      setOpen({index:null})
    }
  }
  
  const handleActionClicked=(index)=>{
    if (open.index != null){
      setOpen({index:null});
    }else{
      setOpen({index});
    }
  }

  const handleDelete = (index)=>{
    const currentHK = housekeepers;
    const newHK = currentHK.filter((hk,idx)=>{ return idx !== index })
    setHousekeepers(newHK);
    setOpen({index:null});
  }

  return (
    <>
    <div class="flex flex-col p-[2rem] gap-[1.5rem] overflow-auto">
      {open.index != null ? <div onClick={handleClose} class="z-10 absolute top-0 left-0 inline-block w-full h-full" ></div>:""}
      
      {addModal && <AddModal closeModal={setAddModal}/>}

        <div>
          <Button onClick={()=> setAddModal(true)} variant="contained" color="lightGreen" startIcon={<AddIcon/>}>
            Add Housekeeper
          </Button>
        </div>
        <div class="flex flex-col justify-start item bg-secondary min-h-[500px] rounded-[8px] border border-[1px] border-primaryfade shadow-lg">
          <div class="text-[15px] p-[0.5rem] text-white">Housekeepers</div>
          <div class="w-full h-full flex-1 bg-white flex flex-col">
            {housekeepers.map((h,idx) => (
              <div class={`flex justify-between items-center px-4 py-2 border-b border-b-[1px] border-b-[#D9D9D9]`} key={h}>
                <div>{h}</div>
                <div class={`${open.index === idx ? "z-50":""}`}>
                  <Button onClick={()=>{handleActionClicked(idx)}} variant="contained" color='lightGray' endIcon={<Arrow/>} >Action</Button>
                  {open.index === idx ? 
                    <div class="absolute z-50 flex flex-col bg-white border border-[#D9D9D9]">
                      <div class="border-b border-b-[#D9D9D9]"><Button sx={{width:"100px"}}>Edit</Button></div>
                      <div><Button sx={{width:"100px"}} onClick={()=>{handleDelete(idx)}}>Delete</Button></div>
                    </div> : 
                    ""
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Housekeeper;
