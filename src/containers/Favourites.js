import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import Proptypes from 'prop-types';
import Navbar from '../components/Navbar';
import { fetchFavourites } from '../actions/favourites';
import FavouriteListingItem from '../components/FavouriteListingItem';
import '../styles/Favourites.css';
import { clearListing } from '../actions';

const Favourites = ({ favourites, listings }) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetchFavourites()(dispatch);
    if (listings.listing.data.id) {
      dispatch(clearListing());
    }
  }, [favourites.favourites.length, listings.listing.data.id, dispatch]);

  return (
    <div>
      <Navbar />
      <div className="favourite-listings-list">
        {
          favourites.favourites.map(listing => (
            <FavouriteListingItem key={listing.id} listing={listing} />
          ))
        }
      </div>
    </div>
  );
};

const mapStateToProps = ({ favourites, listings }) => ({
  favourites,
  listings,
});

Favourites.propTypes = {
  favourites: Proptypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps)(Favourites);
