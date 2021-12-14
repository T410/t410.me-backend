import { buildSchema } from "graphql";

export default buildSchema(`
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

    type RootMutation {
        createProject(projectInput: ProjectInput): Project!
        deleteProject(id: ID!): Project!
    }

    type ProjectData {
        projects: [Project!]!
    }

    type RootQuery {
        projects: [Project!]!
        project(id:ID!): Project!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
