import { createSlice } from '@reduxjs/toolkit';

export const countrySlice = createSlice({
  name: 'countryList',
  initialState: [],
  reducers: {
    addCountry: (state, action) => {
        console.log('action', action.payload)

      state.push( ...action.payload);
  },
}});

// this is for dispatch
export const { addCountry} = countrySlice.actions;

// this is for configureStore
export default countrySlice.reducer;