import React from 'react'
import BasicTable from './BasicTable'

const CountryList = ({ searchValue}) => {
  return (
    <div><BasicTable  searchValue={searchValue}/>
    </div>
  )
}

export default CountryList;