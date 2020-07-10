import axios from 'axios';
import { getListings } from '.';

const url = 'https://outdoor-app-api.herokuapp.com/listings';

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
