import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const server = new ApolloServer({
  typeDefs: `#graphql
    type Query {
      id: ID!
      name: String
      age: Int
      isActive: Boolean 
      height: Float
    }
  `,
  resolvers: {
    Query: {
      id: () => '1',
      name: () => 'Herbert Ntim',
      age: () => 23,
      isActive: () => true,
      height: () => 180.6885
    }
  },
})

const { url } = await startStandaloneServer(server, { listen: { port: 4001 }});
console.log(`Server ready at: ${url}`);
