import React from 'react';
import '../styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Signup from '../containers/Signup';
import Login from '../containers/Login';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
