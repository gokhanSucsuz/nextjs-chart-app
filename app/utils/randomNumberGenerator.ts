const randomNumberGenerator = (
	count: number = 10,
	min: number = 2000,
	sum: number = 1000
) => {
	const numbers: Array<number> = [];
	for (let i = 0; i < count; i++) {
		const number = Math.floor(Math.random() * min) + sum;
		numbers.push(number);
	}
};
