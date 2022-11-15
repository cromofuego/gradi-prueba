import axios from "axios";
import { setProducts } from "../slice/sliceProducts";

export const fetchAllProducts = () => (dispatch) => {
	axios
		.get("https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js")
		.then((response) => {
			dispatch(setProducts(response.data));
		})
		.catch((error) => console.log(error));
};
