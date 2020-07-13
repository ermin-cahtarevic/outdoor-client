import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/SideMenu.css';

const SideMenu = props => {
  let menuClasses = 'side-menu';

  if (props.sideMenuOpen) {
    menuClasses = 'side-menu open'
  }

  const location = useLocation();

  const paths = {
    home: '/',
    login: '/login',
    signup: '/signup',
    favourites: '/favourites',
  }

  const classNames = {
    home: 'menu-item',
    login: 'menu-item',
    signup: 'menu-item',
    favourites: 'menu-item',
  }

  const current = Object.keys(paths).filter(x => paths[x] === location.pathname);
  classNames[current] = 'menu-item active';

  return (
    <div className={menuClasses}>
      <h3>Outdoor App</h3>
      {
        props.isAuth ? (
          <div className="side-menu-auth">
            <div className="side-menu-auth-top">
              <Link className={classNames.home} to={paths.home}>Home</Link>
              <Link className={classNames.favourites} to={paths.favourites}>Favourites</Link>
            </div>
            <div className="side-menu-auth-bottom">
              <button className="side-menu-logout" onClick={props.handleLogout}>Logout</button>
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
}

export default SideMenu;
