import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import Proptypes from 'prop-types';
import Loader from 'react-loader-spinner'
import Navbar from '../components/Navbar';
import { fetchFavourites } from '../actions/favourites';
import FavouriteListingItem from '../components/FavouriteListingItem';
import { clearListing } from '../actions';

import '../styles/Favourites.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

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
          favourites.favourites.length > 0 ? (
          favourites.favourites.map(listing => (
            <FavouriteListingItem key={listing.id} listing={listing} />
          ))
          ) : (
            <div className="loader-wrap">
              <Loader
                type="Oval"
                color="rgb(255, 75, 4)"
              />
            </div>
          )
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
