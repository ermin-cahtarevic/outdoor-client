import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { signupUser } from '../actions/auth';
import Navbar from '../components/Navbar';

import '../styles/Login.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { removeErrors } from '../actions';

const Signup = () => {
  const initialInputState = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const error = useSelector(store => store.error);

  const [eachEntry, setEachEntry] = useState(initialInputState);
  const {
    name, email, password, passwordConfirmation,
  } = eachEntry;
  const dispatch = useDispatch();
  const history = useHistory();

  const [signupCoverClass, setSignupCoverClass] = useState('login-loading-cover');
  const [signupError, setSignupError] = useState(null);

  const errorCheck = Object.keys(error).length;

  useEffect(() => {
    dispatch(removeErrors());
  }, [errorCheck, dispatch]);

  useEffect(() => {
    setSignupError(error.signupError);
    setSignupCoverClass('login-loading-cover');
  }, [error]);

  const handleChange = e => {
    setEachEntry({
      ...eachEntry,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setSignupCoverClass('login-loading-cover open');
    setSignupError(null);
    dispatch(removeErrors());

    const user = {
      name,
      email,
      password,
      passwordConfirmation,
    };
    signupUser(user, history)(dispatch);
    setEachEntry(initialInputState);
  };

  return (
    <div className="login-page">
      <div className="login-page-cover">
        <Navbar />
        <div className="login-page-main">
          <h1>Sign up</h1>
          <p>Sign up for free and find your perfect outdoor experience</p>
          <form onSubmit={handleSubmit}>
            <input
              className="signup-input"
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleChange}
              required
            />
            <input
              className="signup-input"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              required
            />
            <input
              className="signup-input"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              required
            />
            <input
              className="signup-input"
              type="password"
              name="passwordConfirmation"
              placeholder="Password Confirmation"
              value={passwordConfirmation}
              onChange={handleChange}
              required
            />
            {
              signupError && <div className="error">{signupError}</div>
            }
            <input
              type="submit"
              value="Sign up"
              className="signup-btn"
            />
            <div className={signupCoverClass}>
              <Loader
                type="Oval"
                color="rgb(255, 75, 4)"
              />
            </div>
          </form>
          <Link className="auth-redirect" to="login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
