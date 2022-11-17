import {dashboardUrl, calendarUrl, reservationUrl, housekeepUrl, ratesUrl, guestsUrl} from './pathUrl.js';

export const menu  = [
    { title: 'Dashboard', path: `${dashboardUrl}`},
    { title: 'Calendar', path: `${calendarUrl}`},
    { title: 'Reservation', path: `${reservationUrl}`},
    { title: 'Housekeeping', path: `${housekeepUrl}`},
    { title: 'Rates', path: `${ratesUrl}`},
    { title: 'Guests', path: `${guestsUrl}`},
]


// House Keeping - Inspection page

export const pageList = ["Inspection", "Housekeepers"];

export const filterSelect = [
    { 
        label: "Room Type",
        options: [
            {label:"1", value: "1"},
            {label:"2", value: "2"},
            {label:"3", value: "3"},
            {label:"4", value: "4"},
            {label:"5", value: "5"},
        ]
    },
    {
        label: "Room status",
        options: [
            {label:"1", value: "1"},
            {label:"2", value: "2"},
            {label:"3", value: "3"},
            {label:"4", value: "4"},
            {label:"5", value: "5"},
        ]
    },
    {
        label: "Room Condition",
        options: [
            {label:"1", value: "1"},
            {label:"2", value: "2"},
            {label:"3", value: "3"},
            {label:"4", value: "4"},
            {label:"5", value: "5"},
        ]
    },
    {
        label: "Frontdeak status",
        options: [
            {label:"1", value: "1"},
            {label:"2", value: "2"},
            {label:"3", value: "3"},
            {label:"4", value: "4"},
            {label:"5", value: "5"},
        ]
    },
    {
        label: "Assigned to",
        options: [
            {label:"1", value: "1"},
            {label:"2", value: "2"},
            {label:"3", value: "3"},
            {label:"4", value: "4"},
            {label:"5", value: "5"},
        ]
    }
]

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
]

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
    "Credit Cards", 
    "Notes", 
];

export const tableHeaderList_Accommodation = [
    "RES ID",
    "TYPE",
    "ROOM #",
    "ARRIVAL",
    "DEPARTURE",
    "GUEST(S)",
    "NIGHT(S)",
    "TOTAL",
    "EDIT"
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
    }
  ];
