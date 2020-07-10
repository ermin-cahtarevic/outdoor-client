import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Proptypes from 'prop-types';
import Slider from 'infinite-react-carousel';
import { fetchListings } from '../actions/fetchListings';
import Listing from '../components/Listing';
import '../styles/Listings.css';

const Listings = ({ listings }) => {
  const dispatch = useDispatch();
  useEffect(() => { fetchListings()(dispatch); }, [listings.length, dispatch]);

  return (
    <div className="listings-list">
      
      {
        listings.listings.length > 0 ? (
          <Slider>
          {
          listings.listings.map(listing => (
            <div key={listing.id}>
              <Listing listing={listing} />
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
