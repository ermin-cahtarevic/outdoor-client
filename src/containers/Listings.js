import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Proptypes from 'prop-types';
import { fetchListings } from '../actions/fetchListings';

const Listings = ({ listings }) => {
  const dispatch = useDispatch();
  useEffect(() => { fetchListings()(dispatch); }, [listings.length, dispatch]);

  return (
    <div>
      {
        listings.listings.length > 0 ? (
          listings.listings.map(listing => (
            <div key={listing.id}>{listing.title}</div>
          ))
        ) : <div>Loading...</div>
      }
    </div>
  );
};

const mapStateToProps = ({ listings }) => ({
  listings,
});

Listings.propTypes = {
  listings: Proptypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps)(Listings);
