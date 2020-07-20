import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useStore } from 'react-redux';
import { IoIosArrowBack } from "react-icons/io";
import SideMenu from './SideMenu';

import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, toggleMenuOpen] = useState(false);
  const store = useStore();
  const state = store.getState();
  const history = useHistory();
  const location = useLocation();

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

  const handleGoBack = () => {
    history.goBack();
  }

  const locationCheck = location.pathname !== '/'

  return (
    <div className="navbar">
    {
      locationCheck ? (
        <button type="button" className="go-back-btn" onClick={handleGoBack}><IoIosArrowBack className="go-back-arrow" /></button>
      ) : (
        <Link to="/" className="logo">
          <h2>Outdoor App</h2>
        </Link>
      )
    }
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
