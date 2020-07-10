import React from 'react';
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <Link to="/" className="logo">
      <h2>Outdoor App</h2>
    </Link>
    <div>
      <FontAwesomeIcon
        icon={faBars}
        className="bars-menu"
      />
    </div>
  </div>
);

export default Navbar;
