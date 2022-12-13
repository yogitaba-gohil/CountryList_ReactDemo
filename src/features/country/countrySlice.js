import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
  name: "countryList",
  initialState: [],
  reducers: {
    addCountry: (state, action) => {
      state.push(...action.payload);
    },
    filterCoutry: (state, action) => {
      console.log("state", action.payload);
      const newCountry = state.filter((row) =>
        row.name.common.match(new RegExp(action.payload, "i"))
      );
      console.log("newCountry", newCountry);
      return state.push(...newCountry);
    },
  },
});

// this is for dispatch
export const { addCountry, filterCoutry } = countrySlice.actions;

// this is for configureStore
export default countrySlice.reducer;
