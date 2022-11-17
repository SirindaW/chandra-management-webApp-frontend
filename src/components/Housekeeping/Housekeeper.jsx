import React from "react";
import { Button } from "@mui/material";
import addIcon from "../../images/housekeeping/addIcon.svg";
import arrow from "../../images/housekeeping/dropdownArrow.svg";
import { useState } from "react";
import AddModal from "./AddModal";
import ActionsDropdown from "./ActionsDropdown";

const Housekeeper = () => {
  const housekeeperDataMockup = ["Susy", "Lisa", "Kim"];

  const [housekeepers, setHousekeepers] = useState(housekeeperDataMockup);
  const [open, setOpen] = useState({ index: null });
  const [addModal, setAddModal] = useState(false);
  const [editPopup, setEditPopup] = useState();

  const AddIcon = () => {
    return <img src={addIcon} alt="addIcon" />;
  };

  const Arrow = () => {
    return <img src={arrow} alt="addIcon" />;
  };

  const handleClose = () => {
    if (open.index != null) {
      setOpen({ index: null });
    }
  };

  const handleActionClicked = (index) => {
    if (open.index != null) {
      setOpen({ index: null });
    } else {
      setOpen({ index });
    }
  };

  const handleDelete = (index) => {
    const currentHK = housekeepers;
    const newHK = currentHK.filter((hk, idx) => {
      return idx !== index;
    });
    setHousekeepers(newHK);
    setOpen({ index: null });
  };

  const handleSave = (hk) => {
    console.log(hk);
  };

  return (
    <>
      <div className="flex flex-col p-[2rem] gap-[1.5rem] overflow-auto">

        {/* Backdrop */}
        {open.index != null && (<div onClick={handleClose} className="z-10 absolute top-0 left-0 inline-block w-full h-full"></div>)}

        {/* Popup when add housekeepers button is Clicked */}
        {addModal && <AddModal setAddModal={setAddModal} save={handleSave} />}
        
        {/* add housekeepers button */}
        <div>
          <Button onClick={() => setAddModal(true)} variant="contained" color="lightGreen" startIcon={<AddIcon />}>
            Add Housekeeper
          </Button>
        </div>

        {/* Housekeepers List */}

        {/* Container */}
        <div className="flex flex-col justify-start item bg-secondary min-h-[500px] rounded-[8px] border border-[1px] border-primaryfade shadow-lg">
          
          {/* Header */}
          <div className="text-[15px] p-[0.5rem] text-white">
            Housekeepers
          </div>

          {/* Body */}
          <div className="w-full h-full flex-1 bg-white flex flex-col">
            { housekeepers.map((h, idx) => (

              /* Row */
              <div className={`flex justify-between items-center px-4 py-2 border-b border-b-[1px] border-b-[#D9D9D9]`} key={idx}>
                
                {/* Housekeeper's name */}
                <div>
                  {h}
                </div>
                
                {/* Actions dropdown */}
                <div className={`${open.index === idx ? "z-50" : ""}`}>
                  <Button onClick={() => { handleActionClicked(idx)}} variant="contained" color="lightGray" endIcon={<Arrow />}>
                    Actions
                  </Button>
                  {open.index === idx && <ActionsDropdown handleDelete={handleDelete} idx={idx}/>}
                </div>
              </div>
              )
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default Housekeeper;
