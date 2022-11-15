import { createSlice } from "@reduxjs/toolkit";
import { priceWithDot } from "../helpers";

const productsSlice = createSlice({
	name: "products",
	initialState: {
		products: {},
		cart: {},
	},
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload;
			const defaultValueCart = { ...state.products.variants[0], amount: "0" };
			state.cart = defaultValueCart;
		},
		setCart: (state, action) => {
			const price = priceWithDot(action.payload.price);
			state.cart = { ...action.payload, price: price };
		},
	},
});

export const { setProducts, setCart } = productsSlice.actions;

export default productsSlice.reducer;
