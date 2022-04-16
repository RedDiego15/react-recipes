const observer = new IntersectionObserver((entries) => {
	entries.map((entry) => {
		if (entry.isIntersecting) {
			lazyCharge(
				entry
			);
		}
	});
});

const lazyCharge = (entry) => {
	debugger;
	const image = entry.target.firstElementChild;
	let URL = image.dataset.src;
	image.style.backgroundImage = `url(${URL})`;
	observer.unobserve(entry.target);
};

const registerImage = (image) => {
	debugger;
	observer.observe(image.target);
};

export { registerImage };
