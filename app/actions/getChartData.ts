import { connectDb, getCollection } from "../utils/dbHelper";
import { Collection } from "mongodb";
import { ChartDataInterface } from "../interfaces/chartDataInterface";

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
	}

	return chartDataObject;
}
