import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { getCountry } from "../services/countryDetails";
import PlaceIcon from "@mui/icons-material/Place";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const CountryDetails = () => {
  const { name } = useParams();
  const [countryDetails, setCountryDetails] = useState();
  const countryList = useSelector((state) => state.countryList);
  console.log("countryList", countryList);

  useEffect(() => {
    async function fetchData() {
      if (name) {
        const post = await getCountry(name).then((data) => {
          return data;
        });
        setCountryDetails(post);
      }
    }
    fetchData();
  }, [name]);

  return (
    <div>
      <div class="container">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <img src="..." class="rounded-circle bg-primary" alt="..." />

            <div class="d-flex flex-column mb-3">
              <div class="p-2">AFGHANISTAN</div>
              <div class="p-2">Kabul</div>
            </div>
            <div>
              <MoreVertIcon />
            </div>
          </div>
        </nav>
      </div>
      <div class="card" style={{ width: "100%", textAlign: "center" }}>
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="d-flex " style={{ textAlign: "start" }}>
            <ArrowBackIosNewIcon />

            <PlaceIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
