import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getCountry } from "../services/countryDetails";
import PlaceIcon from "@mui/icons-material/Place";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Avatar from 'react-avatar';
import Tooltip from '@mui/material/Tooltip';

const CountryDetails = () => {
  const { name } = useParams();
  const [countryDetails, setCountryDetails] = useState();
  // const countryList = useSelector((state) => state.countryList);
  // console.log("countryList", countryList);

  useEffect(() => {
    async function fetchData() {
      if (name) {
        await getCountry(name).then((data) => {
          return setCountryDetails(data);
        });
      }
    }
    fetchData();
  }, [name]);
  let navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div>
      <div class="container">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid ">
            
            <Avatar name={countryDetails?.name?.common} maxInitials={1} className="rounded-circle bg-primary"/>

            <div class="d-flex flex-column">
              <div class="p-2"><h1>{countryDetails?.name?.common}</h1></div>
              <div class="p-2"><h4>{countryDetails?.capital?.[0]}</h4></div>
            </div>
            <div>
              <MoreVertIcon />
            </div>
          </div>
        </nav>
      </div>
      <div class="card" style={{ width: "100%", textAlign: "center" }}>
        <div style={{ width: "100%" }}>
          <img
            src={countryDetails?.flags?.png}
            class="card-img-top"
            alt="..."
            style={{ width: "50%" }}
          />
        </div>
        <div class="card-body">
          <p class="card-text">
            The country belongs to{" "}
            <text style={{ color: "blue" }}>{countryDetails?.region}</text>{" "}
            region and{" "}
            <text style={{ color: "blue" }}>{countryDetails?.subregion}</text>{" "}
            sub-region
            <br />
            Located at the{" "}
            <text style={{ color: "blue" }}>
              {countryDetails?.latlng[0]}°N
            </text>{" "}
            and{" "}
            <text style={{ color: "blue" }}>{countryDetails?.latlng[1]}°W</text>
            , this country has population of{" "}
            <text style={{ color: "blue" }}>{countryDetails?.population}</text>
            <br />
            and it has gained the independent, according to the CIA World
            FactBook
          </p>
          <div className="d-flex " style={{ textAlign: "start" }}>
            <IconButton aria-label="ArrowForwardIosIcon" onClick={goBack}>
              <ArrowBackIosNewIcon />
            </IconButton>
            <div style={{paddingLeft:"30px", paddingTop:"4px"}}>
            <Tooltip title={countryDetails?.latlng[0] + " °N " + countryDetails?.latlng[1]+ " °W "  }>
            <IconButton>
            <PlaceIcon />
            </IconButton>

            </Tooltip>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
