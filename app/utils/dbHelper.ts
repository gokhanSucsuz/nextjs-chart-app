"use server";
import { Db, MongoClient, ServerApiVersion } from "mongodb";

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
let db: Db;
let isConnected = false;

async function connectDb() {
	if (!isConnected) {
		try {
			await client.connect();
			db = client.db(dbName);
			isConnected = true;
			console.log("Bağlantı kuruldu!");
		} catch (error) {
			console.log("Hata ", error);
			isConnected = false;
			throw error;
		}
	}
}

async function closeDb() {
	if (isConnected) {
		try {
			await client.close();
			isConnected = false;
			console.log("Bağlantı kapatıldı!");
		} catch (error) {
			console.log("Hata ", error);
			throw error;
		}
	}
}

function getCollection(collectionName: string) {
	return db.collection(collectionName);
}

export { connectDb, closeDb, getCollection };
