import {
  dashboardUrl,
  calendarUrl,
  reservationUrl,
  housekeepUrl,
  guestsUrl,
} from "./pathUrl.js";

export const menu = [
  { title: "Dashboard", path: `${dashboardUrl}` },
  { title: "Calendar", path: `${calendarUrl}` },
  { title: "Reservation", path: `${reservationUrl}` },
  { title: "Housekeeping", path: `${housekeepUrl}` },
  { title: "Guests", path: `${guestsUrl}` },
];

// House Keeping - Inspection page

export const pageList = ["Inspection", "Housekeepers"];

export const filterSelect = [
  {
    label: "Room Type",
    options: [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
    ],
  },
  {
    label: "Room status",
    options: [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
    ],
  },
  {
    label: "Room Condition",
    options: [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
    ],
  },
  {
    label: "Frontdeak status",
    options: [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
    ],
  },
  {
    label: "Assigned to",
    options: [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
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

//Guests

export const filterSelect_Guest = [
    {
        title: 'New or Attended guests',
        items: [
            'New', 
            'Attended'
        ]
    },
    {
        title: 'Country',
        items: [
            'Thailand',
            'USA',
            'UK',
            'Canada',
            'France',
            'Australia',
            'Germany',
            'Italy',
            'Spain',
            'China',
            'India'
        ]
    },
    {
        title: 'Guest Status',
        items: [
            'Confirmed',
            'Cancelled',
            'Stayover',
            'Checked Out'
        ]
    }
];


export const tableHeaderList_Guests = [
    "NAME",
    "EMAIL", 
    "PHONE", 
    "COUNTRY", 
    "ATTENDED GUEST", 
    "GUEST STATUS"
];
export const guestDetails = [
    {
        title: "Check-In",
        value: "10/23/2022" //dummie value, we have to use API from backend to get value from DB
    },
    {
        title: "Check-Out",
        value: "10/25/2022" //dummie value, we have to use API from backend to get value from DB
    },
    {
        title: "Nights",
        value: "2" //dummie value, we have to use API from backend to get value from DB
    },
    {
        title: "Reservation date",
        value: "10/22/2022" //dummie value, we have to use API from backend to get value from DB
    },
    {
        title: "Guests",
        value: "2" //dummie value, we have to use API from backend to get value from DB
    }
];
export const navList_specific_guest = [
    "Accommodation",
    "Guest Datails", 
    "Notes", 
];

export const tableHeaderList_Accommodation = [ //header for guest_accomodation table
    "RES ID",
    "TYPE",
    "ROOM #",
    "ARRIVAL",
    "DEPARTURE",
    "GUEST(S)",
    "NIGHT(S)",
    "TOTAL",
];
export const tableHeaderList_specific_Guest_detail = [ // header for guest_main and specific_guest_detail and reservation table
    "FIRST NAME",
    "LAST NAME",
    "EMAIL",
    "PHONE",
    "COUNTRY",
    "ATTENDED GUEST",
    "GUEST STATUS"
];

export const guestsDetailDataMockUp=[ //for guest_accomodation table
    // {
        // RES_ID: 1,
        // TYPE: "BeachHouse" ,
        // ROOM_NUM: "111",
        // ARRIVAL: "2022-11-01",
        // DEPARTURE:  "2022-11-03" ,
        // GUESTS: 2,
        // NIGHTS: 2,
        // TOTAL: 1300,
    //         // "EDIT"
    // },
    // {
    //     RES_ID: 2,
    //     TYPE: "BeachHouse" ,
    //     ROOM_NUM: "112",
    //     ARRIVAL: "2022-11-01",
    //     DEPARTURE:  "2022-11-03" ,
    //     GUESTS: 2,
    //     NIGHTS: 2,
    //     TOTAL: 1300,
    // }
    [
        1,
        "BeachHouse" ,
        "111",
        "2022-11-01",
        "2022-11-03" ,
        2,
        2,
        1300
    ],
    [
        2,
        "BeachHouse" ,
        "112",
        "2022-11-01",
        "2022-11-03" ,
        2,
        2,
        1300
    ]
];

export const guestMainDataMockUp = [ //for guest_main and specific_guest_detail and reservation table
    // {
    //     fname:"Jonh",
    //     lname:"Doe",
    //     email:"JohnDoe@gmail.com",
    //     phone:"0234567891",
    //     country:"USA",
    //     attended:"Yes",
    //     status:"Checked Out"
    // },
    // {
    //     fname:"Somsri",
    //     lname:"Thangdee",
    //     email:"SomsriThangdee@gmail.com",
    //     phone:"0298765432",
    //     country:"Thailand",
    //     attended:"No",
    //     status:"Checked Out"
    // }
    [
        "Jonh",
        "Doe",
        "JohnDoe@gmail.com",
        "0234567891",
        "USA",
        "Yes",
        "Checked Out"
    ],
    [
        "Somsri",
        "Lee",
        "SomsriLee@gmail.com",
        "0234567891",
        "China",
        "No",
        "Confirmed"
    ]
];

//Reservation
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
