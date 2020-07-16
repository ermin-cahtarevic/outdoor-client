import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Proptypes from 'prop-types';
import Slider from 'react-slick';
import Loader from 'react-loader-spinner';
import { fetchListings } from '../actions/fetchListings';
import ListingItem from '../components/ListingItem';
import { clearListing, removeErrors } from '../actions';

import '../styles/Listings.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Listings = ({ listings }) => {
  const dispatch = useDispatch();
  const error = useSelector(store => store.error.fetchListingsError);

  useEffect(() => {
    dispatch(removeErrors());
    fetchListings()(dispatch);
    if (listings.listing.data.id) {
      dispatch(clearListing());
    }
  }, [listings.length, listings.listing.data.id, dispatch]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <div className="listings-list">
      {
        error
        && (
        <div className="error">
          {error}
          <p>Please try reloading the page</p>
        </div>
        )
      }
      {
        listings.listings.length > 0 ? (
          <Slider {...settings}>
            {
          listings.listings.map(listing => (
            <div key={listing.id}>
              <ListingItem listing={listing} />
            </div>
          ))
          }
          </Slider>
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
  );
};

const mapStateToProps = ({ listings }) => ({
  listings,
});

Listings.propTypes = {
  listings: Proptypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps)(Listings);
