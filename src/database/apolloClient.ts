import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${import.meta.env.VITE_FLIGHT_SEARCH_API}/graphql`, // Replace with your API URL
  }),
  cache: new InMemoryCache(),
});

export default client;
