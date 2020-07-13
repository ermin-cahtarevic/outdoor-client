import React from 'react';
import StarRatings from 'react-star-ratings';
import { FiHeart } from 'react-icons/fi';
import { IconContext } from "react-icons";
import '../styles/FavouriteListingItem.css';

const FavouriteListingItem = ({ listing }) => (
  <div className="favourite-listing-item">
    <div>
      <img className="favourite-listing-item-img" src="https://images.unsplash.com/photo-1522609163202-be0734d421e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="random img" />
    </div>
    <div className="favourite-listing-item-body">
      <h3>{listing.title}</h3>
      <div className="favourite-listing-item-body-icons">
        <StarRatings
          rating={3.5}
          starDimension="15px"
          starSpacing="1px"
          starRatedColor="#d4af37"
          starEmptyColor="rgb(221, 221, 221)"
        />
        <div className="heart-icon">
        <IconContext.Provider value={{ className: "heart-icon", size: "20px" }}>
          <div>
            <FiHeart />
          </div>
        </IconContext.Provider>
        </div>
      </div>
    </div>
  </div>
);

export default FavouriteListingItem;
