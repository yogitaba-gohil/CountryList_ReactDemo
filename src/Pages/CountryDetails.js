import React from 'react'
import {
    useParams
  } from "react-router-dom";
  import {getCountry} from '../services/countryDetails'


const CountryDetails = () => {
    const { name } = useParams();
  const post = getCountry(name);
  return (
    <div>CountryDetails</div>
  )
}

export default CountryDetails