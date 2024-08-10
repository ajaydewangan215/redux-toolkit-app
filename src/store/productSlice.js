import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { buildQueries } from "@testing-library/react";

// object.freeze object ke value ko change krne ni deta 
export const STATUSES = Object.freeze({
  IDEL: 'idel',
  ERROR: 'error',
  LOADING: 'loading'
});

const initialState = {
  data: [],
  status: STATUSES.IDEL
};

const productSlice = createSlice({
  name:'product',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.data = action.payload
    },
    setStatus(state, action) {
      state.status = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state, action) => {
      state.status = STATUSES.LOADING
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = STATUSES.IDEL
      state.data = action.payload
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.status = STATUSES.ERROR
    })
  }
})
export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thanks
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  return data
})

// export function fetchProducts() {
//   return async function fetchProductThunk(dispatch, getState) {
//     dispatch(setStatus(STATUSES.LOADING))
//     try {
//       const res = await fetch('https://fakestoreapi.com/products')
//       const data = await res.json()
//       dispatch(setProducts(data))
//       dispatch(setStatus(STATUSES.IDEL))
//     } catch (error) {
//       console.log('error :>> ', error);
//       dispatch(setStatus(STATUSES.ERROR))
//     }
//   }
// }
