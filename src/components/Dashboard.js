import React from 'react';
import Listings from '../containers/Listings';
import Navbar from './Navbar';
import Spacer from './Spacer';

const Dashboard = () => (
  <div>
    <Navbar />
    <Spacer />
    <Listings />
  </div>
);

export default Dashboard;
