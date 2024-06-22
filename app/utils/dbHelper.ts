import { Collection, Db, MongoClient, ServerApiVersion } from "mongodb";

const uri =
	"mongodb+srv://admin:admin123@myfreecluster.wn7kmj7.mongodb.net/?retryWrites=true&w=majority&appName=myFreeCluster";
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true
	}
});

const dbName = "chartdb";

class DbHelper {
	db: Db;
	isConnected: boolean;

	constructor() {
		this.db = client.db(dbName);
		this.isConnected = false;
	}

	async connect() {
		if (!this.isConnected) {
			try {
				await client.connect();
				this.isConnected = true;
				console.log("Connection is established!");
			} catch (error) {
				console.log("Eror ", error);
				this.isConnected = false;
				throw error;
			}
		}
	}

	getCollection(collectionName: string) {
		return this.db.collection(collectionName);
	}

	async close() {
		if (this.isConnected) {
			try {
				await client.close();
				this.isConnected = false;
				console.log("Connection is closed!");
			} catch (error) {
				console.log("Error ", error);
				throw error;
			}
		}
	}
}
export default new DbHelper();
