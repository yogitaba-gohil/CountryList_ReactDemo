import React from 'react'
import BasicTable from './BasicTable'

const CountryList = ({list}) => {
  return (
    <div><BasicTable country={list} />
    </div>
  )
}

export default CountryList;