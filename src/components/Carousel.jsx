import { useState } from "react";
const Carousel = ({ images }) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [selectedImage, setSelectedImage] = useState(images[0]);
	const [loaded, setLoaded] = useState(false);

	const selectNewImage = (index, images, next = true) => {
		setLoaded(false);
		setTimeout(() => {
			const condition = next
				? selectedIndex < images.length - 1
				: selectedIndex > 0;
			const nextIndex = next
				? condition
					? selectedIndex + 1
					: 0
				: condition
				? selectedIndex - 1
				: images.length - 1;

			setSelectedImage(images[nextIndex]);
			setSelectedIndex(nextIndex);
		}, 500);
	};

	const previousImage = () => {
		selectNewImage(selectedIndex, images, false);
	};

	const nextImage = () => {
		selectNewImage(selectedIndex, images);
	};

	const handleClickCurrentImage = (nextIndex) => {
		setLoaded(false);
		setTimeout(() => {
			setSelectedImage(images[nextIndex]);
			setSelectedIndex(nextIndex);
		}, 500);
	};

	const seeCurrentImage = (indexCurrentImage) =>
		images.map(
			(image, index) =>
				image && (
					<span
						key={`key image ${image}`}
						className={indexCurrentImage === index ? "active" : ""}
						onClick={() => handleClickCurrentImage(index)}
					></span>
				)
		);

	return (
		<div className='container-carousel'>
			<img
				src={images[selectedIndex]}
				alt='product'
				className={loaded ? "loaded" : ""}
				onLoad={() => setLoaded(true)}
			/>
			<div className='buttons'>
				<button onClick={previousImage}>{"<"}</button>
				<button onClick={nextImage}>{">"}</button>
			</div>
			<div className='current-image'>{seeCurrentImage(selectedIndex)}</div>
			<div className='large-screen-images'>
				<img src={images[1]} alt='view-variant-product' />
				<img src={images[2]} alt='view-variant-product' />
				<img src={images[3]} alt='view-variant-product' />
			</div>
		</div>
	);
};

export { Carousel };
