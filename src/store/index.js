import { configureStore } from "@reduxjs/toolkit";
import products from "../slice/sliceProducts";

export const store = configureStore({
	reducer: {
		products,
	},
});
