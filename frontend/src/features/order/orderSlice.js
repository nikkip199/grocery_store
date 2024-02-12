import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));
const Api_URL = import.meta.env.VITE_REACT_USER_URL;
const initialState = {
  isSuccess: false,
  isError: false,
  isLoading: false,
  Order: [],
};
export const addToOrder = createAsyncThunk(
  "order/addToOrder",
  async ({ AddressbyId, value }, thunkAPI) => {
    const { address, city, state, country } = AddressbyId;
    const order = {
      address: address,
      
      paymentMethod: value,
    };
    console.log("addToOrder", order);
    try {
      console.log(`Bearer ${user.accessToken}`);
      const response = await axios.post(Api_URL + "order", order, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      console.log("order", response.data);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
export const getToOrder = createAsyncThunk(
  "order/getToOrder",
  async (thunkAPI) => {
    // const { address, city, state, country } = AddressbyId;
    // const order = {
    //   address: address,
      
    //   paymentMethod: value,
    // };
    console.log("getToOrder", order);
    try {
      console.log(`Bearer ${user.accessToken}`);
      const response = await axios.get(Api_URL + "order", order, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      console.log("order", response.data);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
const orderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addToOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addToOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.Order = action.payload;
      console.log(action.payload);
    });
    builder.addCase(addToOrder.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(getToOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getToOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.Order = action.payload;
      console.log(action.payload);
    });
    builder.addCase(getToOrder.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});
export default orderSlice.reducer;
