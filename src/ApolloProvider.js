import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
const cache = new InMemoryCache();
const httpLink = createHttpLink({
	uri: "http://localhost:9090/",
});

export default new ApolloClient({
	cache,
	link: httpLink,
	name: "superchat-web-client",
});
