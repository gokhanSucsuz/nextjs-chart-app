import DbHelper from "./utils/dbHelper";

export default async function Home() {
	await DbHelper.connect();
	const name = DbHelper.getCollection("xxxx");
	console.log(name);
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
	);
}
