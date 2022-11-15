import { useState } from "react";

const SelectColor = ({ colors, handleOnchangeInputRadioColor }) => {
	const [indexCurrentColor, setIndexCurrentColor] = useState(0);
	const inputCheckColor = (indexColor) => {
		const arrayColors = colors.values?.map((color, index) => {
			return (
				<li key={`input radio color ${index}`} className='li-select-color'>
					<label htmlFor={color}>
						<span className={`color-${color.toLowerCase()}`}></span>
					</label>
					<input
						id={color}
						onClick={() => setIndexCurrentColor(index)}
						onChange={handleOnchangeInputRadioColor}
						type='radio'
						checked={indexColor === index ? true : false}
						value={color}
					/>
				</li>
			);
		});
		return arrayColors;
	};
	return <>{inputCheckColor(indexCurrentColor)}</>;
};

export { SelectColor };
