import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCountry, filterCoutry } from "../features/country/countrySlice";
import CountryList from "../components/CountryList/CountryList";
import Header from "../components/Header/Header";
import { getList } from "../services/list";

const Home = () => {
  const [searchValue, setSearchValue] = useState("")
  const countryList = useSelector((state) => state.countryList);
  console.log("countryList", countryList);

  const dispatch = useDispatch();
  const  handleChange = (event) => {
    setSearchValue(event);
    dispatch(filterCoutry(event))
  }
console.log('searchValue', searchValue)

  useEffect(() => {
    let mounted = true;
   

      getList().then((items) => {
        if (mounted) {
          dispatch(addCountry(items));
  
        }
      });
    
  
    return () => (mounted = false); 
  }, [dispatch]);

  return (
    <div>
      <Header handleChange={handleChange} />
      <CountryList  searchValue={searchValue}  />
    </div>
  );
};

export default Home;
