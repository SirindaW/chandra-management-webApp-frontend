import React from "react";
import { Button } from "@mui/material";
import addIcon from "../../images/housekeeping/addIcon.svg";
import arrow from "../../images/housekeeping/dropdownArrow.svg";
import { useState, useEffect } from "react";
import AddModal from "./AddModal";
import ActionsDropdown from "./ActionsDropdown";
import { CircularProgress } from "@mui/material";
import axios from "axios";

const Housekeeper = () => {

  const [housekeepers, setHousekeepers] = useState();
  const [open, setOpen] = useState({ index: null });
  const [addModal, setAddModal] = useState(false);
  const [editPopup, setEditPopup] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    axios.get("http://localhost:3001/api/admin/housekeeping/housekeepers").then((r)=>{
      setHousekeepers(r.data);
      setIsLoading(false);
    }) 
  }

  useEffect(()=>{
    fetchData();
  }, [])

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
      <div className="flex flex-col p-[2rem] gap-[1.5rem] max-h-[300px]">
        {/* Backdrop */}
        {open.index != null && (
          <div
            onClick={handleClose}
            className="z-10 absolute top-0 left-0 inline-block w-full h-full"
          ></div>
        )}

        {/* Popup when add housekeepers button is Clicked */}
        {addModal && <AddModal setAddModal={setAddModal} save={handleSave} />}

        {/* add housekeepers button */}
{/*         <div>
          <Button
            onClick={() => setAddModal(true)}
            variant="contained"
            color="lightGreen"
            startIcon={<AddIcon />}
          >
            Add Housekeeper
          </Button>
        </div> */}

        {/* Housekeepers List */}

        {/* Container */}
        <div className="flex flex-col justify-start item bg-secondary min-h-[500px] rounded-[8px] border border-[1px] border-primaryfade shadow-lg">
          {/* Header */}
          <div className="text-[15px] p-[0.5rem] text-white">Housekeepers</div>

          {/* Body */}
          <div className="w-full h-full flex-1 bg-white flex flex-col overflow-auto">
            {isLoading && (
              <div className="flex justify-center items-center w-full h-full mt-[12rem]">
                <CircularProgress />
              </div>
            )}
            {!isLoading &&
              housekeepers.map((h, idx) => (
                /* Row */
                <div
                  className={`flex justify-between items-center px-4 py-4 border-b border-b-[1px] border-b-[#D9D9D9]`}
                  key={idx}
                >
                  {/* Housekeeper's name */}
                  <div>{h.fname + " " + h.lname}</div>

                  {/* Actions dropdown */}
                  {/* <div className={`${open.index === idx ? "z-50" : ""}`}>
                    <Button
                      onClick={() => {
                        handleActionClicked(idx);
                      }}
                      variant="contained"
                      color="lightGray"
                      endIcon={<Arrow />}
                    >
                      Actions
                    </Button>
                    {open.index === idx && (
                      <ActionsDropdown handleDelete={handleDelete} idx={idx} />
                    )}
                  </div> */}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Housekeeper;
