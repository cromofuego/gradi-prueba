import { useState } from "react";

const SelectSize = ({ sizes, handleOnchangeInputRadioSize }) => {
	const [indexCurrentSize, setIndexCurrentSize] = useState(0);
	const inputCheckSize = (indexColor) => {
		const arrayColors = sizes.values?.map((size, index) => {
			return (
				<li
					key={`input radio size ${index}`}
					className={`li-select-size ${
						indexColor === index ? "size-active" : ""
					}`}
				>
					<label htmlFor={`size ${size}`}>{size}</label>
					<input
						id={`size ${size}`}
						onClick={() => setIndexCurrentSize(index)}
						onChange={handleOnchangeInputRadioSize}
						type='radio'
						checked={indexColor === index ? true : false}
						value={size}
					/>
				</li>
			);
		});
		return arrayColors;
	};

	return <>{inputCheckSize(indexCurrentSize)}</>;
};

export { SelectSize };
