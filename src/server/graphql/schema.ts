import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Query {
    users(input: GetUserInput): [User]
  }

  input GetUserInput {
    pageSize: Int!
    pageNumber: Int!
    filter: String
  }

  type User {
    id: ID!
    name: String!
    email: String!
    phone: String!
    url: String!
    companyName: String!
  }
`;
export default typeDefs;
