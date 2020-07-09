import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { signupUser } from '../actions/auth';

const Signup = () => {
  const initialInputState = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };

  const [eachEntry, setEachEntry] = useState(initialInputState);
  const { name, email, password, password_confirmation } = eachEntry;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = e => {
    setEachEntry({
      ...eachEntry,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      password_confirmation,
    };
    signupUser(user)(dispatch);
    setEachEntry({
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    });
    history.push('/dashboard');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="name-input"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
          required
        />
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
          className="password-input"
          type="password"
          name="password_confirmation"
          placeholder="Password Confirmation"
          value={password_confirmation}
          onChange={handleChange}
          required
        />
        <input
          type="submit"
          value="Sign up"
          className="signup-btn"
        />
      </form>
    </div>
  );
};

export default Signup;
