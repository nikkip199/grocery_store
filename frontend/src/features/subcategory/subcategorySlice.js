import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  subCategories: [],
productBySubcategory:[],

  isLoading: false,
  message: "",
  isError: false,
  isSuccess: false,
};
const Api_URL = import.meta.env.VITE_REACT_USER_URL;
// console.log(Api_URL + "subcategory")
export const getAllSubCategories = createAsyncThunk(
  "subcategories/getAllSubCategories",
  async (subcategories, { rejectWithValue }) => {
    try {
      const response = await axios.get(Api_URL + "subcategory");
      if (response.data) {
        console.log("sbcat", response.data);
      }
      return response.data;
    } catch (error) {
      // return custom error message from backend if present
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const getProductBySubCategories = createAsyncThunk(
  "subcategories/getProductBySubCategories",
  async (id, { rejectWithValue }) => {
    try {
      console.log(id);
      const response = await axios.get(`${Api_URL}subcategory/${id}`);
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
export const subcategorySlice = createSlice({
  name: "subcategories",
  initialState,
  reducers:{
    filterBySubcategory:{}
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllSubCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllSubCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.subCategories = action.payload;
      })
      .addCase(getAllSubCategories.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.subCategories = null;
      })
      .addCase(getProductBySubCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductBySubCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.productBySubcategory = action.payload.getSubCategory;
        console.log("ii", state.productBySubcategory);
      })
      .addCase(getProductBySubCategories.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.productBySubcategory = "not found";
      });
  },
});
export default subcategorySlice.reducer;
