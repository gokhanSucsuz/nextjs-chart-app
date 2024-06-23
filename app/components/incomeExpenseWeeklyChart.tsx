"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
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
	BarElement
);

interface IncomeExpenseWeeklyChartProps {
	data: ChartData<"bar", (number | Point | null)[], unknown> | any;
}

const IncomeExpenseWeeklyChart: React.FC<IncomeExpenseWeeklyChartProps> = ({
	data
}) => {
	return (
		<>
			<div style={{ minHeight: "30vh" }}>
				<div
					className="p-9 h-90 block bg-slate-400 border border-gray-200 rounded-lg shadow dark:bg-gray-800
				 dark:border-gray-700 ">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-200">
						Income & Expense Weekly Bar Chart
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
											return (
												tooltipItem.dataset.label +
												" " +
												tooltipItem.formattedValue +
												"-EUR"
											);
										}
									}
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

export default IncomeExpenseWeeklyChart;
