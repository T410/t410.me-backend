import express from "express";
import mongoose from "mongoose";
import { graphqlHTTP } from "express-graphql";
import graphqlSchema from "./graphql/schema";
import graphqlResolver from "./graphql/resolver";

require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json());

app.use(
	"/graphql",
	graphqlHTTP({
		schema: graphqlSchema,
		rootValue: graphqlResolver,
		graphiql: true,
	})
);

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(port, () => console.log(`Example app listening on port ${port}!`));
	})
	.catch((err) => {
		console.log(err);
	});
