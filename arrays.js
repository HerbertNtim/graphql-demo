import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const server = new ApolloServer({
  typeDefs: `#graphql
    type Query {
      greetings: [String]
      luckyNumbers: [Int]
      temperatures: [Float]
      flags: [Boolean]
      ids: [ID]
    }
  `,
  resolvers: {
    Query: {
      greetings: () => ['Hello', "Hi", "Hey"],
      luckyNumbers: () => [3, 7, 13],
      temperatures: () => [22.5, 23.5, 21.9],
      flags: () => [true, false, true],
      ids: () => ['id_1', 'id_2', 'id_3']
    }
  },
})

const { url } = await startStandaloneServer(server, { listen: { port: 4004 }});
console.log(`Server ready at: ${url}`);
