import React from 'react';
import StarRatings from 'react-star-ratings';
import Proptypes from 'prop-types';
import { useHistory } from 'react-router';
import '../styles/ListingItem.css';

const ListingItem = ({ listing }) => {
  const history = useHistory();
  const showListing = id => history.push(`/listing/${id}`);

  return (
    <div
      className="listing-item"
      onClick={() => showListing(listing.id)}
      onKeyDown={() => showListing(listing.id)}
      role="button"
      tabIndex={0}
    >
      <img src={listing.image} alt={listing.title} className="listing-img" />
      <div className="listing-text">
        <div className="listing-text-left">
          <h3>{listing.title}</h3>
          <StarRatings
            rating={parseFloat(listing.rating)}
            starDimension="20px"
            starSpacing="1px"
            starRatedColor="#d4af37"
            starEmptyColor="rgb(221, 221, 221)"
          />
        </div>
        <div className="listing-text-right">
          <div>
            $
            {listing.price}
          </div>
          <span>per person</span>
        </div>
      </div>
    </div>
  );
};

ListingItem.propTypes = {
  listing: Proptypes.instanceOf(Object).isRequired,
};

export default ListingItem;
