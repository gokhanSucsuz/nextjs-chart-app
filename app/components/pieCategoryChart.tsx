"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	LineElement,
	Title,
	Tooltip,
	Legend,
	PointElement,
	ChartData,
	ArcElement,
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
	LineElement,
	ArcElement
);

interface PieCategoryChartProps {
	data: ChartData<"pie", (number | Point | null)[], unknown> | any;
}

const PieCategoryChart: React.FC<PieCategoryChartProps> = ({ data }) => {
	return (
		<>
			<div style={{ minHeight: "30vh" }}>
				<div
					className="p-12 h-full block bg-slate-100 border rounded-lg shadow dark:bg-gray-800
				 ">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-200">
						Stock Status
					</h5>

					<div
						style={{ display: "none" }}
						className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-blue-500 mb-4">
						<div
							className="bg-blue-500 h-2.5 rounded-full"
							style={{ width: "0%" }}></div>
					</div>
					<Pie
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
											return tooltipItem.formattedValue + "-items";
										}
									}
								}
							},
							...scaleConfig,
							scales: {
								x: {
									border: {
										display: false
									},
									grid: {
										display: false
									},
									ticks: {
										display: false
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
										display: false
									}
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

export default PieCategoryChart;
