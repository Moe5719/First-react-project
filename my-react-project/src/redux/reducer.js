// src/redux/categorySlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategories: [],
  maxPrice: 500, // Default max price
  minRangePrice: 0,
  maxRangePrice: 500,
  
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setSelectedCategories: (state, action) => {
      state.selectedCategories = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setMinRangePrice: (state, action) =>{
      state.minRangePrice = action.payload;
    },
    setMaxRangePrice: (state, action) => {
      state.maxRangePrice = action.payload
    }
  },
});

export const { setSelectedCategories, setMaxPrice, setMinRangePrice, setMaxRangePrice } = categorySlice.actions;

export const selectSelectedCategories = state => state.category.selectedCategories;
export const selectMaxPrice = state => state.category.maxPrice;
export const selectMinRangePrice = state => state.category.minRangePrice;
export const selectMaxRangePrice = state => state.category.maxRangePrice;

export default categorySlice.reducer;
