import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
const cache = new InMemoryCache();
const httpLink = createHttpLink({
	uri: "https://job-recover-server.herokuapp.com",
});

export default new ApolloClient({
	cache,
	link: httpLink,
	name: "job-recover-web-client",
});
