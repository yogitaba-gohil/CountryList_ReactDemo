import React from 'react'
import BasicTable from './BasicTable'

const CountryList = ({list, searchValue}) => {
  return (
    <div><BasicTable country={list} searchValue={searchValue}/>
    </div>
  )
}

export default CountryList;