import { getChartData } from "./actions/getChartData";
import { createInitialData } from "./actions/initialData";
import IncomeExpenseLineChart from "./components/incomeExpenseLineChart";
import IncomeExpenseWeeklyChart from "./components/incomeExpenseWeeklyChart";
import PieCategoryChart from "./components/pieCategoryChart";
import StackBarData from "./components/stackedBarVideoChart";
import VisitorsLineChart from "./components/visitorsLineChart";
import WorldMap from "./components/worldMap";
import { colors } from "./constants/consts";

export default async function Home() {
	const chartData = await getChartData();

	return (
		<main className="flex min-h-screen flex-col gap-8  p-12 bg-cyan-800">
			Dashboard For Admins
			<div className="flex items-center">
				<form className="max-w-sm mx-auto" action={createInitialData}>
					<button
						type="submit"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Initial Data Generate
					</button>
				</form>
			</div>
			<div className="grid grid-cols-1 gap-4">
				<IncomeExpenseLineChart data={chartData?.yearlyLineData} />
			</div>
			<div className="grid grid-cols-3 gap-4">
				<div>
					<IncomeExpenseWeeklyChart data={chartData?.incomeExpenseBarData} />
				</div>
				<div>
					<VisitorsLineChart data={chartData?.visitorsLineData} />
				</div>
				<div>
					<StackBarData data={chartData?.watchStackedData} />
				</div>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<div>
					<WorldMap data={chartData?.mostDataCountry} />
				</div>
				<div className="border-green-600 rounded-lg border-4">
					<PieCategoryChart data={chartData?.stockPieData} />
					<div className="w-full p-1 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
						<div className="flow-root">
							<ul
								role="list"
								className="divide-y divide-gray-200 dark:divide-gray-700">
								{chartData?.stockPieData.labels?.map((item, index) => (
									<li
										key={index}
										className={
											index % 2 === 0
												? "py-1 sm:py-2 bg-slate-200"
												: "py-1 sm:py-2"
										}>
										<div className="flex items-center">
											<div className="flex-1 min-w-0 ms-4">
												<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
													{}
												</p>
											</div>
											<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
												<span
													className={`w-10 h-10 m-1 rounded-lg`}
													style={{
														backgroundColor: `${colors[index]}`
													}}></span>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
