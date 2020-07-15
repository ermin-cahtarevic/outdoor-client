import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Proptypes from 'prop-types';
import Slider from 'react-slick';
import { fetchListings } from '../actions/fetchListings';
import ListingItem from '../components/ListingItem';

import '../styles/Listings.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { clearListing } from '../actions';

const Listings = ({ listings }) => {
  const dispatch = useDispatch();
  useEffect(() => { 
    fetchListings()(dispatch);
    if (listings.listing.data.id) {
      dispatch(clearListing());
    }
  }, [listings.length, listings.listing.data.id, dispatch]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <div className="listings-list">

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
