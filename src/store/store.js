import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import productReducer from './productSlice'


const store = configureStore({
  reducer: {
    card: cartReducer,
    product: productReducer
  }
})

export default store;