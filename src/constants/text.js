import {
  dashboardUrl,
  calendarUrl,
  reservationUrl,
  housekeepUrl,
  ratesUrl,
  guestsUrl,
} from "./pathUrl.js";

import moment from "moment";

export const menu = [
  { title: "Dashboard", path: `${dashboardUrl}` },
  { title: "Calendar", path: `${calendarUrl}` },
  { title: "Reservation", path: `${reservationUrl}` },
  { title: "Housekeeping", path: `${housekeepUrl}` },
  { title: "Rates", path: `${ratesUrl}` },
  { title: "Guests", path: `${guestsUrl}` },
];

// House Keeping - Inspection page

export const pageList = ["Inspection", "Housekeepers"];

export const filterSelect = [
  {
    label: "Room Type",
    options: [
      { label: "SUP", value: "sup" },
      { label: "DEL", value: "del" },
      { label: "BEH", value: "beh" },
      { label: "FAM", value: "fam" },
    ],
  },
  {
    label: "Room status",
    options: [
      { label: "Vacant", value: "vacant" },
      { label: "Occupied", value: "occupied" },
    ],
  },
  {
    label: "Room Condition",
    options: [
      { label: "Clean", value: "clean" },
      { label: "Dirty", value: "dirty" },
    ],
  },
  {
    label: "Frontdeak status",
    options: [
      { label: "NOT-RESERVED", value: "notRerserve" },
      { label: "CHECK-IN", value: "checkIn" },
      { label: "CHECK-OUT", value: "checkOut" },
    ],
  },
];

export const tableHeaderList = [
  "ROOM",
  "TYPE",
  "CONDITION",
  "ROOM STATUS",
  "ARRIVAL DATE",
  "DEPARTURE DATE",
  "FRONTDESK STATUS",
  "ASSIGNED TO",
  "DO NOT DISTURB",
  "COMMENTS",
];

export const InspDataMockup = [
  {
    room: "SUP(1)",
    type: "SUP",
    condition: "clean",
    roomStatus: "vacant",
    arrivalData: "10/22/2022",
    departureDate: "10/25/2022",
    frontdeskStatus: "Ckeck-in",
    assignedTo: "Susy",
    donotDisturb: "false",
    comments: ["Lovely room"],
  },
  {
    room: "SUP(1)",
    type: "SUP",
    condition: "clean",
    roomStatus: "vacant",
    arrivalData: "10/22/2022",
    departureDate: "10/25/2022",
    frontdeskStatus: "Ckeck-in",
    assignedTo: "Susy",
    donotDisturb: "false",
    comments: ["Lovely room"],
  },
  {
    room: "SUP(1)",
    type: "SUP",
    condition: "clean",
    roomStatus: "vacant",
    arrivalData: "10/22/2022",
    departureDate: "10/25/2022",
    frontdeskStatus: "Ckeck-in",
    assignedTo: "Susy",
    donotDisturb: "false",
    comments: ["Lovely room"],
  },
];

export const table = {
  head: ["GUEST", "CONF#", "ROOM", "STATUS", ""],
  body: {
    arrivals: {
      today: [
        {
          fname: "Watcharaporn",
          lname: "C",
          conf: "1234567890",
          room: "DEL(1)",
          status: "Arrival",
        },
        {
          fname: "Chanwanit",
          lname: "Nuchyoo",
          conf: "7777777777",
          room: "DEL(2)",
          status: "Arrival",
        },
      ],
      tomorrow: [
        {
          fname: "Coby",
          lname: "Paterson",
          conf: "1234567890",
          room: "DEL(1)",
          status: "Arrival",
        },
        {
          fname: "Antony",
          lname: "Finnegan",
          conf: "7777777777",
          room: "DEL(2)",
          status: "Arrival",
        },
      ],
    },
    departures: {
      today: [
        {
          fname: "Rowan",
          lname: "Horn",
          conf: "1234567890",
          room: "DEL(1)",
          status: "Arrival",
        },
        {
          fname: "Aine",
          lname: "Pitts",
          conf: "7777777777",
          room: "DEL(2)",
          status: "Arrival",
        },
      ],
      tomorrow: [
        {
          fname: "Eadie",
          lname: "Mooney",
          conf: "1234567890",
          room: "DEL(1)",
          status: "Arrival",
        },
        {
          fname: "Ritik",
          lname: "Sawyer",
          conf: "7777777777",
          room: "DEL(2)",
          status: "Arrival",
        },
      ],
    },
    stayovers: {
      today: [
        {
          fname: "Clarissa",
          lname: "Wainwright",
          conf: "1234567890",
          room: "DEL(1)",
          status: "Arrival",
        },
        {
          fname: "Suzanna",
          lname: "Broadhurst",
          conf: "7777777777",
          room: "DEL(2)",
          status: "Arrival",
        },
      ],
      tomorrow: [
        {
          fname: "Cydney",
          lname: "Coulson",
          conf: "1234567890",
          room: "DEL(1)",
          status: "Arrival",
        },
        {
          fname: "Arun",
          lname: "Camacho",
          conf: "7777777777",
          room: "DEL(2)",
          status: "Arrival",
        },
      ],
    },
  },
};

export const table2 = {
    head: ["GUEST", "REVENUE", "CHECK-IN", "NIGHTS"],
    sales: [
        {
            fname: "Alan",
            lname: "Lees",
            revenue: "4770",
            checkIn: "10/22/2022",
            nights: "3",
        },
        {
            fname: "Raihan",
            lname: "Lester",
            revenue: "9180",
            checkIn: "10/22/2022",
            nights: "4",
        }
    ],
    cancellation: [
        {
            fname: "Ronny",
            lname: "Akhtar",
            revenue: "9999",
            checkIn: "10/22/2022",
            nights: "5",
        },
        {
            fname: "Ieuan",
            lname: "Cunningham",
            revenue: "5899",
            checkIn: "10/22/2022",
            nights: "4",
        }
    ],
}

export const Calendar_DB_Data = [
  {
    roomType: "Superior Room",
    data: [6,7,0,9,15,11,9,8,12,2,2,7,0,9]
  },
  {
    roomType: "Deluxe Room",
    data: [5,2,5,2,2,3,9,2,1,3,6,4,2,5]
  },
  {
    roomType: "Beach House",
    data: [2,1,3,0,0,1,0,0,0,1,1,1,0,2]
  },
  {
    roomType: "Family Premium",
    data: [2,1,0,0,0,3,1,2,1,0,1,0,0,2]
  }
]

const today = moment();
const dateList = [...Array(14)].map((d, index) => moment(today).add(index, "days"))
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

const labels = dateList.map((e,index)=> e.format('ddd') + " " + dayOrdinalSF(e.format("D")))

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '',
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: 'Booked Rooms',
      data: [50,30,40,55,15,20,25,25,40,50,50,30,25,20],
      borderColor: 'rgb(212, 153, 13)',
      backgroundColor: 'rgba(212, 153, 13, 0.5)',
    },
  ],
};
 