import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL = import.meta.env.VITE_REACT_USER_URL;

const initialState = {
  products: [],
  popularProducts: [],
  singleProduct: [],
  filteredProducts: [],
  isLoading: false,
  isError: null,
  isSuccess: false,
};

export const getAllPopularProducts = createAsyncThunk(
  "product/getpopularproduct",
  async (thunkAPI) => {
    try {
      const response = await axios.get(URL + "popular_product");
      console.log("res", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getAllProducts = createAsyncThunk(
  "product/getAllproducts",
  async (activePage,thunkAPI) => {
    // console.log(activePage);
    try {
      const response = await axios.get(`${URL}product?page=${activePage}`);
      console.log("res", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (id, thunkAPI) => {
    try {
      // const response = await axios.get("http://192.168.1.15:6900/user/product");
      const response = await axios.get(`${URL}product/${id}`);
      console.log("res", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getProductSearch = createAsyncThunk(
  "product/getProductSearch",
  async (name, thunkAPI) => {
    try {
      console.log(name)
      // const response = await axios.get("http://192.168.1.15:6900/user/product");
      const response = await axios.get(`${URL}product?name=${name}`);
      console.log("res", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    filterProducts: (state, action) => {
      const query = action.payload.toLowerCase();
      state.filteredProducts = state.products.products.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
    
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPopularProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPopularProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.popularProducts = action.payload;
      })
      .addCase(getAllPopularProducts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.popularProducts = null;
      })
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.products = null;
      })
      .addCase(getProductById.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.singleProduct = action.payload.product;
        console.log(action.payload);
      })
      .addCase(getProductById.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        // state.products = null;
      })
      .addCase(getProductSearch.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getProductSearch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // const query = action.payload.toLowerCase();
        state.filteredProducts = action.payload.products

        console.log(action.payload.products);
      })
      .addCase(getProductSearch.rejected, (state,action) => {
        state.isLoading = false;
        state.isError = true;
        state.filteredProducts =null;
      });
  },
});
export const { filterProducts, setProducts } = productSlice.reducer;
export default productSlice.reducer;
