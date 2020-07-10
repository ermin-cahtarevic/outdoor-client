import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { loginUser } from '../actions/auth';
import Navbar from '../components/Navbar';

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
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <input
          className="email-input"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          required
        />
        <input
          className="password-input"
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
    </div>
  );
};

export default Login;
