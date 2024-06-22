import { connectDb, getCollection } from "../utils/dbHelper";
import { Collection } from "mongodb";
import { ChartDataInterface } from "../interfaces/chartDataInterface";
import { colors } from "../constants/consts";

export async function getChartData(): Promise<ChartDataInterface | null> {
	await connectDb();

	const collection: Collection = getCollection("chartData");
	const chartData = await collection.find({}).toArray();
	const chartDataObj = chartData[0];

	if (!chartDataObj) {
		return null;
	}

	delete chartDataObj._id;

	const chartDataObject: ChartDataInterface = {
		...chartDataObj
	} as ChartDataInterface;

	if (
		chartDataObject.yearlyLineData &&
		chartDataObject.yearlyLineData.datasets
	) {
		chartDataObject.yearlyLineData.datasets =
			chartDataObject.yearlyLineData.datasets.map((item) => {
				return {
					...item,
					tension: 0.5,
					borderWidth: 3,
					backgroundColor: item.label === "sales" ? "#166534" : "#854d0e",
					borderColor: item.label === "sales" ? "#166534" : "#854d0e"
				};
			});
		chartDataObject.incomeExpenseBarData.datasets =
			chartDataObject.incomeExpenseBarData.datasets.map((item) => {
				return {
					...item,
					barThickness: 10,
					borderRadius: 2,
					backgroundColor: item.label === "income" ? "#166534" : "#854d0e",
					borderColor: item.label === "income" ? "#166534" : "#854d0e"
				};
			});
		chartDataObject.visitorsLineData.datasets =
			chartDataObject.visitorsLineData.datasets.map(
				(item: { label: string }) => {
					return {
						...item,
						tension: 0.5,
						fill: true,
						backgroundColor: "#1a81b3",
						borderColor: "#00f0ff"
					};
				}
			);
		chartDataObject.watchStackedData.datasets =
			chartDataObject.watchStackedData.datasets.map((item: any) => {
				return {
					...item,
					tension: 0.5,
					barThickness: 20,
					backgroundColor: item.label === "Shorts" ? "#a20563" : "#f6005e",
					borderColor: item.label === "Shorts" ? "#a20563" : "#f6005e"
				};
			});
		console.log(chartDataObject.stockPieData.datasets[0].colorIndex[2]);
		chartDataObject.stockPieData.datasets =
			chartDataObject.stockPieData.datasets.map((item: any) => {
				return {
					...item,
					tension: 0.5,
					barThickness: 20,
					backgroundColor: colors
				};
			});
	}

	return chartDataObject;
}
