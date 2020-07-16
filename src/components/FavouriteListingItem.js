import React from 'react';
import StarRatings from 'react-star-ratings';
import { FiHeart } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import Proptypes from 'prop-types';
import '../styles/FavouriteListingItem.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { removeFavourite } from '../actions/favourites';

const FavouriteListingItem = ({ listing }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRemoveFavourite = () => {
    removeFavourite(listing.id)(dispatch);
  };

  const showListing = id => history.push(`/listing/${id}`);

  return (
    <div className="favourite-listing-item">
      <div>
        <img className="favourite-listing-item-img" src={listing.image} alt={listing.title} />
      </div>
      <div className="favourite-listing-item-body">
        <div
          className="h3"
          onClick={() => showListing(listing.id)}
          onKeyDown={() => showListing(listing.id)}
          role="button"
          tabIndex={0}
        >
          {listing.title}
        </div>
        <div className="favourite-listing-item-body-icons">
          <StarRatings
            rating={parseFloat(listing.rating)}
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
