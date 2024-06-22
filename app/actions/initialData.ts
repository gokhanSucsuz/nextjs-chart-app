"use server";
import { sixMonths, weekDays, yearlyMonths } from "../constants/consts";
import { ChartDataInterface } from "../interfaces/chartDataInterface";

import { Collection } from "mongodb";
import { randomNumberGenerator } from "../utils/randomNumberGenerator";
import { connectDb, getCollection } from "../utils/dbHelper";

const yearlyLineData = {
	labels: yearlyMonths,
	dataSets: [
		{
			label: "sales",
			data: randomNumberGenerator(12)
		},
		{
			label: "buying",
			data: randomNumberGenerator(12)
		}
	]
};

const incomeExpenseBarData = {
	labels: weekDays,
	dataSets: [
		{
			label: "Income",
			data: randomNumberGenerator(7)
		},
		{
			label: "expense",
			data: randomNumberGenerator(7)
		}
	]
};

const visitorsLineData = {
	labels: sixMonths,
	dataSets: [
		{
			label: "Visitors",
			data: randomNumberGenerator(6)
		}
	]
};

const watchStackedData = {
	labels: sixMonths,
	dataSets: [
		{
			label: "Video",
			data: randomNumberGenerator(6)
		},
		{
			label: "Shorts",
			data: randomNumberGenerator(6)
		}
	]
};

const stockPieData = {
	labels: Array(10)
		.fill(0)
		.map((item, index) => "Category" + index + 1),
	dataSets: [
		{
			label: "Product Category",
			data: randomNumberGenerator(12, 250, 500)
		}
	]
};

const mostDataCountry = {
	tr: 80,
	cn: 73,
	ru: 55,
	de: 48,
	in: 42,
	gr: 35,
	fr: 61,
	bg: 19,
	gb: 70,
	it: 59
};

const productArray = [
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
export async function createInitialData() {
	await connectDb();

	const collection: Collection = getCollection("chartData");

	const obj: ChartDataInterface = {
		incomeExpenseBarData,
		mostDataCountry,
		yearlyLineData,
		mostTenProductData: productArray,
		stockPieData,
		visitorsLineData,
		watchStackedData
	};

	const res = await collection.insertOne(obj);
	console.log(res);
}
