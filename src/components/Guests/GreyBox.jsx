import React from 'react';
const GreyBox = ({parentName,header,data}) => {
    return(
        <>
            <table className="w-full table-auto bg-white">
            <thead className="h-[47px] bg-[#D9D9D9]">
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
                <tr key={idx} className="text-center">

                  <td className="h-[65px]">{d.info.RES_ID}</td>
                  <td className="h-[65px]">{d.info.TYPE}</td>
                  <td className="h-[65px]">{d.info.ROOM_NUM}</td>
                  <td className="h-[65px]">{d.info.ARRIVAL}</td>
                  <td className="h-[65px]">{d.info.DEPARTURE}</td>
                  <td className="h-[65px]">{d.info.GUESTS}</td>
                  <td className="h-[65px]">{d.info.NIGHTS}</td>
                  <td className="h-[65px]">{d.info.TOTAL}</td>
                  {/* <td className="h-[65px]">comments</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </>
    );
}
export default GreyBox;