import React from "react";
import { Button } from "@mui/material"

const ActionsDropdown = ({handleDelete,idx}) => {
  return (
    <div className="absolute z-50 flex flex-col bg-white border border-[#D9D9D9]">
      <div className="border-b border-b-[#D9D9D9]">
        <Button sx={{ width: "100px" }}>Edit</Button>
      </div>
      <div>
        <Button
          sx={{ width: "100px" }}
          onClick={() => {
            handleDelete(idx);
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ActionsDropdown;
