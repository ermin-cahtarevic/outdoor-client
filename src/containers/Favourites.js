import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { fetchFavourites } from '../actions/favourites';
import FavouriteListingItem from '../components/FavouriteListingItem';
import '../styles/Favourites.css';

const Favourites = ({ favourites }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchFavourites()(dispatch);
  }, [favourites.favourites.length, dispatch]);
  
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

const mapStateToProps = ({ favourites }) => ({
  favourites,
});

export default connect(mapStateToProps)(Favourites);
