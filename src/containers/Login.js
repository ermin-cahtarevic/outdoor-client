import React from 'react';

const Login = () => {
  return (
    <div>
      <form>
        <input
          className="email-input"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className="password-input"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          type="submit"
          value="Login"
          className="signup-btn"
        />
      </form>
    </div>
  );
};

export default Login;