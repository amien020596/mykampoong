import { authReducer } from './authReducer';
import { combineReducers } from 'redux';

// import { checkoutReducer } from './checkoutReducer';


export default combineReducers({
  authentication: authReducer,
  // checkout: checkoutReducer
})