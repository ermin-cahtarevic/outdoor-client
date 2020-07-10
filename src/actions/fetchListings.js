import axios from 'axios';
import { getListings } from '.';

const url = 'http://localhost:3001/listings';

export const fetchListings = () => dispatch => {
  const token = localStorage.getItem('token');

  axios.get(
    url,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  ).then(res => {
    dispatch(getListings(res.data));
  });
};

export default fetchListings;
