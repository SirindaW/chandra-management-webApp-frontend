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