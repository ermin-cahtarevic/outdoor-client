const ADD_LOGIN_ERROR = 'ADD_LOGIN_ERROR';
const ADD_SIGNUP_ERROR = 'ADD_SIGNUP_ERROR';
const FETCH_LISTINGS_ERROR = 'FETCH_LISTINGS_ERROR';
const FETCH_LISTING_ERROR = 'FETCH_LISTING_ERROR';
const FETCH_FAVOURITES_ERROR = 'FETCH_FAVOURITES_ERROR';
const ADD_FAVOURITE_ERROR = 'ADD_FAVOURITE_ERROR';
const REMOVE_FAVOURITE_ERROR = 'REMOVE_FAVOURITE_ERROR';
const REMOVE_ERRORS = 'REMOVE_ERRORS';

const errorReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_LOGIN_ERROR:
      return {
        loginError: action.payload,
      };
    case ADD_SIGNUP_ERROR:
      return {
        signupError: action.payload,
      };
    case FETCH_LISTINGS_ERROR:
      return {
        fetchListingsError: action.payload,
      };
    case FETCH_LISTING_ERROR:
      return {
        fetchListingError: action.payload,
      };
    case FETCH_FAVOURITES_ERROR:
      return {
        fetchFavouritesError: action.payload,
      };
    case ADD_FAVOURITE_ERROR:
      return {
        addFavouriteError: action.payload,
      };
    case REMOVE_FAVOURITE_ERROR:
      return {
        removeFavouriteError: action.payload,
      };
    case REMOVE_ERRORS:
      return {};
    default: return state;
  }
};

export default errorReducer;
