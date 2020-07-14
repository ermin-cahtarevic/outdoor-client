import React from 'react';
import StarRatings from 'react-star-ratings';
import Proptypes from 'prop-types';
import { useHistory } from 'react-router';
import '../styles/ListingItem.css';

const ListingItem = ({ listing }) => {
  const history = useHistory();
  const showListing = id => history.push(`/listing/${id}`);

  return (
    <div className="listing-item">
      <img src="https://images.unsplash.com/photo-1522609163202-be0734d421e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="mountain" className="listing-img" />
      <div
        className="listing-text"
        onClick={() => showListing(listing.id)}
        onKeyDown={() => showListing(listing.id)}
        role="button"
        tabIndex={0}
      >
        <div className="listing-text-left">
          <h3>{listing.title}</h3>
          <StarRatings
            rating={3.5}
            starDimension="20px"
            starSpacing="1px"
            starRatedColor="#d4af37"
            starEmptyColor="rgb(221, 221, 221)"
          />
        </div>
        <div className="listing-text-right">
          <div>$ 75</div>
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
