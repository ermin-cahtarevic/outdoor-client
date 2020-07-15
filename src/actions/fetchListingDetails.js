import axios from 'axios';
import { getListing } from '.';

const url = id => `https://outdoor-app-api.herokuapp.com/listings/${id}`;

export const fetchListingDetails = id => dispatch => {
  const token = localStorage.getItem('token');

  axios.get(
    url(id),
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  ).then(res => {
    dispatch(getListing(res.data))
  });
};

export default fetchListingDetails;
