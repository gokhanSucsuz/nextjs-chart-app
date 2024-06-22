export interface ChartDatasetBaseInterface {
	labels: Array<string>;
	dataSets: Array<{
		label: string;
		data: Array<number>;
	}>;
}
