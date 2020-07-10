import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'infinite-react-carousel';
const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to="/signup">Signup</Link>
    <Link to="/login">Login</Link>
    <Slider dots>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
    </Slider>
  </div>
);

export default Home;
