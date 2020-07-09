import React from 'react';

const Signup = () => {
  return (
    <div>
      <form>
        <input
          className="name-input"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
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
          className="password-input"
          type="password"
          name="passwordConfirmation"
          placeholder="Password Confirmation"
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
