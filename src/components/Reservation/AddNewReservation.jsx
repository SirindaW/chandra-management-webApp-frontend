import React, { useState } from 'react';
import { NativePickers } from '../Filterbox/FilterBox.jsx';
import { Display_Type_list, Availability_header_list, Availability_dataMockup, reservation_info_list, tableHeaderList_payment } from '../../constants/text';

import Table from './Table.jsx';
import AddNewReservationSummary from './AddNewReservationSummary.jsx';

import Button from '@mui/material/Button';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import BedIcon from '@mui/icons-material/Bed';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { MultiSelect } from 'react-multi-select-component';

export function HorizontalLabelPositionBelowStepper({ step }) {
   const steps = ['Availability', 'Detalls', 'Payment'];
   return (
      <Box sx={{ width: '100%', mt: 5 }}>
         <Stepper activeStep={step} alternativeLabel a>
            {steps.map((label) => (
               <Step key={label}>
                  <StepLabel>{label}</StepLabel>
               </Step>
            ))}
         </Stepper>
      </Box>
   );
}

export const AddNewReservation = ({ isAdding, setIsAdding, bookingData, setBookingData }) => {
   const [checkInDate, setCheckInDate] = useState('');
   const [checkOutDate, setCheckOutDate] = useState('');
   const [selectedDisplay, setSelectedDisplay] = useState([]);
   const [selectedType, setSelectedType] = useState([]);
   const handle_selectedDisplay = (newFilter) => {
      setSelectedDisplay(newFilter);
   };
   const handle_selectedType = (newFilter) => {
      setSelectedType(newFilter);
   };
   const dateStates = [
      { state: selectedDisplay, setState: handle_selectedDisplay },
      { state: selectedType, setState: handle_selectedType },
   ];

   const [isSearchClicked, setIsSearchClicked] = useState(false);

   const [step, setStep] = useState(0);

   const [selectedRoom, setSelectedRoom] = useState([]);
   const [isAddedRoom, setIsAddedRoom] = useState(false);

   const [isBackToEditPaymentClicked, setIsBackToEditPaymentClicked] = useState(false);

   const [isBookingDetailsClicked, setIsBookingDetailsClicked] = useState(false);

   const [isConfirmAndPayClicked, setIsConfirmAndPayClicked] = useState(false);

   const [isConfirmReservationClicked, setIsConfirmReservationClicked] = useState(false);
   const [isSavedPaymentMethod, setIsSavedPaymentMethod] = useState(false);
   const [isBackInPaymentClicked, setIsBackInPaymentClicked] = useState(false);

   const [openDialog, setOpenDialog] = React.useState(false);

   const handleClickOpen = () => {
      setOpenDialog(true);
   };

   const handleClose = () => {
      setOpenDialog(false);
   };

   const [page, setPage] = useState('Card Number');

   const pageList = ['Card Number', 'Cash'];

   const handleSearchClick = () => {
      setIsSearchClicked(true);
   };

   const handleIsAddedRoom = (value) => {
      setIsAddedRoom(value);
   };

   const handleBookingDetailsClick = () => {
      setIsBookingDetailsClicked(true);
      setStep(1);
   };

   const handleConfirmClick = () => {
      setIsConfirmAndPayClicked(true);
      setStep(2);
   };

   const handleCancelClick = () => {
      setIsConfirmAndPayClicked(false);
      setIsBookingDetailsClicked(false);
      setStep(1);
   };

   const handleSavePaymentMethod = () => {
      setIsSavedPaymentMethod(true);
      setIsBackToEditPaymentClicked(false);
   };

   const handleConfirmReservationClick = () => {
      setIsConfirmReservationClicked(true);
      setStep(3);
      setIsAdding(false);
   };

   const handleIsBackToEditPaymentClicked = () => {
      setIsBackToEditPaymentClicked(true);
      setIsSavedPaymentMethod(false);
   };

   const handleBackInPaymentClick = () => {
      setIsBackInPaymentClicked(true);
      setIsConfirmAndPayClicked(false);
      setStep(1);
      setIsSavedPaymentMethod(false);
   };

   //===================================================== card number =====================================================
   const [cardNumber, setCardNumber] = useState('');
   const [cardExpiry, setCardExpiry] = useState('');
   const [cardCvc, setCardCvc] = useState('');
   const [cardHolder, setCardHolder] = useState('');
   // const [cardNumber, setCardNumber] = useState('cardNumber');
   // const [cardExpiry,setCardExpiry ] = useState('cardExpiry');
   // const [cardCvc, setCardCvc] = useState('cardCvc');
   // const [cardHolder, setCardHolder] = useState('cardHolder');
   const handleCardNameChange = (event) => {
      setCardHolder(event.target.value);
   };
   const handleCardNumberChange = (event) => {
      setCardNumber(event.target.value);
   };
   const handleCardExpiryChange = (event) => {
      setCardExpiry(event.target.value);
   };
   const handleCardCvcChange = (event) => {
      setCardCvc(event.target.value);
   };
   const handleClearCard = () => {
      setCardCvc('');
      setCardNumber('');
      setCardHolder('');
      setCardExpiry('');
      // setCardCvc('cardCvc');
      // setCardNumber('cardNumber');
      // setCardHolder('cardHolder');
      // setCardExpiry('cardExpiry');
   };

   const cardStates = [
      { state: cardNumber, setState: handleCardNumberChange },
      { state: cardExpiry, setState: handleCardExpiryChange },
      { state: cardCvc, setState: handleCardCvcChange },
      { state: cardHolder, setState: handleCardNameChange },
   ];

   // ===================================================== cash =====================================================
   const [cashierName, setCashierName] = useState('');
   const [cashierID, setCashierID] = useState('');
   const [drawerBalance, setDrawerBalance] = useState('');
   const [cashDrop, setCashDrop] = useState('');
   // const [cashierName, setCashierName] = useState('Cashier Name');
   // const [cashierID,setCashierID ] = useState('cashierID');
   // const [drawerBalance, setDrawerBalance] = useState('drawerBalance');
   // const [cashDrop, setCashDrop] = useState('cashDrop');
   const handleCashierNameChange = (event) => {
      setCashierName(event.target.value);
   };
   const handleCashierIDChange = (event) => {
      setCashierID(event.target.value);
   };
   const handleDrawerBalanceChange = (event) => {
      setDrawerBalance(event.target.value);
   };
   const handleCashDropChange = (event) => {
      setCashDrop(event.target.value);
   };
   const handleClearCash = () => {
      setCashierName('');
      setCashierID('');
      setDrawerBalance('');
      setCashDrop('');
   };

   const cashStates = [
      { state: cashierName, setState: handleCashierNameChange },
      { state: cashierID, setState: handleCashierIDChange },
      { state: drawerBalance, setState: handleDrawerBalanceChange },
      { state: cashDrop, setState: handleCashDropChange },
   ];

   // ===================================================== end cash =====================================================

   //===================================================== card number =====================================================
   // const handleClearPaymentMethod (value) => {
   //   hand
   // };

   return (
      <>
         {' '}
         <HorizontalLabelPositionBelowStepper step={step} />
         {!isBookingDetailsClicked && (
            <div className="flex md:flex-row flex-col justify-around mx-72 mt-10 mb-10 ">
               <NativePickers title="Check In" date={checkInDate} onChange={setCheckInDate} />
               <NativePickers title="Check Out" date={checkOutDate} onChange={setCheckOutDate} />
               {checkInDate != '' && checkOutDate != '' && (
                  <Button variant="contained" sx={{ backgroundColor: '#27BE5A', my: '15px' }} onClick={handleSearchClick}>
                     SEARCH
                  </Button>
               )}
            </div>
         )}
         {!isBookingDetailsClicked && isSearchClicked && checkInDate !== '' && checkOutDate !== '' ? (
            <>
               <div className="my-2 shadow-lg border-t py-10 mt-10 flex md:flex-row flex-col md:justify-evenly items-center">
                  {Display_Type_list.map((select, index) => (
                     <div key={index}>
                        <div>{select.label}</div>
                        <MultiSelect className="w-[600px]" options={select.options} value={dateStates[index].state} onChange={dateStates[index].setState} labelledBy={select.label} />
                     </div>
                  ))}
               </div>
               <div className="flex flex-row justify-evenly">
                  {/* Table = ({tableName,header,data}) */}
                  <Table tableName="Availability" header={Availability_header_list} data={Availability_dataMockup} />
               </div>

               <div className="mt-5 flex flex-row justify-end mr-16">
                  <Button variant="contained" sx={{ backgroundColor: '#27BE5A' }} onClick={handleBookingDetailsClick}>
                     BOOKING DETAILS
                  </Button>
               </div>
            </>
         ) : !isBookingDetailsClicked ? (
            <div className="flex flex-row justify-center justify-items-center my-24">
               <div className="flex flex-col justify-center w-[600px] h-[600px] rounded-full bg-[#D9D9D9]">
                  <div className="flex flex-row justify-center">
                     <EventAvailableIcon sx={{ fontSize: 200 }} />
                  </div>
                  <p className="text-center text-xl px-32 ">Check-in and Check-Out dates to search for availability</p>
               </div>
            </div>
         ) : (
            <></>
         )}
         {!isConfirmAndPayClicked && isBookingDetailsClicked && (
            <>
               <div className="flex flex-col md:flex-row justify-center items-center">
                  <Table tableName="GUEST INFORMATION" header="null" data={reservation_info_list} />
                  <Table tableName="Additional Details and Preferences" header="null" data={['Add note here']} />
               </div>
               <div className="mt-5 flex flex-row space-x-4 justify-end mr-16">
                  <Button variant="contained" sx={{ backgroundColor: '#9A9A9A' }} onClick={handleCancelClick}>
                     BACK
                  </Button>
                  <Button variant="contained" sx={{ backgroundColor: '#27BE5A' }} onClick={handleConfirmClick}>
                     CONFIRM & PAY
                  </Button>
               </div>
            </>
         )}
         {!isSavedPaymentMethod && isConfirmAndPayClicked && !isConfirmReservationClicked && (
            <>
               <div className="flex justify-start items-center w-full h-[4rem] my-10 text-xl gap-[2rem] border-y border-b-1 border-b-[#A7A5A5]">
                  {pageList.map((p, idx) => (
                     <div key={idx} className={`w-fit h-full pt-[1rem] px-[0.5rem] ml-[1rem] ${page === p ? 'border-b-[5px] border-b-[#D4990D]' : ''} transition-all`}>
                        <Button
                           sx={{
                              fontSize: '20px',
                              fontWeight: '400',
                              width: '100%',
                           }}
                           onClick={() => {
                              setPage(p);
                           }}
                        >
                           {p}
                        </Button>
                     </div>
                  ))}
               </div>
               <div className="lg:w-500 w-800 mx-[500px]">
                  {page === 'Card Number' ? (
                     <>
                        <Table tableName="Payment Information" header="null" data={['NUMBER', 'EXP', 'CVV', 'NAME ON CARD']} states={cardStates} />
                     </>
                  ) : (
                     <>
                        <Table tableName="Payment Information" header="null" data={['Cashier Name', 'Cashier ID', 'Drawer Balance', 'Cash Drop']} states={cashStates} />
                     </>
                  )}
                  <div className="my-5 flex flex-row space-x-4 justify-end mr-16">
                     {page === 'Card Number' && (
                        <Button variant="contained" sx={{ backgroundColor: '#9A9A9A' }} onClick={handleClearCard}>
                           CLEAR
                        </Button>
                     )}
                     {page === 'Cash' && (
                        <Button variant="contained" sx={{ backgroundColor: '#9A9A9A' }} onClick={handleClearCash}>
                           CLEAR
                        </Button>
                     )}
                     <Button variant="contained" sx={{ backgroundColor: '#D4990D' }} onClick={handleSavePaymentMethod}>
                        SAVE
                     </Button>
                  </div>
                  <hr></hr>
               </div>
               <div className="mt-5 flex flex-row space-x-4 justify-end mr-16">
                  <Button variant="contained" sx={{ backgroundColor: '#9A9A9A' }} onClick={handleBackInPaymentClick}>
                     BACK
                  </Button>
               </div>
            </>
         )}
         {isSavedPaymentMethod && !isConfirmReservationClicked && !isBackToEditPaymentClicked && (
            <>
               <AddNewReservationSummary />
               <div className="mt-5 flex flex-row space-x-4 justify-end mr-16">
                  <Button variant="contained" sx={{ backgroundColor: '#9A9A9A' }} onClick={handleIsBackToEditPaymentClicked}>
                     BACK
                  </Button>
                  <Button variant="contained" sx={{ backgroundColor: '#27BE5A' }} onClick={handleClickOpen}>
                     CONFIRM RESERVATION
                  </Button>

                  <Dialog open={openDialog} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                     <DialogTitle id="alert-dialog-title">{'SEND RESERVATION CONFIRMATION'}</DialogTitle>
                     <DialogContent>
                        <DialogContentText id="alert-dialog-description">Do you want to send a confirmation email to Krisada Prasertphakdee ?</DialogContentText>
                     </DialogContent>
                     <DialogActions>
                        <Button onClick={handleClose}>CANCEL</Button>
                        <Button onClick={handleConfirmReservationClick} autoFocus>
                           SEND AND CONTINUE
                        </Button>
                     </DialogActions>
                  </Dialog>
               </div>
            </>
         )}
      </>
   );
};
export default AddNewReservation;
