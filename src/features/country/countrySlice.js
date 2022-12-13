import { createSlice } from '@reduxjs/toolkit';

export const countrySlice = createSlice({
  name: 'countryList',
  initialState: [],
  reducers: {
    addCountry: (state, action) => {
        console.log('action', action)
      const country = {
        id: "",
        text: action.payload,
      };

      state.push(country);
  },
}});

// this is for dispatch
export const { addCountry} = countrySlice.actions;

// this is for configureStore
export default countrySlice.reducer;