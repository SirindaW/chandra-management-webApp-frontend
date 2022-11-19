import React from "react";
import { useState } from "react";
import styles from "./styles";
import { TfiReload } from "react-icons/tfi";
import { AiFillPrinter, AiOutlineSearch } from "react-icons/ai";
import { Button, TextField, InputAdornment } from "@mui/material";
import { MdEditNote } from "react-icons/md"
import { GiExitDoor } from "react-icons/gi"

const StatBox = ({ title, number, styleContainer, styleNumber,styleTitle ,startAdornment }) => {
  return (
    <div className={`bg-white px-4 py-2 ${styleContainer ? styleContainer:"min-w-[350px] h-[100px] border border-lightGray shadow-xl rounded-xl"}`}>
      <div className={`${styleNumber ? styleNumber:"text-[36px]"}`}> {(startAdornment ? startAdornment:"") + " " + number}</div>
      <span className={`${styleTitle ? styleTitle:"text-[20px]"}`}> {title} </span>
    </div>
  );
};

const InformationBox = ({ children }) => {
  return (
    <div className="flex flex-col w-[600px] h-[600px] bg-secondary rounded-lg shadow-xl overflow-y-auto">
      {children}
    </div>
  );
};

const Home = () => {
  const defaultRESV = {
    arrivals: false,
    departures: false,
    stayovers: false,
  };

  const defaultACTI = {
    sales: false,
    sancellation: false,
  };

  const [inputText, setInputText] = useState("");
  const [isRESVClicked, setIsRESVClicked] = useState({...defaultRESV, arrivals: true});
  const [isACTIClicked, setIsACTIClicked] = useState({...defaultACTI, sales: true});

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(inputText);
    setInputText("");
  };
  const handlePageClick_RESV = (page) => {
    setIsRESVClicked({ ...defaultRESV, [page]: true });
  };
  const handlePageClick_ACTI = (page) => {
    setIsACTIClicked({ ...defaultACTI, [page]: true });
  };

  const RESV_pages = [
    { title: "Arrivals", onClick: () => {handlePageClick_RESV('arrivals')} },
    { title: "Departures", onClick: () => {handlePageClick_RESV('departures')} },
    { title: "Stayovers", onClick: () => {handlePageClick_RESV('stayovers')} },
  ];

  const ACTI_pages = [
    { title: "Sales", onClick: () => {handlePageClick_ACTI('sales')} },
    { title: "Cancellation", onClick: () => {handlePageClick_ACTI('cancellation')} },
  ];

  const pageActive = "bg-gray-100";

  return (
    <div className="w-full">
      <div className="flex justify-start items-center gap-[4.5rem] mt-8 mx-[9rem]">
        <StatBox title={"ARRIVALS"} number={"11"} />
        <StatBox title={"DEPARTURES"} number={"1"} />
        <StatBox title={"ACCOMMODATIONS BOOKED"} number={"12"} />
      </div>
      <div className="flex justify-start mx-[8rem] gap-[2rem] mt-8">

        <InformationBox>
          <div className="p-2 text-[#fff] text-[18px] font-bold flex justify-between items-center">
            <div>RESERVATION</div>
            <div className="flex gap-4">
              <div className="font-extrabold ">
                <TfiReload />
              </div>
              <div className="font-extrabold ">
                <AiFillPrinter />
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white p-2">
            <div className="w-full bg-lightGray flex justify-start items-center">
              {RESV_pages.map((page) => (
                <div
                  className={`flex justify-start items-center h-[40px] ${
                    isRESVClicked[page.title.toLowerCase()] && pageActive
                  }`}
                >
                  <Button
                    onClick={page.onClick}
                  >
                    {page.title}
                  </Button>
                </div>
              ))}
            </div>
            <div className="border-b border-b-lightGray mt-10 flex justify-between items-center mb-2">
              <div className="flex">
                <div>
                  <Button>Today</Button>
                </div>
                <div>
                  <Button>Tomorrow</Button>
                </div>
              </div>
              <div className="mb-1">
                <form onSubmit={handleSearch}>
                  <TextField
                    variant="standard"
                    placeholder="Guest Name"
                    value={inputText}
                    onChange={(e) => {
                      setInputText(e.target.value);
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <AiOutlineSearch />
                        </InputAdornment>
                      ),
                    }}
                  />
                </form>
              </div>
            </div>
            <table className="w-full text-left">
              <thead className="bg-lightGray">
                <tr>
                  <th className="border-r px-2">GUEST</th>
                  <th className="border-r px-2">CONF#</th>
                  <th className="border-r px-2">ROOM</th>
                  <th className="border-r px-2">STATUS</th>
                  <th className="w-[60px] px-2"></th>
                </tr>
              </thead>
              <tbody className="text-[14px]">
                <tr className="h-[50px] border-b">
                  <td className="px-2">Watcharaporn C</td>
                  <td className="px-2">1234567890</td>
                  <td className="px-2">DEL(1)</td>
                  <td className="px-2">Arrival</td>
                  <td className="px-2">
                    <div className="flex justify-start items-center px-1 text-[25px] gap-1">
                      <GiExitDoor/>
                      <AiFillPrinter/>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </InformationBox>

        <InformationBox>
          <div className="p-2 text-[#fff] text-[18px] font-bold flex justify-between items-center">
            <div>TODAY'S ACTIVITY</div>
            <div className="flex gap-4">
              <div className="font-extrabold ">
                <TfiReload />
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white p-2">
            <div className="w-full bg-lightGray flex justify-start items-center">
              {ACTI_pages.map((page) => (
                <div
                  className={`flex justify-start items-center h-[40px] ${
                    isACTIClicked[page.title.toLowerCase()] && pageActive
                  }`}
                >
                  <Button
                    onClick={page.onClick}
                  >
                    {page.title}
                  </Button>
                </div>
              ))}
            </div>
            <div className="flex justify-center border-b border-b-lightGray border-b-[2px]flex justify-between items-center">
              <StatBox title="BOOKED TODAY" number="2" styleContainer="w-[175px] h-[80px] mt-1" styleNumber="text-[26px]" styleTitle="text-[14px]"/>
              <StatBox title="ROOM NIGHTS" number="5" styleContainer="w-[175px] h-[80px] mt-1" styleNumber="text-[26px]" styleTitle="text-[14px]"/>
              <StatBox title="ROOM NIGHT" number="13950" startAdornment="B" styleContainer="w-[175px] h-[80px] mt-1" styleNumber="text-[26px]" styleTitle="text-[14px]"/>
            </div>
            <table className="w-full text-left">
              <thead className="bg-lightGray">
                <tr>
                  <th className="border-r px-2">GUEST</th>
                  <th className="border-r px-2">REVENUE</th>
                  <th className="border-r px-2">CHECK-IN</th>
                  <th className="border-r px-2">MIGHTS</th>
                </tr>
              </thead>
              <tbody className="text-[14px]">
                <tr className="h-[50px] border-b">
                  <td className="px-2">
                    <div className="flex justify-start items-center gap-2">
                      <div className="font-extrabold text-[30px]"><MdEditNote/></div>
                      <div>Watcharaporn C</div>
                    </div>
                  </td>
                  <td className="px-2">B 4770</td>
                  <td className="px-2">10/22/2022</td>
                  <td className="px-2">3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </InformationBox>

      </div>
    </div>
  );
};

export default Home;
