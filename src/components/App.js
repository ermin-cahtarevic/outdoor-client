import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './Home';
import Dashboard from './Dashboard';
import Signup from '../containers/Signup';
import Login from '../containers/Login';
import Listing from './Listing';
import Favourites from '../containers/Favourites';
import '../styles/App.css';

function App() {

  const isAuth = useSelector(store => store.auth.isAuth);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {
            isAuth ? (
              <div>
                <Route exact path="/">
                  <Dashboard />
                </Route>
                <Route exact path="/listing">
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
