import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
const initialState = {
  isSuccess: false,
  isError: false,
  isLoading: false,
  Carts: [],
  totalQuantity: 0,
  totalAmount: "",
};
const user = JSON.parse(localStorage.getItem("user"));
// console.log(user.accessToken);
const Api_URL = import.meta.env.VITE_REACT_USER_URL;
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ productId, quantity }, thunkAPI) => {
    const cartProduct = {
      productId: productId,
      quantity: quantity,
    };
    const state = thunkAPI.getState();
    let data = state.cart.Carts.card;
    console.log("🚀  file: cartSlice.js:80  data:", data);

    let found = data.find((el) => {
      el.productId === productId;
    });
    console.log("🚀  file: cartSlice.js:80  found:", found);

    console.log(cartProduct);
    // if (found === undefined) {
    try {
      console.log(`Bearer ${user.accessToken}`);
      const response = await axios.post(Api_URL + "card", cartProduct, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });

      console.log("Cart", response.data);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
  // else{
  //   return thunkAPI.rejectWithValue(err.response.data);
  // }
  // }
);
export const getToCart = createAsyncThunk(
  "cart/getToCart",
  async (thunkAPI) => {
    try {
      // console.log( Api_URL + "card")
      const response = await axios.get(Api_URL + "card", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      // console.log("getCart", response.data);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
export const removeToCart = createAsyncThunk(
  "cart/removeToCart",
  async (cItem, thunkAPI) => {
    try {
      console.log("del", cItem);
      const response = await axios.delete(`${Api_URL}card/${cItem.id}`, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
      });
      console.log("getCart", response.data);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const updateToCart = createAsyncThunk(
  "cart/updateToCart",
  async ({ cItem }, { getState }) => {
    const state = getState();
    let data = state.cart.Carts.card;
    let found = data.find((el) => el.id === cItem.id);
    console.log("🚀  file: cartSlice.js:80  found:", found);

    let qty = found.quantity;

    console.log("c1c", qty);

    try {
      const response = await axios.patch(
        `${Api_URL}card/${cItem.id}`,
        { quantity: qty },
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      console.log("getCart", response.data);
      return response.data;
    } catch (err) {
      return err.response.data;
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    decreaseCartQuantity(state, action) {
      const itemIndex = state.Carts.card.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      console.log(itemIndex);
      if (state.Carts.card[itemIndex].quantity > 1) {
        state.Carts.card[itemIndex].quantity -= 1;
      } else if (state.Carts.card[itemIndex].quantity === 1) {
        console.log(state.Carts.card[itemIndex]);
        const inCartItems = state.Carts.card.filter(
          (cartItem) => cartItem.id !== action.payload
        );
        console.log(inCartItems);
        state.Carts = inCartItems;
      }
    },
    increaseCartQuantity(state, action) {
      const itemIndex = state.Carts.card.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      console.log("itemIndex", itemIndex);

      const totalItem = (state.Carts.card[itemIndex].quantity += 1);
      console.log("totalItem", totalItem);

      toast.success(
        `${state.Carts.card[itemIndex].name} is again add to the cart!`,

        {
          position: toast.POSITION.BOTTOM_LEFT,
        }
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(addToCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.Carts = action.payload;
      toast.success("Item added to the Cart", {
        position: "bottom-left",
      });
      console.log(action.payload);
    });
    builder.addCase(addToCart.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      // console.log("errrr")
      if (state.isError) {
        toast.warn("Sign in to your account", { position: "bottom-left" });
      }
    });
    builder.addCase(getToCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getToCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.Carts = action.payload;
      console.log(action.payload);
    });
    builder.addCase(getToCart.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(removeToCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(removeToCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      console.log(state.Carts.card.length);
      state.Carts.card = state.Carts.card.filter(
        (item) => item.id !== action.payload.id
      );
      toast.error(`${action.payload.message}`, {
        position: "bottom-left",
      });
      // state.Carts = removeItem
      console.log("delete", state.Carts.card);
      console.log(action.payload);
      console.log(state.Carts.card.length);
    });
    builder.addCase(removeToCart.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(updateToCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateToCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(updateToCart.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const {
  RemoveToCart,
  getTotal,
  increaseCartQuantity,
  decreaseCartQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
