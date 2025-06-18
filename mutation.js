import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// 1. Define schema
const typeDefs = `#graphql
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): User!
  }
`;

// 2. In-memory data
let users = [];
let idCounter = 1;

// 3. Resolvers
const resolvers = {
  Query: {
    users: () => users,
  },

  Mutation: {
    addUser: (_, { firstName, lastName, email, password }) => {
      const newUser = {
        id: idCounter++,
        firstName,
        lastName,
        email,
        password,
      };
      users.push(newUser);
      return newUser;
    },
  },
};

// 4. Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// 5. Start server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4006 },
});
console.log(`🚀 Server ready at: ${url}`);
