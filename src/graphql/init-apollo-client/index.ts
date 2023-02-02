import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
  ApolloLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { graphqlUrl, isProduction } from "config";

import { getApiToken } from "../../utils/store";

export function initApolloClient(): ApolloClient<NormalizedCacheObject> {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from(createLinks()),
    connectToDevTools: !isProduction,
  });

  return client;
}

function createLinks(): ApolloLink[] {
  return [createAuthLink(), createHttpLink({ uri: graphqlUrl })];
}

function createAuthLink(): ApolloLink {
  return setContext(() => {
    const token = getApiToken();
    return {
      headers: { Authorization: token ? `Bearer ${token}` : "" },
    };
  });
}
