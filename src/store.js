import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./features/country/countrySlice";

export default configureStore({
  reducer: {
    countryList: countryReducer,
  },
});
