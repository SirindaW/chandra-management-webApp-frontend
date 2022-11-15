import React from "react";
import styles from "./styles";
import { useState } from "react";
import { Button } from "@mui/material";
import { pageList } from "../../constants/text";
import Inspection from "./Inspection";

const Housekeeping = () => {
  const defaultFilter = {
    roomType: "",
    roomStatus: "",
    condition: "",
    frontdeskStatus: "",
    assignedTo: "",
  };
  const [page, setPage] = useState("Inspection");
  const [filter, setFilter] = useState(defaultFilter);
  // handle change for the filter bar
  const updateFilter = (e) => {
    console.log(e.target.value);
    setFilter(e.target.value);
  };


  return (
    <>
      <div class="flex justify-start items-center w-full h-[4rem] text-xl gap-[2rem] border-b border-b-1 border-b-[#A7A5A5]">
        {pageList.map((p, idx) => (
          <div
            key={idx}
            class={`w-fit h-full pt-[1rem] px-[0.5rem] ml-[1rem] ${
              page === p ? "border-b-[5px] border-b-[#D4990D]" : ""
            } transition-all`}
          >
            <Button
              sx={{
                fontSize: "20px",
                fontWeight: "400",
                width: "100%",
              }}
              onClick={() => {
                setPage(p);
              }}
            >
              {p}
            </Button>
          </div>
        ))}
      </div>

      { page === "Inspection" ? <Inspection/> : ""}

    </>
  );
};

export default Housekeeping;
