import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  selectedCategory: '',
  products: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setCategories, setSelectedCategory, setProducts } = categorySlice.actions;
export default categorySlice.reducer;
