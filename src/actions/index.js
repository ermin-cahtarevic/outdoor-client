const GET_LISTINGS = 'GET_LISTINGS';
const GET_LISTING = 'GET_LISTING';
const CLEAR_LISTING = 'CLEAR_LISTING';
const GET_FAVOURITES = 'GET_FAVOURITES';
const DELETE_FAVOURITE = 'DELETE_FAVOURITE';
const SWITCH_IS_FAVOURITE = 'SWITCH_IS_FAVOURITE';
const ADD_LOGIN_ERROR = 'ADD_LOGIN_ERROR';
const ADD_SIGNUP_ERROR = 'ADD_SIGNUP_ERROR';
const FETCH_LISTINGS_ERROR = 'FETCH_LISTINGS_ERROR';
const FETCH_LISTING_ERROR = 'FETCH_LISTING_ERROR';
const FETCH_FAVOURITES_ERROR = 'FETCH_FAVOURITES_ERROR';
const ADD_FAVOURITE_ERROR = 'ADD_FAVOURITE_ERROR';
const REMOVE_FAVOURITE_ERROR = 'REMOVE_FAVOURITE_ERROR';
const REMOVE_ERRORS = 'REMOVE_ERRORS';

const getListings = listings => ({
  type: GET_LISTINGS,
  payload: listings,
});

const getListing = listing => ({
  type: GET_LISTING,
  payload: listing,
});

const clearListing = () => ({
  type: CLEAR_LISTING,
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

const addLoginError = error => ({
  type: ADD_LOGIN_ERROR,
  payload: error
});

const addSignupError = error => ({
  type: ADD_SIGNUP_ERROR,
  payload: error
});

const fetchListingsError = error => ({
  type: FETCH_LISTINGS_ERROR,
  payload: error,
});

const fetchListingError = error => ({
  type: FETCH_LISTING_ERROR,
  payload: error,
});

const fetchFavouritesError = error => ({
  type: FETCH_FAVOURITES_ERROR,
  payload: error,
});

const addFavouriteError = error => ({
  type: ADD_FAVOURITE_ERROR,
  payload: error,
});

const removeFavouriteError = error => ({
  type: REMOVE_FAVOURITE_ERROR,
  payload: error,
});

const removeErrors = () => ({
  type: REMOVE_ERRORS,
});

export { 
  getListings, getListing, clearListing, getFavourites, deleteFavourite, switchIsFavourite,
  addLoginError, addSignupError, fetchListingsError, fetchListingError, fetchFavouritesError,
  addFavouriteError, removeFavouriteError, removeErrors,
};
