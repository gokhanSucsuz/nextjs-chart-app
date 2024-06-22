import { getChartData } from "./actions/getChartData";
import { createInitialData } from "./actions/initialData";
import IncomeExpenseLineChart from "./components/incomeExpenseLineChart";

export default async function Home() {
	const chartData = await getChartData();

	return (
		<main className="flex min-h-screen flex-col gap-8  p-12 bg-slate-600">
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
				<IncomeExpenseLineChart data={chartData.yearlyLineData} />
			</div>
		</main>
	);
}
