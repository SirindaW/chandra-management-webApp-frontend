import React from "react";
import { MdEditNote } from "react-icons/md";

const ActiTable = ({ table: data, page }) => {
  const table = data[page];

  return (
    <table className="w-full text-left">
      <thead className="bg-lightGray">
        <tr>
          {data.head.map((h) => (
            <th key={h} className="border-r px-2">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-[14px]">
        {table.map((b) => 
          <>
            <tr key={b.fname} className="h-[50px] border-b">
              <td className="px-2">
                <div className="flex justify-start items-center gap-2">
                  <div className="font-extrabold text-[30px]">
                    <MdEditNote />
                  </div>
                  <div>{`${b.fname + " " + b.lname}`}</div>
                </div>
              </td>
              <td className="px-2">B {b.revenue}</td>
              <td className="px-2">{b.checkIn}</td>
              <td className="px-2">{b.nights}</td>
            </tr>
          </>
        )}
      </tbody>
    </table>
  );
};

export default ActiTable;
