export const sixMonths: Array<string> = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June"
];

export const yearlyMonths: Array<string> = [
	...sixMonths,
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

export const weekDays: Array<string> = [
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat",
	"Sun"
];
export const scaleConfig = {
	scales: {
		x: {
			border: {
				display: false
			},

			grid: {
				display: false
			},
			ticks: {
				color: "#1a5db8"
			}
		},
		y: {
			border: {
				display: false
			},
			grid: {
				display: false
			},
			ticks: {
				color: "#1a5db8"
			}
		}
	}
};
export const colors = [
	"#0E4CB0",
	"#B4BCFA",
	"#FAFAF5",
	"#D5EDA4",
	"#F7E872",
	"#0EB0A8",
	"#B4D8FA",
	"#FAF7F5",
	"#EDD5A4",
	"#F7A172",
	"#0EB05C",
	"#F77281"
];
export const productArray = [
	{
		id: 1,
		productName: "Product 1",
		category: "Category 1",
		status: "Success"
	},
	{
		id: 2,
		productName: "Product 2",
		category: "Category 1",
		status: "Success"
	},
	{
		id: 3,
		productName: "Product 3",
		category: "Category 1",
		status: "Warning"
	},
	{
		id: 4,
		productName: "Product 4",
		category: "Category 2",
		status: "Danger"
	},
	{
		id: 5,
		productName: "Product 5",
		category: "Category 2",
		status: "Warning"
	},
	{
		id: 6,
		productName: "Product 6",
		category: "Category 3",
		status: "Info"
	},
	{
		id: 7,
		productName: "Product 7",
		category: "Category 4",
		status: "Danger"
	}
];

