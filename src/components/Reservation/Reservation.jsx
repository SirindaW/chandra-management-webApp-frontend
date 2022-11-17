import React from 'react'
import FilterBox from '../Filterbox/FilterBox.jsx';
import {filterSelect_Guest} from "../../constants/text";

const Reservation = () => {
  return (
    <div>Reservation
      <FilterBox filter = {filterSelect_Guest}   />
    </div>
  )
}

export default Reservation