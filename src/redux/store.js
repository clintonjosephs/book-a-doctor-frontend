import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import bookDoctorReducer from './bookDoctor/doctorActions';
import userReducer from './user/userActions';

const reducer = combineReducers({
  bookDoctorReducer,
  userReducer,
});

// creating a store
const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
