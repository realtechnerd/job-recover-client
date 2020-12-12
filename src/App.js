import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './css/App.css';
import ErrorPage from './views/ErrorPage';
import Home from './views/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/error' exact component={ErrorPage} />
          <Route>
            <Redirect to='/error' />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
