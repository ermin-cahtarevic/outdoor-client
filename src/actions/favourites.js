import axios from 'axios';
import { getFavourites } from '.';

const urlFavourites = 'https://outdoor-app-api.herokuapp.com/favourites';

export const fetchFavourites = () => dispatch => {
  const token = localStorage.getItem('token');

  axios.get(
    urlFavourites,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  ).then(res => {
    dispatch(getFavourites(res.data))
    console.log(res.data);
  });
};
