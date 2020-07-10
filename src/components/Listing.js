import React from 'react';
import '../styles/Listing.css';

const Listing = ({ listing }) => {
  return (
    <div className="listing-item">
      <img src="https://images.unsplash.com/photo-1522609163202-be0734d421e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="mountain" className="listing-img" />
      <div className="listing-text">
        <div className="listing-text-left">
          <h3>{listing.title}</h3>
          <p>rating</p>
        </div>
        <div className="listing-text-right">
          <h5>price</h5>
        </div>
      </div>
    </div>
  );
};

export default Listing;
