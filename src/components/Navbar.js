import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/Navbar.css';
import { useStore } from 'react-redux';
import SideMenu from './SideMenu';

const Navbar = () => {
  const [menuOpen, toggleMenuOpen] = useState(false);
  const store = useStore();
  const state = store.getState();
  const history = useHistory();

  const handleLogout = () => {
    store.dispatch({
      type: 'LOGOUT_SUCCESS',
    });
    history.push('/login');
  };

  const classListMenu = menuOpen ? 'bars-menu nav-icon4 open' : 'bars-menu nav-icon4';

  const handleMenuToggle = () => {
    toggleMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <h2>Outdoor App</h2>
      </Link>
      <div
        className={classListMenu}
        onClick={handleMenuToggle}
        onKeyDown={handleMenuToggle}
        role="button"
        tabIndex={0}
      >
        <span />
        <span />
        <span />
      </div>
      <SideMenu
        isAuth={state.auth.isAuth}
        sideMenuOpen={menuOpen}
        handleLogout={handleLogout}
      />
    </div>
  );
};

export default Navbar;
