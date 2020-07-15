import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './Home';
import Dashboard from './Dashboard';
import Signup from '../containers/Signup';
import Login from '../containers/Login';
import Listing from '../containers/Listing';
import Favourites from '../containers/Favourites';

function App() {
  const isAuth = useSelector(store => store.auth.isAuth);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          {
            isAuth ? (
              <div>
                <Route exact path="/">
                  <Dashboard />
                </Route>
                <Route exact path="/listing/:id">
                  <Listing />
                </Route>
                <Route exact path="/favourites">
                  <Favourites />
                </Route>
              </div>
            ) : (
              <div>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/signup">
                  <Signup />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
              </div>
            )
          }
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
