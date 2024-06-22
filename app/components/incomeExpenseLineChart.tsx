"use client";
import { Line } from "react-chartjs-2";
import Chart from "chart.js";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	LineElement,
	Title,
	Tooltip,
	Legend,
	PointElement
} from "chart.js";
import { scaleConfig } from "../constants/consts";
import { useRef } from "react";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	Legend,
	Tooltip,
	Title,
	LineElement
);

const IncomeExpenseLineChart = ({ data }: { data: Chart.ChartData }) => {
	// const progressRef = useRef<HTMLDivElement | null>(null);

	return (
		<>
			<div style={{ minHeight: "30vh" }}>
				<div className="p-12 block bg-slate-500 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-200">
						Income & Expense
					</h5>

					<div
						// ref={progressRef}
						style={{ display: "none" }}
						className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-100 mb-4">
						<div
							className="bg-blue-100 h-2.5 rounded-full"
							style={{ width: "0%" }}></div>
					</div>
					<Line
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
											return tooltipItem.formattedValue + "TL";
										}
									}
								}
							},
							animation: {
								onProgress: (animation) => {
									// if (progressRef.current) {
									// 	progressRef.current.style.display = "block";
									// 	progressRef.current.children[0].style.width =
									// 		(animation.currentStep / animation.numSteps) * 100 + "%";
									// }
								},
								onComplete: (animation) => {
									// if (progressRef.current) {
									// 	progressRef.current.style.display = "none";
									// }
								}
							},
							...scaleConfig
						}}
						data={data}
					/>
				</div>
			</div>
		</>
	);
};

export default IncomeExpenseLineChart;
