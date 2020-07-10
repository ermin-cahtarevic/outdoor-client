import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <Link to="/">
      <h2>Outdoor App</h2>
    </Link>
    <div>Logout</div>
  </div>
);

export default Navbar;
