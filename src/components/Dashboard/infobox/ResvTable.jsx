import React from "react";
import { GiExitDoor } from "react-icons/gi";
import { AiFillPrinter } from "react-icons/ai";

const ResvTable = ({ table: data, today, page, nameFilter }) => {
  let table = today ? data.body[page].today : data.body[page].tomorrow;
  if (nameFilter !== "") {
    table = table.filter((el) => {
      return `${el.fname + " " + el.lname}`.includes(nameFilter);
    });
  }

  return (
    <table className="w-full text-left">
      <thead className="bg-lightGray">
        <tr>
          {data.head.map((h, index) => (
            <th
              key={h}
              className={`px-2 ${
                index === data.head.length - 1
                  ? ""
                  : "border-r border-r-lightGray]"
              }`}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-[14px]">
        {table.map((b) => (
          <tr key={b.fname} className="h-[50px] border-b">
            <td className="px-2 w-[200px]">{b.fname + " " + b.lname}</td>
            <td className="px-2">{b.conf}</td>
            <td className="px-2">{b.room}</td>
            <td className="px-2">{b.status}</td>
            <td className="px-2">
              <div className="flex justify-start items-center px-1 text-[25px] gap-1">
                <GiExitDoor />
                <AiFillPrinter />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResvTable;
