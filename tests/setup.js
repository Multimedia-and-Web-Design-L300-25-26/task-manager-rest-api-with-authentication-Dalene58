import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: ".env.test" });

beforeAll(async () => {
	await mongoose.connect(process.env.MONGO_URI);
	const collections = mongoose.connection.collections;
	await Promise.all(
		Object.values(collections).map((collection) => collection.deleteMany({}))
	);
});

afterAll(async () => {
	await mongoose.connection.close();
});