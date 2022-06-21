import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4omc5qi0d4o01xnb21wg57k/master',
  cache: new InMemoryCache()
})