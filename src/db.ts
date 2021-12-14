import mongoose from "mongoose";
mongoose.Promise = global.Promise;

// require("dotenv").config();

let isConnected: number;
let cachedDB: typeof mongoose;
const connectToDatabase = () => {
	if (cachedDB && isConnected) {
		console.log("=> using existing database connection");
		return Promise.resolve();
	}

	console.log("=> using new database connection");
	return mongoose.connect(process.env.MONGO_URI).then((db: typeof mongoose) => {
		isConnected = db.connections[0].readyState;
		cachedDB = db;
	});
};

export default connectToDatabase;
