import React, { useEffect, useState } from "react";
import { Carousel } from "./Carousel";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../slice/sliceProducts";
import { fetchAllProducts } from "../api/products";
import { SelectColor } from "./SelectColor";
import { SelectSize } from "./SelectSize";
import { priceWithDot } from "../helpers";
import { AmountProductAndTotalPrice } from "./AmountProductAndTotalPrice";
import { Modal } from "./Modal";

const Product = () => {
	const products = useSelector((state) => state.products.products);
	const cart = useSelector((state) => state.products.cart);
	const dispatch = useDispatch();
	const [product, setProduct] = useState({
		color: "Red",
		size: "7",
		amount: "0",
	});
	const colors = products.options?.find((option) => option.position === 1);
	const sizes = products.options?.find((option) => option.position === 2);
	const [showModal, setShowModal] = useState("");
	let loadingProduct = products.images?.length > 0 ? true : false;

	useEffect(() => {
		dispatch(fetchAllProducts());
	}, []);

	const handleOnchangeInputRadioColor = (e) => {
		setProduct({ ...product, color: e.target.value });
	};

	const handleOnchangeInputRadioSize = (e) => {
		setProduct({ ...product, size: e.target.value });
	};

	const handleClick = () => {
		setShowModal("show");
		const { color, size } = product;
		const variant = products.variants?.find((item) => {
			const sizeVariant = item.option2;
			const colorVariant = item.option1;
			if (sizeVariant === size && colorVariant === color) return item.id;
		});

		const countVariantProduct = { ...variant, amount: product.amount };
		dispatch(setCart(countVariantProduct));
	};
	return (
		<article>
			<Modal
				setShowModal={setShowModal}
				showModal={showModal}
				title={cart.title}
				color={cart.option1}
				size={cart.option2}
				amount={cart.amount}
				price={cart.price}
				nameVariant={cart.name}
			/>
			{loadingProduct && (
				<>
					<Carousel images={products.images} />
					<div className='content-product'>
						<div className='header-product'>
							<p className='brand'>by Nike x ALYX</p>
							<h2 className='name-product'>{products.title}</h2>
							<div className='container-prices'>
								<p className='main-price'>$ {priceWithDot(products.price)}</p>
								<p className='compare-price'>
									$ {priceWithDot(products.compare_at_price)}
								</p>
							</div>
						</div>
						<ul className='ul-color'>
							<p>{colors.name}:</p>
							<div className='container-li-color'>
								<SelectColor
									colors={colors}
									handleOnchangeInputRadioColor={handleOnchangeInputRadioColor}
								/>
							</div>
						</ul>
						<ul className='ul-size'>
							<p>{sizes.name}:</p>
							<div className='container-li-size'>
								<SelectSize
									sizes={sizes}
									handleOnchangeInputRadioSize={handleOnchangeInputRadioSize}
								/>
							</div>
						</ul>
						<AmountProductAndTotalPrice
							price={priceWithDot(products.price)}
							product={product}
							setProduct={setProduct}
						/>
						<div className='add-favourite-and-cart'>
							<button>Add to favourite</button>
							<button onClick={handleClick}>Add to cart</button>
						</div>
						<div className='container-description'>
							<p>{products.description}</p>
						</div>
					</div>
				</>
			)}
		</article>
	);
};

export { Product };
