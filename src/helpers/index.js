export const priceWithDot = (productPrice) => {
	const arrayPrice = String(productPrice).split("");
	const dotAdded = arrayPrice.map((number, index) => {
		const positionNumber = arrayPrice.length - 3;
		const indexNumber = arrayPrice.indexOf(arrayPrice[positionNumber]);
		if (String(index) === String(indexNumber)) {
			return number + ".";
		}
		return number;
	});
	const fullPrice = dotAdded.join("");
	return fullPrice;
};
