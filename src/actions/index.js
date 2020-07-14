const GET_LISTINGS = 'GET_LISTINGS';
const GET_FAVOURITES = 'GET_FAVOURITES';
const DELETE_FAVOURITE = 'DELETE_FAVOURITE';

const getListings = listings => ({
  type: GET_LISTINGS,
  payload: listings,
});

const getFavourites = favourites => ({
  type: GET_FAVOURITES,
  payload: favourites,
});

const deleteFavourite = id => ({
  type: DELETE_FAVOURITE,
  payload: id,
});

export { getListings, getFavourites, deleteFavourite };
