const GET_LISTINGS = 'GET_LISTINGS';
const GET_LISTING = 'GET_LISTING';
const CLEAR_LISTING = 'CLEAR_LISTING';
const GET_FAVOURITES = 'GET_FAVOURITES';
const DELETE_FAVOURITE = 'DELETE_FAVOURITE';
const SWITCH_IS_FAVOURITE = 'SWITCH_IS_FAVOURITE';
const ADD_LOGIN_ERROR = 'ADD_LOGIN_ERROR';
const ADD_SIGNUP_ERROR = 'ADD_SIGNUP_ERROR';
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


const removeErrors = () => ({
  type: REMOVE_ERRORS,
})

export { 
  getListings, getListing, clearListing, getFavourites, deleteFavourite, switchIsFavourite,
  addLoginError, addSignupError, removeErrors,
};
