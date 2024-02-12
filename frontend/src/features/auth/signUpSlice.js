import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import axios from "axios";

// Get user from localStorage
const user = localStorage.getItem('user');

const URL = import.meta.env.VITE_REACT_AUTH_URL;
console.log(URL+"login")
const initialState = {
  user: user ? user : null,
  token: " ",
  isLoading: false,
  message: "",
  isError: false,
  isSuccess: false,
  isAuthenticated: false,
}
//Register user
export const register = createAsyncThunk("auth/register", async (userdata, thunkAPI) => {
  console.log(userdata)
  try {
    const response = await axios.post(URL+"signup", userdata);
   
    console.log("res", response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }}
);
export const signUpSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {
      // reset function to reset state default values
      reset: (state) => {
        state.isLoading = false;
        state.message = "";
        state.isError = false;
        state.isSuccess = false;
      },
    },
    extraReducers: (builder) => {
      builder
      
        .addCase(register.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(register.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.user = action.payload;
          state.isAuthenticated=true;
          console.log(action.payload);
        })
        .addCase(register.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message ="errer",
          state.user = null;
        });
    },
  });
  export const { reset } = signUpSlice.actions;
  export default signUpSlice.reducer;