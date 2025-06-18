import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    content: String
    author: User!
  }

  type Query {
    users: [User!]!
    posts: [Post!]!
  }
`;

const users = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
];

const posts = [
  { id: "101", title: "GraphQL Basics", content: "Intro to GraphQL", authorId: "1" },
  { id: "102", title: "Advanced GraphQL", content: "Deep Dive", authorId: "1" },
  { id: "103", title: "Node.js Tips", content: "Some tips", authorId: "2" },
];

const resolvers = {
  Query: {
    users: () => users,
    posts: () => posts,
  },
  User: {
    posts: (parent) => posts.filter((post) => post.authorId === parent.id),
  },
  Post: {
    author: (parent) => users.find((user) => user.id === parent.authorId),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4005 },
});

console.log(`🚀 Server ready at: ${url}`);
