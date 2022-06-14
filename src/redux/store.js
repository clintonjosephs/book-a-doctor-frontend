import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import bookDoctorReducer from './bookDoctor/doctorActions';
import userReducer from './user/userActions';
import reservationReducers from './reservation/reservationActions';

const reducer = combineReducers({
  bookDoctorReducer,
  userReducer,
  reservationReducers,
});

// creating a store
const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
