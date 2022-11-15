import React from "react";

const Modal = ({
	title,
	color,
	size,
	amount,
	price,
	nameVariant,
	showModal,
	setShowModal,
}) => {
	return (
		<div className={`modal ${showModal}`}>
			<div className='close-modal'>
				<button onClick={() => setShowModal("")}>X</button>
			</div>
			<h4>{title}</h4>
			<p>
				<strong>Variant:</strong> {nameVariant}
			</p>
			<div className='info-color-size'>
				<p>
					<strong>Color:</strong> {color}
				</p>
				<p>
					<strong>Size:</strong> {size}
				</p>
			</div>
			<div className='info-amount-price'>
				<p>
					<strong>Amount:</strong> {amount}
				</p>
				<p>
					<strong>Total:</strong> ${" "}
					{(Number(price) * Number(amount)).toLocaleString("en")}
				</p>
			</div>
			<button>Buy</button>
		</div>
	);
};

export { Modal };
