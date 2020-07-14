import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import fetchListingDetails from '../actions/fetchListingDetails';
import { connect, useDispatch } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import StarRatings from 'react-star-ratings';
import Navbar from '../components/Navbar';
import { addFavourite, removeFavourite } from '../actions/favourites';
import '../styles/Listing.css';
import { switchIsFavourite } from '../actions';

const Listing = ({ listings, match }) => {
  const { params: { id } } = match;
  const { data, isFav } = listings.listing;
  const dispatch = useDispatch();

  useEffect(() => {
    fetchListingDetails(id)(dispatch);
  }, [id, dispatch]);

  const handleAddFavourite = id => {
    addFavourite(id);
    dispatch(switchIsFavourite());
  };

  const handleRemoveFavourite = id => {
    removeFavourite(id)(dispatch);
    dispatch(switchIsFavourite());
  };

  return (
    <div className="listing-deatils-page">
      <Navbar />
      <div className="listing-details-img-box">
        <img src="https://images.unsplash.com/photo-1522609163202-be0734d421e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="mountain" className="listing-details-img" />
        <div className="listing-details-text-on-image">
          <div>
            <div className="listing-details-text-on-image-user">
              <IconContext.Provider value={{ className: 'user-icon', size: '45px' }}>
                  <FaUser />
              </IconContext.Provider>
            </div>
            <div className="listing-details-text-on-image-user-text">
              <h3>Super Host</h3>
              <StarRatings
                rating={3.5}
                starDimension="15px"
                starSpacing="1px"
                starRatedColor="#d4af37"
                starEmptyColor="rgb(221, 221, 221)"
              />
            </div>
          </div>
          <div className="listing-details-text-on-image-pricing">
            <div>$ 75</div>
            <p>per person</p>
          </div>
        </div>
      </div>
      <div className="listing-details-body">
        {data.title}
      </div>
      <div className="listing-details-favourite">
        {
          isFav? (
            <button onClick={() => handleRemoveFavourite(data.id)}>Remove from favourites</button>
          ) : (
            <button onClick={() => handleAddFavourite(data.id)}>Add to favourites</button>
          )
        }
      </div>
    </div>
  )
};

const mapStateToProps = ({ listings }) => ({
  listings,
});

export default withRouter(connect(mapStateToProps)(Listing));
