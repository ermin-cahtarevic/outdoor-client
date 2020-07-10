const GET_LISTINGS = 'GET_LISTINGS';

const initialState = {
  listings: [],
};

const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LISTINGS:
      return {
        listings: [...action.payload],
      };
    default: return state;
  }
};

export default listingsReducer;
