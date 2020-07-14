import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/Home.css';

const Home = () => (
  <div className="home-page">
    <div className="home-top-section">
      <Navbar />
      <h1>Find your perfect outdoor experience</h1>
      <h4>The best offers for you at any point of your journey</h4>
      <Link to="/signup" className="start-free">Start free</Link>
    </div>
    <div className="home-main-section">
      <p>Save your favourite outdoor activities</p>
      <h2>Engaging experiences from reliable hosts</h2>
      <img src="/snowboard.jpeg" alt="snowboarders" className="home-main-section-img" />
      <div className="home-main-section-colored">
        <p>Only the best activites for your vacation</p>
        <Link to="/signup" className="start-free">Start free</Link>
      </div>
    </div>
    <footer>
      <h2 className="footer-logo">Outdoor App</h2>
      <div className="footer-text">
        Developed by
        {' '}
        <a href="https://ermin.dev" className="footer-link">Ermin Cahtarevic</a>
        . 2020.
      </div>
    </footer>
  </div>
);

export default Home;
