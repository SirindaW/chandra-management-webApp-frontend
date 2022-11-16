import {dashboardUrl, calendarUrl, reservationUrl, housekeepUrl, ratesUrl, guestsUrl} from './pathUrl.js';

export const menu  = [
    { title: 'Dashboard', path: `${dashboardUrl}`},
    { title: 'Calendar', path: `${calendarUrl}`},
    { title: 'Reservation', path: `${reservationUrl}`},
    { title: 'Housekeeping', path: `${housekeepUrl}`},
    { title: 'Rates', path: `${ratesUrl}`},
    { title: 'Guests', path: `${guestsUrl}`},
];
// export const reservationGrid = [
//     {
//       headerText: 'Image',
//       template: gridOrderImage,
//       textAlign: 'Center',
//       width: '120',
//     },
//     {
//       field: 'OrderItems',
//       headerText: 'Item',
//       width: '150',
//       editType: 'dropdownedit',
//       textAlign: 'Center',
//     },
//     { field: 'CustomerName',
//       headerText: 'Customer Name',
//       width: '150',
//       textAlign: 'Center',
//     },
//     {
//       field: 'TotalAmount',
//       headerText: 'Total Amount',
//       format: 'C2',
//       textAlign: 'Center',
//       editType: 'numericedit',
//       width: '150',
//     },
//     {
//       headerText: 'Status',
//       template: gridOrderStatus,
//       field: 'OrderItems',
//       textAlign: 'Center',
//       width: '120',
//     },
//     {
//       field: 'OrderID',
//       headerText: 'Order ID',
//       width: '120',
//       textAlign: 'Center',
//     },
  
//     {
//       field: 'Location',
//       headerText: 'Location',
//       width: '150',
//       textAlign: 'Center',
//     },
//   ];