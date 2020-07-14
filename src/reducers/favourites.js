const GET_FAVOURITES = 'GET_FAVOURITES';
const DELETE_FAVOURITE = 'DELETE_FAVOURITE';

const initialState = {
  favourites: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVOURITES:
      return {
        favourites: [...action.payload],
      };
    case DELETE_FAVOURITE: {
      const filtered = state.favourites.filter(fav => fav.id !== action.payload);
      return {
        favourites: [...filtered],
      };
    }
    default: return state;
  }
};

export default favouritesReducer;
