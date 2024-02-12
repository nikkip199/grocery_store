import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  isSuccess: false,
  isError: false,
  isLoading: false,
  CheckOut: [],
};
export const addToCheckout = createAsyncThunk(
  "checkout/addToCheckout",
  async (totalPrice, thunkAPI) => {
    try {
      // console.log(`Bearer ${token}`);
      const response = await axios.post(Api_URL + "checkout", totalPrice, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      console.log("Checkout", response.data);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
const checkOutSlice = createSlice({
  name: "checkout",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addToCheckout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addToCheckout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.CheckOut = action.payload;
      console.log(action.payload);
    });
    builder.addCase(addToCheckout.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});
export default checkOutSlice.reducer;
