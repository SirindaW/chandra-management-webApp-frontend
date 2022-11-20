import React from 'react'
import FilterBox from '../Filterbox/FilterBox.jsx';
import {filterSelect_Guest,tableHeaderList_Accommodation,guestsDetailDataMockUp} from "../../constants/text";
import Table from './Table.jsx';

const Reservation = () => {
  return (
    <div>Reservation
      <FilterBox filter = {filterSelect_Guest}   />
      <Table tableName="Reservation" header={tableHeaderList_Accommodation} data={guestsDetailDataMockUp}/>
    </div>
  )
}

export default Reservation