import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const server = new ApolloServer({
  typeDefs: `#graphql
    # Start with a 'type' and a name of choice
    type Post {
      id: ID!
      title: String!
      body: String!
      tags: [String]
    }

    # Register your types in Query Type.
    type Query {
      posts: [Post]
    }
  `,
  resolvers: {
    Query: {
      posts: () => [
        {
          id: '1',
          title: 'Post 1',
          body: 'Body of post 1',
          tags: ['tag1', 'tag2']
        },
        {
          id: '2',
          title: 'Post 2',
          body: 'Body of post 2',
          tags: ['tag1', 'tag2']
        }
      ]
    }
  },
})

const { url } = await startStandaloneServer(server, { listen: { port: 4002 }});
console.log(`Server ready at: ${url}`);
