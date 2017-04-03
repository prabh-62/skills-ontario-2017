import {createNetworkInterface} from 'apollo-client';
import ApolloClient from 'apollo-client/ApolloClient';
import {environment} from '../../environments/environment';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: environment.graphql_endpoint
  })
});

export function provideClient(): ApolloClient {
  return client;
}
