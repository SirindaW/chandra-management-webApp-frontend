import React from 'react';
const GreyBox = ({parentName,header,data}) => {
    return(
        <>
            <table className="w-full table-auto bg-white overflow-scroll">
            <thead className="h-[47px] w-full bg-[#D9D9D9]">
              <tr>
                {header.map((h, idx) => (
                  <th
                    key={idx}
                    className={
                      idx !== header.length - 1
                        && "border-r border-r-[1px] border-r-[#9A9A9A]"
                    }
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((d,idx) => (
                <tr key={idx} className="text-center hover:cursor-pointer">
                  {d.map((v) => (
                    <td className="h-[65px] border-b border-gray-200 ">{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
    );
}
export default GreyBox;