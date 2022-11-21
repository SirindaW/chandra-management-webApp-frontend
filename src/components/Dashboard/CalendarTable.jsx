import React from "react";

const CalendarTable = ({dateList,data}) => {
  
  const dayOrdinalSF = (date) => {
    const _date = parseInt(date);
    const lastNumber = _date % 10;
    switch (lastNumber) {
      case 1:
        return date + " st";
      case 2:
        return date + " nd";
      case 3:
        return date + " rd";
      default:
        return date + " th";
    }
  };

  return (
    <table className="mx-4 h-full ">
      <thead className="border-b-[2px] border-b-lightGray h-[90px]">
        <th className="w-[200px]"></th>
        {dateList.map((d, index) => (
          <th key={d.format("L")} className="w-[90px]" >
            <div className="flex flex-col justify-center items-center">
              {index === 0 ? (
                <>
                  <div className="font-thin">{d.format("MMM") + " " + d.format("YYYY")}</div>
                  <div className="font-normal">{d.format("ddd")}</div>
                  <div className="font-thin">{dayOrdinalSF(d.format("D"))}</div>
                </>
              ) : (
                <>
                  <div className="font-thin">{dateList[index-1].format("MMM") !== d.format("MMM") ? d.format("MMM") + " " + d.format("YYYY"): <br/>}</div>
                  <div className="font-normal">{d.format("ddd")}</div>
                  <div className="font-thin">{dayOrdinalSF(d.format("D"))}</div>
                </>
              )}
            </div>
          </th>
        ))}
      </thead>
      <tbody>
        {data.map((d,index)=> (
          <tr key={d.roomType} className={`${index === data.length-1 ? "": "border-b border-b-lightGray" } leading-[40px]`}>
            <td>{d.roomType}</td>
            {d.data.map((da,index)=>(
              <td key={index}>
                <div className="w-full h-full flex justify-center items-center">
                  <div className={`w-[50px] h-[30px] flex justify-center items-center rounded-[20px] ${da === 0 ? "bg-red-600": ""}`}>{da + ""}</div>
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CalendarTable;
