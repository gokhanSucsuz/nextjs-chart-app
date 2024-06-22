import DbHelper from "../utils/dbHelper";

export async function createInitialData() {
	await DbHelper.connect();
}
