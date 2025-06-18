import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const server = new ApolloServer({
  typeDefs: `#graphql
    type Query {
      greetings(name: String): String!
      add(a: Int!, b: Int!): Int
    }
  `,
  resolvers: {
    Query: {
      greetings(parent, args, ctx, info) {
        console.log(args);
        return `Hello ${args.name}`
      },
      add: (_, {a, b}) => a + b
    }
  },
})

const { url } = await startStandaloneServer(server, { listen: { port: 4003 }});
console.log(`Server ready at: ${url}`);
