import { createInitialData } from "./actions/initialData";

export default async function Home() {
	return (
		<main className="flex gap-2 flex-col items-center justify-between p-10">
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
		</main>
	);
}
