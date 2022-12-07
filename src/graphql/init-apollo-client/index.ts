import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
} from "@apollo/client";
import { graphqlUrl } from "config";

export function initApolloClient(): ApolloClient<NormalizedCacheObject> {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: createHttpLink({ uri: graphqlUrl }),
    connectToDevTools: true,
  });

  return client;
}
