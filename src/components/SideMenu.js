import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideMenu.css';

const SideMenu = props => {
  let menuClasses = 'side-menu';

  if (props.sideMenuOpen) {
    menuClasses = 'side-menu open'
  }

  return (
    <div className={menuClasses}>
      <h3>Outdoor App</h3>
      {
        props.isAuth ? (
          <div>
            <button onClick={props.handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <Link className="menu-item" to="/login">Sign in</Link>
            <Link className="menu-item" to="/signup">Sign up</Link>
          </div>
        )
      }
    </div>
  );
}

export default SideMenu;
