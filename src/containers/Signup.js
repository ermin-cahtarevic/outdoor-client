import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { signupUser } from '../actions/auth';
import Navbar from '../components/Navbar';
import '../styles/Login.css';

const Signup = () => {
  const initialInputState = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const [eachEntry, setEachEntry] = useState(initialInputState);
  const {
    name, email, password, passwordConfirmation,
  } = eachEntry;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = e => {
    setEachEntry({
      ...eachEntry,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      passwordConfirmation,
    };
    signupUser(user, history)(dispatch);
    setEachEntry({
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    });
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
            <input
              type="submit"
              value="Sign up"
              className="signup-btn"
            />
          </form>
          <Link className="auth-redirect" to="login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
