import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));
const Api_URL = import.meta.env.VITE_REACT_AUTH_URL;
const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  Address: [],
  AddressbyId:{},
};
export const getAddress = createAsyncThunk("address/getAddress", async () => {
  try {
    const response = await axios.get(Api_URL + "address", {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});
export const getAddressbyId = createAsyncThunk("address/getAddressbyId", async (id) => {
  console.log(id)
  try {
    const response = await axios.get(`${Api_URL}address/${id}`, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});
export const addAddress = createAsyncThunk(
  "address/addAddress",
  async (addressInfo) => {
    console.log(user.accessToken);
    const {
      fullname,
      address,
      contact,
      city,
      state,
      country,
      postcode,
      addressType,
    } = addressInfo;
    // console.log(fullname,address,addressInfo);
    const newAddress = {
      full_name: fullname,
      contact: contact,
      country: country,
      state: state,
      city: city,
      post_code: postcode,
      address: address,
      address_type: addressType,
    };
    console.log(newAddress)
    try {
      const response = await axios.post(Api_URL + "address", newAddress, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const removeAddress = createAsyncThunk(
  "address/removeAddress",
  async (id, thunkAPI) => {
    console.log("Removing address", id);
    try {
      // console.log(cItem);
      const response = await axios.delete(`${Api_URL}address/${id}`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      console.log("getCart", response.data);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
export const addressSlice = createSlice({
  name: "address",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAddress.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAddress.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.Address = action.payload.address;
      // console.log(state.Address.address);
    });
    builder.addCase(getAddress.rejected, (state) => {
      state.isError = true;
      console.log("Rejected");
    });
    builder.addCase(getAddressbyId.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAddressbyId.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.AddressbyId= action.payload.address;
    });
    builder.addCase(getAddressbyId.rejected, (state) => {
      state.isError = true;
      console.log("Rejected");
    });
    builder.addCase(addAddress.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addAddress.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      // state.Address = action.payload;
    });
    builder.addCase(addAddress.rejected, (state) => {
      state.isError = true;
      console.log("Rejected");
    });
    builder.addCase(removeAddress.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(removeAddress.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.Address= state.Address.filter(
        (item) => item.id !== action.payload.id
      );
     console.log("success")
      });
      builder.addCase(removeAddress.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});
export default addressSlice.reducer;
