import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCountry } from "../features/country/countrySlice";
import CountryList from "../components/CountryList/CountryList";
import Header from "../components/Header/Header";
import { getList } from "../services/list";

const Home = () => {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = true;
    getList().then((items) => {
      if (mounted) {
        setList(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div>
      <Header />
      <CountryList list={list} />
    </div>
  );
};

export default Home;
