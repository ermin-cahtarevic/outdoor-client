import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { connect, useDispatch } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { IconContext } from 'react-icons';
import StarRatings from 'react-star-ratings';
import Loader from 'react-loader-spinner'
import Navbar from '../components/Navbar';
import fetchListingDetails from '../actions/fetchListingDetails';
import { addFavourite, removeFavourite } from '../actions/favourites';
import { switchIsFavourite } from '../actions';

import '../styles/Listing.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

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
      {
        data.id ? (
          <div className="listing-deatils-page-wrap">
            <div className="listing-details-img-box">
              <img src={data.image} alt={data.title} className="listing-details-img" />
              <div className="listing-details-text-on-image">
                <div>
                  <div className="listing-details-text-on-image-user">
                    <IconContext.Provider value={{ className: 'user-icon', size: '45px' }}>
                        <FaUser />
                    </IconContext.Provider>
                  </div>
                  <div className="listing-details-text-on-image-user-text">
                    <h3>{data.host}</h3>
                    {
                      data.host_rating ? (
                        <StarRatings
                          rating={parseFloat(data.host_rating)}
                          starDimension="15px"
                          starSpacing="1px"
                          starRatedColor="#d4af37"
                          starEmptyColor="rgb(221, 221, 221)"
                        />
                      ) : (
                        <span>Loading...</span>
                      )
                    }
                  </div>
                </div>
                <div className="listing-details-text-on-image-pricing">
                  <div>$ {data.price}</div>
                  <p>per person</p>
                </div>
              </div>
            </div>
            <div className="listing-details-body">
              <div className="listing-details-body-first-line">
              <h4>{data.title}</h4>
              {
                data.rating ? (
                  <div>
                    <StarRatings
                      rating={parseFloat(data.rating)}
                      starDimension="15px"
                      starSpacing="1px"
                      starRatedColor="#d4af37"
                      starEmptyColor="rgb(148, 148, 148)"
                    />
                  </div>
                ) : (
                  <span>Loading...</span>
                )
              }
              </div>
              <p>{data.description}</p>
              <div className="listing-details-location">
                <IconContext.Provider value={{ className: 'location-icon', size: '20px' }}>
                    <GoLocation />
                </IconContext.Provider>
                <span>{data.location}</span>
              </div>
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
  )
};

const mapStateToProps = ({ listings }) => ({
  listings,
});

export default withRouter(connect(mapStateToProps)(Listing));
