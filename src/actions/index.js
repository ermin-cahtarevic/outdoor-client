const GET_LISTINGS = 'GET_LISTINGS';
const GET_FAVOURITES = 'GET_FAVOURITES';

const getListings = listings => ({
  type: GET_LISTINGS,
  payload: listings,
});

const getFavourites = favourites => ({
  type: GET_FAVOURITES,
  payload: favourites,
})

export { getListings, getFavourites };
