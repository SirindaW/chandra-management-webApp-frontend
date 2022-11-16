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
        options: ["Nothing Selected"]
    },
    {
        label: "Room status",
        options: ["Nothing Selected"]
    },
    {
        label: "Room Condition",
        options: ["Nothing Selected"]
    },
    {
        label: "Frontdeak status",
        options: ["Nothing Selected"]
    },
    {
        label: "Assigned to",
        options: ["Nothing Selected"]
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
