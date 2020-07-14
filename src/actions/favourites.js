import axios from 'axios';
import { getFavourites, deleteFavourite } from '.';

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
  });
};

export const addFavourite = id => {
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
  ).then(res => {
    console.log(res.data);
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
    if (res.data.message === 'Listing removed from favourites successfully') {
      dispatch(deleteFavourite(id));
    }
  });
};
