const GET_LISTINGS = 'GET_LISTINGS';

const getListings = listings => ({
  type: GET_LISTINGS,
  payload: listings,
});

export { getListings };
