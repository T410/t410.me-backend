import express from "express";
import { graphqlHTTP } from "express-graphql";
import graphqlSchema from "./graphql/schema";
import graphqlResolver from "./graphql/resolver";
import serverless from "serverless-http";

require("dotenv").config();
require("./db");

const app = express();

app.use(express.json());

app.use(
	"/graphql",
	graphqlHTTP({
		schema: graphqlSchema,
		rootValue: graphqlResolver,
		graphiql: true,
	})
);

module.exports.handler = serverless(app);
