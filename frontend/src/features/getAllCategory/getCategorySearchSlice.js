import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  SearchData: [],
  filterDataContain: [],
  isLoading: false,
  isError: null,
  isSuccess: false,
}

export const getCategorySearch = createAsyncThunk('category/getAllCategory', async (_, thunkAPI) => {
  try {
    // const response = await axios.get(`http://192.168.1.56:6900/user/category?${name}`, name);
    const response = await axios.get(`https://6499375879fbe9bcf83ec7da.mockapi.io/grocery/grocery`);
    console.log('lassi', response.data)
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})


const getCategorySearchSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    // setSearchText: (state, action) => {

    //   state.filteredData = state.data.filter((item) =>
    //     item.title.lowerCase().includes(action.payload.toLowerCase())
    //   )
    // }
    //  filterDatabyCategory::(state,action)=>{

    //  },
    filteredData: (state, action) => {
      state.SearchData = state.filterDataContain?.filter((item) => item?.category?.toLowerCase()?.includes(action.payload)
      )
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategorySearch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategorySearch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.SearchData = action.payload;
        state.filterDataContain = action.payload;
      })
      .addCase(getCategorySearch.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
  }
})


export const { filteredData } = getCategorySearchSlice.actions;
export default getCategorySearchSlice.reducer;