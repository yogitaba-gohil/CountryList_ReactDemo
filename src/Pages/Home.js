import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCountry } from "../features/country/countrySlice";
import CountryList from "../components/CountryList/CountryList";
import Header from "../components/Header/Header";
import { getList } from "../services/list";

const Home = () => {
  const [list, setList] = useState([]);
  const [searchValue, setSearchValue] = useState("")

  const dispatch = useDispatch();
  const  handleChange = (event) => {
    setSearchValue(event);
  }
console.log('searchValue', searchValue)

  useEffect(() => {
    let mounted = true;
    getList().then((items) => {
      if (mounted) {
        setList(items);
        dispatch(addCountry(items));
      }
    });
  
    return () => (mounted = false); 
  }, []);

  return (
    <div>
      <Header handleChange={handleChange} />
      <CountryList list={list} searchValue={searchValue}  />
    </div>
  );
};

export default Home;
