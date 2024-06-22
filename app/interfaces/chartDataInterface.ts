import Chart from "chart.js";

export interface ChartDataInterface {
	yearlyLineData: Chart.ChartData;
	incomeExpenseBarData: Chart.ChartData;
	visitorsLineData: Chart.ChartData;
	watchStackedData: Chart.ChartData;
	stockPieData: Chart.ChartData;
	mostDataCountry: Chart.ChartData;
	mostTenProductData: Chart.ChartData;
}
