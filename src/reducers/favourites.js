const GET_FAVOURITES = 'GET_FAVOURITES';

const initialState = {
  favourites: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVOURITES:
      return {
        favourites: [...action.payload],
      };
    default: return state;
  }
};

export default favouritesReducer;
