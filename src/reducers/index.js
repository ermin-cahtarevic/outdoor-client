import { combineReducers } from 'redux';
import authReducer from './auth';
import listingsReducer from './listings';
import favouritesReducer from './favourites';
import errorReducer from './error';

const reducer = () => combineReducers({
  auth: authReducer,
  listings: listingsReducer,
  favourites: favouritesReducer,
  error: errorReducer,
});

export default reducer;
