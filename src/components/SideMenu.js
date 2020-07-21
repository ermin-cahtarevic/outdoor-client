import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Proptypes from 'prop-types';
import '../styles/SideMenu.css';

const SideMenu = ({ sideMenuOpen, isAuth, handleLogout }) => {
  let menuClasses = 'side-menu';

  if (sideMenuOpen) {
    menuClasses = 'side-menu open';
  }

  const location = useLocation();

  const paths = {
    home: '/',
    login: '/login',
    signup: '/signup',
    favourites: '/favourites',
  };

  const classNames = {
    home: 'menu-item',
    login: 'menu-item',
    signup: 'menu-item',
    favourites: 'menu-item',
  };

  const current = Object.keys(paths).filter(x => paths[x] === location.pathname);
  classNames[current] = 'menu-item active';

  return (
    <div className={menuClasses}>
      <h3>Outdoor App</h3>
      {
        isAuth ? (
          <div className="side-menu-auth">
            <div className="side-menu-auth-top">
              <Link className={classNames.home} to={paths.home}>Home</Link>
              <Link className={classNames.favourites} to={paths.favourites}>Favourites</Link>
            </div>
            <div className="side-menu-auth-bottom">
              <button type="button" className="side-menu-logout" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        ) : (
          <div className="side-menu-non-auth">
            <Link className={classNames.home} to={paths.home}>Home</Link>
            <Link className={classNames.login} to={paths.login}>Sign in</Link>
            <Link className={classNames.signup} to={paths.signup}>Sign up</Link>
          </div>
        )
      }
    </div>
  );
};

SideMenu.propTypes = {
  sideMenuOpen: Proptypes.bool.isRequired,
  isAuth: Proptypes.bool,
  handleLogout: Proptypes.func.isRequired,
};

SideMenu.defaultProps = {
  isAuth: false,
};

export default SideMenu;
