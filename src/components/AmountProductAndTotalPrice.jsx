import { useState } from "react";

const AmountProductAndTotalPrice = ({ product, setProduct, price }) => {
	const [countProducts, setCountProducts] = useState("0");
	const onChange = (e) => {
		setProduct({ ...product, amount: e.target.value.slice(0, 2) });
		setCountProducts(e.target.value.slice(0, 2));
	};

	const onClick = (e) => {
		if (Number(countProducts) > 0) {
			if (e.target.id === "deduct") {
				const result = Number(countProducts) - 1;
				setProduct({ ...product, amount: String(result).slice(0, 2) });
				setCountProducts(String(result).slice(0, 2));
			}
		}
		if (e.target.id === "sum") {
			const result = Number(countProducts) + 1;
			setProduct({ ...product, amount: String(result).slice(0, 2) });
			setCountProducts(String(result).slice(0, 2));
		}
	};
	return (
		<div className='container-total-products'>
			<div className='input-buttons'>
				<button id='deduct' onClick={onClick}>
					-
				</button>
				<input
					type='number'
					placeholder='0'
					value={countProducts}
					onChange={onChange}
				/>
				<button id='sum' onClick={onClick}>
					+
				</button>
			</div>

			<p>
				Total price:
				<span> $ {(price * Number(countProducts)).toLocaleString("en")}</span>
			</p>
		</div>
	);
};

export { AmountProductAndTotalPrice };
