const GET_LISTINGS = 'GET_LISTINGS';
const GET_LISTING = 'GET_LISTING';
const GET_FAVOURITES = 'GET_FAVOURITES';
const DELETE_FAVOURITE = 'DELETE_FAVOURITE';
const SWITCH_IS_FAVOURITE = 'SWITCH_IS_FAVOURITE';

const getListings = listings => ({
  type: GET_LISTINGS,
  payload: listings,
});

const getListing = listing => ({
  type: GET_LISTING,
  payload: listing,
});

const getFavourites = favourites => ({
  type: GET_FAVOURITES,
  payload: favourites,
});

const deleteFavourite = id => ({
  type: DELETE_FAVOURITE,
  payload: id,
});

const switchIsFavourite = () => ({
  type: SWITCH_IS_FAVOURITE,
});

export { 
  getListings, getListing, getFavourites, deleteFavourite, switchIsFavourite,
};
