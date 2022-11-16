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