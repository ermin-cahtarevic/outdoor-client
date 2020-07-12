import React from 'react';
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Navbar.css';
import { useStore } from 'react-redux';

const Navbar = () => {
  const store = useStore();
  const state = store.getState();

  const handleLogout = () => {
    store.dispatch({
      type: 'LOGOUT_SUCCESS',
    });
  }

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <h2>Outdoor App</h2>
      </Link>
      {
        state.auth.isAuth ? (
          <div>
            <button onClick={handleLogout}>Logout</button>
            <FontAwesomeIcon
              icon={faBars}
              className="bars-menu"
            />
          </div>
        ) : (
          <div>
            <Link to="/login" className="navbar-signin">Sign in</Link>
            <Link to="/signup" className="navbar-signup">Sign up</Link>
          </div>
        )
      }
    </div>
  );
}

export default Navbar;
