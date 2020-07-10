import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/Home.css';

const Home = () => (
  <div className="home-page">
    <Navbar />
    <h1>Find your perfect outdoor experience</h1>
    <Link to="/signup">Signup</Link>
    <Link to="/login">Login</Link>
    <Link to="/dashboard">Dashboard</Link>
  </div>
);

export default Home;
