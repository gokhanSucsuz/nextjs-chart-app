import { ChartDatasetInterface } from "./chartDatasetBaseInterface";

export interface ChartDataInterface {
	yearlyLineData: ChartDatasetInterface;
	incomeExpenseBarData: ChartDatasetInterface;
	visitorsLineData: ChartDatasetInterface;
	watchStackedData: ChartDatasetInterface;
	stockPieData: ChartDatasetInterface;
	mostDataCountry: ChartDatasetInterface;
	mostTenProductData: ChartDatasetInterface;
}
