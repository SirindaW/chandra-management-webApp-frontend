import React from "react";
import { TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const AddModal = ({ setAddModal, save }) => {
  const defaultForm = {
    name: "",
    birthDay: "",
    mobilePhone: "",
    startDate: "",
  };

  const [housekeeperForm, setHousekeeperForm] = useState(defaultForm);

  const handleNameInput = (e)=>{
    setHousekeeperForm({...housekeeperForm, name:e.target.value})
  }

  const handleBirthDayInput =  (e)=>{
    setHousekeeperForm({...housekeeperForm, birthDay: e.target.value})
  }

  const handleMobilePhoneInput =  (e)=>{
    setHousekeeperForm({...housekeeperForm, mobilePhone: e.target.value})
  }

  const handleStartDateInput = (e)=>{
    setHousekeeperForm({...housekeeperForm, startDate:e.target.value})
  }

  const handleSave = () => {
    save(housekeeperForm);
    setHousekeeperForm(defaultForm);
    setAddModal(false);
  };

  const handleCancle = () => {
    setHousekeeperForm(defaultForm);
    setAddModal(false);
  };

  return (
    <>
      <div className="absolute top-0 left-0 z-50 flex justify-center items-center w-full h-full">
        <div className="w-[608px] h-[368px] inline-block bg-white shadow-xl cursor-pointer border rounded-[8px]">
          
          {/* Form */}
          <form onSubmit={handleSave}>

            {/* Container */}
            <div className="flex flex-col pb-4">
            
              {/* Header and Close Icon */}
              <div className="flex justify-between items-center h-[58px] w-full px-[1rem] border-b border-b-[#A7A5A5]">
                <div>Add Housekeeper</div>
                <div><CloseIcon onClick={handleCancle} /></div>
              </div>

              {/* first row: name inputfield */}
              <div className="px-[1rem] p-[1rem] flex flex-col justify-start items-start w-full">
                <label htmlFor="name">Name</label>
                <TextField
                  value={housekeeperForm.name}
                  onChange={handleNameInput}
                  id="name"
                  variant="standard"
                  placeholder="Type Name Here"
                  required
                  sx={{ width: "100%" }}
                />
              </div>

              {/* Second row : Birthday input field , Mobilephone number inputfield */}
              <div className="flex justify-start gap-[1rem] items-start px-[1rem]">
                <div className="flex flex-col justify-start items-start w-full">
                  <label htmlFor="name">Birthday</label>
                  <TextField
                    value={housekeeperForm.birthDay}
                    onChange={handleBirthDayInput}
                    id="birthday"
                    variant="standard"
                    placeholder="Pick Your Birthday"
                    type="date"
                    required
                    sx={{ width: "100%" }}
                  />
                </div>
                <div className="flex flex-col justify-start items-start w-full">
                  <label htmlFor="name">Mobile Phone</label>
                  <TextField
                    value={housekeeperForm.mobilePhone}
                    onChange={handleMobilePhoneInput}
                    id="mobilephone"
                    variant="standard"
                    placeholder="Type Phone Number Here"
                    required
                    sx={{ width: "100%" }}
                  />
                </div>
              </div>

              {/* Third row : State date input field */}
              <div className="flex flex-col justify-start items-start p-[1rem]">
                <label htmlFor="name">Start Date</label>
                <TextField
                  value={housekeeperForm.startDate}
                  onChange={handleStartDateInput}
                  id="birthday"
                  variant="standard"
                  placeholder="Pick Your Birthday"
                  type="date"
                  required
                  sx={{ width: "279px" }}
                />
              </div>

              {/* Forth row : Save Button , Cancle Button */}
              <div className="flex justify-end items-end p-[1rem] border-t border-t-[1px] border-t-[#A7A5A5] gap-4">
                <Button type="submit" variant="contained" color="secondary" sx={{ borderRadius: "30px" }}>
                  SAVE
                </Button>
                <Button onClick={handleCancle} variant="contained" color="lightGray" sx={{ borderRadius: "30px" }}>
                  CANCLE
                </Button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddModal;
