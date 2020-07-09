import { combineReducers } from 'redux';
import authReducer from './auth';
import listingsReducer from './listings';

const reducer = () => {
  return combineReducers({
    auth: authReducer,
    listings: listingsReducer,
  });
}

export default reducer;
