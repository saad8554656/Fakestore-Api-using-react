import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '../src/Slices/searchSlice'
import cartReducer from './Slices/cartslice'
import categoryReducer  from './Slices/categorySlice'

export const mystore = configureStore({
  reducer: {
    search:searchReducer,
    cart: cartReducer,
    category:categoryReducer

  }
})