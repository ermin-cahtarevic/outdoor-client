import { combineReducers } from 'redux';
import authReducer from './auth';
import listingsReducer from './listings';
import favouritesReducer from './favourites';

const reducer = () => combineReducers({
  auth: authReducer,
  listings: listingsReducer,
  favourites: favouritesReducer,
});

export default reducer;
