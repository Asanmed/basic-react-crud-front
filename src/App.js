import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/global-styles';

import Login from './pages/Login';
import UsersList from './pages/UserList';
import UserDetail from './pages/UserDetail';
import ErrorPage from './pages/ErrorPage';

function App() {
    return (
        <div>
            <GlobalStyle />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route exact path="/users">
                        <UsersList />
                    </Route>
                    <Route path="/details/:id">
                        <UserDetail />
                    </Route>
                    <Route path="*">
                        <ErrorPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
