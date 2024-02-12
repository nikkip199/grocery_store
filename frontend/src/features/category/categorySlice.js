import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
  productByCategory: [],

  isLoading: false,
  message: "",
  isError: false,
  isSuccess: false,
};
const Api_URL = import.meta.env.VITE_REACT_USER_URL;
export const getAllCategories = createAsyncThunk(
  "category/getAllCategories",
  async (categories, { rejectWithValue }) => {
    try {
      const response = await axios.get(Api_URL + "category");
      if (response.data) {
        console.log("res22", response.data);
      }
      return response.data;
    } catch (error) {
      // return custom error message from backend if present
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const getProductByCategories = createAsyncThunk(
  "category/getProductByCategories",
  async (id, { rejectWithValue }) => {
    try {
      console.log(id);
      const response = await axios.get(`${Api_URL}category/${id}`);
      if (response.data) {
        console.log("res22", response.data);
      }
      return response.data;
    } catch (error) {
      // return custom error message from backend if present

      return rejectWithValue(error.response.data.message);
    }
  }
);
export const categorySlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.categories = action.payload;
      })
      .addCase(getAllCategories.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.categories = null;
      })
      .addCase(getProductByCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductByCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.productByCategory = action.payload.products;
        console.log("ii", state.productByCategory);
      })
      .addCase(getProductByCategories.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.productByCategory = null;
      });
  },
});
export default categorySlice.reducer;
