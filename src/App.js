import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./css/App.css";
import ErrorPage from "./views/ErrorPage";
import Home from "./views/Home";
import Search from './views/Search'
import { ApolloProvider } from "@apollo/client";
import Client from "./ApolloProvider";
import "./css/Form.css";

function App() {
	return (
		<ApolloProvider client={Client}>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/error" exact component={ErrorPage} />
					<Route path='/search' exact component={Search}/>
					<Route>
						<Redirect to="/error" />
					</Route>
				</Switch>
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default App;
