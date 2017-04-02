import {createNetworkInterface} from 'apollo-client';
import ApolloClient from 'apollo-client/ApolloClient';
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3000/graphql'
  })
});

export function provideClient(): ApolloClient {
  return client;
}
