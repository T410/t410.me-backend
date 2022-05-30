import { ApolloServer } from "apollo-server-lambda";
import graphqlSchema from "../../graphql/schema";
import graphqlResolver from "../../graphql/resolver";
import connect from "../../db";

exports.handler = async function (event: any, context: any) {
	const db = await connect();
	const server = new ApolloServer({ typeDefs: graphqlSchema, resolvers: graphqlResolver, csrfPrevention: true });

	return new Promise((resolve, reject) => {
		const cb = (err: Error, args: any) => (err ? resolve(err) : resolve(args));
		resolve(server.createHandler()({ ...event, requestContext: context }, context, cb));
	});
};
