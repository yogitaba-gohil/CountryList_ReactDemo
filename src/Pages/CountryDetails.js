import React, {useEffect, useState} from 'react'
import {
    useParams
  } from "react-router-dom";
  import {getCountry} from '../services/countryDetails'


const CountryDetails = ()  => {
    const { name } = useParams();
    const[countryDetails,setCountryDetails] = useState([])

    useEffect(() => {
      if(name) {
       const post = getCountry(name).then( data => { 
         return data;
      });
      console.log('post', post)
      setCountryDetails(post);
      } 
      console.log('countryDetails', countryDetails)
  
}, [])
  
  return (
    <div>

  <div class="container">
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <img src="#"  alt="profile"/>
      <h1></h1>
    </div>
  </nav>
</div>
    </div>
   
  )
}

export default CountryDetails