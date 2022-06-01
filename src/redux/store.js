import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import bookDoctorReducer from './bookDoctor/doctorActions';

const reducer = combineReducers({
  bookDoctorReducer,
});

// creating a store
const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
