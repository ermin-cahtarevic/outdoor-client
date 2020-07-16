import axios from 'axios';
import { getFavourites, deleteFavourite, fetchFavouritesError, addFavouriteError, removeFavouriteError } from '.';

const urlFavourites = 'https://outdoor-app-api.herokuapp.com/favourites';
const token = localStorage.getItem('token');

export const fetchFavourites = () => dispatch => {
  axios.get(
    urlFavourites,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  ).then(res => {
    dispatch(getFavourites(res.data));
  }).catch(err => {
    dispatch(fetchFavouritesError(err.message));
  });
};

export const addFavourite = id => dispatch => {
  axios.post(
    urlFavourites,
    {
      listing_id: id,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  ).catch(err => {
    dispatch(addFavouriteError(err.message));
  });
};

export const removeFavourite = id => dispatch => {
  axios.delete(
    urlFavourites,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        listing_id: id,
      },
    },
  ).then(res => {
    if (res.status === 200) {
      dispatch(deleteFavourite(id));
    }
  }).catch(err => {
    dispatch(removeFavouriteError(err.message));
  });
};
