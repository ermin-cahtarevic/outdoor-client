const GET_LISTINGS = 'GET_LISTINGS';
const GET_LISTING = 'GET_LISTING';
const CLEAR_LISTING = 'CLEAR_LISTING';
const SWITCH_IS_FAVOURITE = 'SWITCH_IS_FAVOURITE';

const initialState = {
  listings: [],
  listing: {
    data: {},
    isFav: false,
  },
};

const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LISTINGS:
      return {
        ...state,
        listings: [...action.payload],
      };
    case GET_LISTING:
      return {
        ...state,
        listing: {
          data: { ...action.payload.listing },
          isFav: action.payload.isFavourite,
        },
      };
    case CLEAR_LISTING:
      return {
        ...state,
        listing: {
          data: {},
          isFav: false,
        },
      };
    case SWITCH_IS_FAVOURITE: {
      const { isFav } = state.listing;
      return {
        ...state,
        listing: {
          data: { ...state.listing.data },
          isFav: !isFav,
        },
      };
    }
    default: return state;
  }
};

export default listingsReducer;
