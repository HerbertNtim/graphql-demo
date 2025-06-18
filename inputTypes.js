import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

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

    input AddUserInput {
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    }

    type Mutation {
      addUser(input: AddUserInput!): User!
    }
  `;

let users = [];
let idCounter = 1;

const resolvers = {
    Mutation: {
      addUser: (_, {input}) => {
        const { firstName, lastName, email, password } =  input;
        if(users.find((user) => user.email === email)) {
          throw new Error("User already exists")
        }

        const newUser = {
          id: idCounter++,
          firstName,
          lastName,
          email,
          password
        };

        users.push(newUser)
        return newUser
      }
    }
  }

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server, { listen: { port: 4007 } });
console.log(`Server ready at: ${url}`);
