import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions/auth';
import Navbar from '../components/Navbar';
import '../styles/Login.css';

const Login = () => {
  const initialInputState = {
    email: '',
    password: '',
  };

  const [eachEntry, setEachEntry] = useState(initialInputState);
  const { email, password } = eachEntry;
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
      email,
      password,
    };
    loginUser(user, history)(dispatch);
    setEachEntry({
      email: '',
      password: '',
    });
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
            <input
              type="submit"
              value="Login"
              className="login-btn"
            />
          </form>
          <Link className="auth-redirect" to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
