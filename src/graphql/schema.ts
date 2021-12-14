const { gql } = require("apollo-server-lambda");

export default gql`
	type Project {
		_id: ID!
		title: String!
		description: String!
		source: String
		demo: String
	}

	input ProjectInput {
		title: String!
		description: String!
		source: String
		demo: String
	}

	type Mutation {
		createProject(projectInput: ProjectInput): Project!
		deleteProject(id: ID!): Project!
	}

	type ProjectData {
		projects: [Project!]!
	}

	type Query {
		projects: [Project!]!
		project(id: ID!): Project!
	}

	schema {
		query: Query
		mutation: Mutation
	}
`;
