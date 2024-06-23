"use client";
import { Bar } from "react-chartjs-2";
import { BarElement } from "chart.js";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend,
	Filler,
	PointElement,
	ChartData,
	Point
} from "chart.js";
import { scaleConfig } from "../constants/consts";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	Legend,
	Tooltip,
	Title,
	BarElement,
	Filler
);

interface StackedBarVideoChartProps {
	data: ChartData<"pie", (number | Point | null)[], unknown> | any;
}

const StackedBarVideoChart: React.FC<StackedBarVideoChartProps> = ({
	data
}) => {
	return (
		<>
			<div style={{ minHeight: "30vh" }}>
				<div
					className="p-12 h-90 block bg-slate-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800
				 dark:border-gray-700 ">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-200">
						Video Viewing Values
					</h5>

					<div
						style={{ display: "none" }}
						className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-blue-500 mb-4">
						<div
							className="bg-blue-500 h-2.5 rounded-full"
							style={{ width: "0%" }}></div>
					</div>
					<Bar
						redraw
						options={{
							responsive: true,
							plugins: {
								legend: {
									display: false
								},
								tooltip: {
									backgroundColor: "#1f2937",
									callbacks: {
										label(tooltipItem): string | string[] | void {
											return tooltipItem.formattedValue + "-minutes";
										}
									}
								}
							},
							...scaleConfig,
							scales: {
								x: {
									stacked: true
								},
								y: {
									stacked: true
								}
							}
						}}
						data={data}
					/>
				</div>
			</div>
		</>
	);
};

export default StackedBarVideoChart;
