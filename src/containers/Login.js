import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { loginUser } from '../actions/auth';
import Navbar from '../components/Navbar';

import '../styles/Login.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { removeErrors } from '../actions';

const Login = () => {
  const initialInputState = {
    email: '',
    password: '',
  };

  const error = useSelector(store => store.error);
  const dispatch = useDispatch();
  const history = useHistory();

  const [eachEntry, setEachEntry] = useState(initialInputState);
  const [loginCoverClass, setLoginCoverClass] = useState('login-loading-cover');
  const [loginError, setLoginError] = useState(null);

  const { email, password } = eachEntry;

  useEffect(() => {
    setLoginError(error.loginError);
    setLoginCoverClass('login-loading-cover');
  }, [error]);

  const handleChange = e => {
    setEachEntry({
      ...eachEntry,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setLoginCoverClass('login-loading-cover open');
    setLoginError(null);
    dispatch(removeErrors());

    const user = {
      email,
      password,
    };
    loginUser(user, history)(dispatch);
    setEachEntry(initialInputState);
  };

  return (
    <div className="login-page">
      <div className="login-page-cover">
        <Navbar />
        <div className="login-page-main">
          <h1>Sign in</h1>
          <p>Sign in and find your perfect outdoor experience</p>
          <form onSubmit={handleSubmit}>
            <input
              className="login-input"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              required
            />
            <input
              className="login-input"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              required
            />
            {
              loginError && <div className="error">{loginError}</div>
            }
            <input
              type="submit"
              value="Sign in"
              className="login-btn"
            />
            <div className={loginCoverClass}>
              <Loader
                type="Oval"
                color="rgb(255, 75, 4)"
              />
            </div>
          </form>
          <Link className="auth-redirect" to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
