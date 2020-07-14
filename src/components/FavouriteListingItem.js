import React from 'react';
import StarRatings from 'react-star-ratings';
import { FiHeart } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import Proptypes from 'prop-types';
import '../styles/FavouriteListingItem.css';
import { useDispatch } from 'react-redux';
import { removeFavourite } from '../actions/favourites';

const FavouriteListingItem = ({ listing }) => {
  const dispatch = useDispatch();

  const handleRemoveFavourite = () => {
    removeFavourite(listing.id)(dispatch);
  };

  return (
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
            <IconContext.Provider value={{ className: 'heart-icon', size: '20px' }}>
              <div
                className="tooltip"
                onClick={handleRemoveFavourite}
                onKeyDown={handleRemoveFavourite}
                role="button"
                tabIndex={0}
              >
                <FiHeart />
                <span className="tooltiptext">Remove from favourites</span>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

FavouriteListingItem.propTypes = {
  listing: Proptypes.instanceOf(Object).isRequired,
};

export default FavouriteListingItem;
