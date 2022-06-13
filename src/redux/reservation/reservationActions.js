import { combineReducers } from 'redux';

const GET_ALL_REVERSATION = 'GET_ALL_REVERSATION';
const GET_ALL_REVERSATION_ERROR = 'GET_ALL_REVERSATION_ERROR';
const initialStateReservation = [];

export const getReservationsSuccess = (payload) => ({
  type: GET_ALL_REVERSATION,
  payload,
});

export const getReservationsFailure = (payload) => ({
  type: GET_ALL_REVERSATION_ERROR,
  payload,
});

const reservationReducer = (state = initialStateReservation, action) => {
  switch (action.type) {
    case GET_ALL_REVERSATION:
      return [...action.payload];
    case GET_ALL_REVERSATION_ERROR:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

const DELETE_RESERVATION = 'DELETE_RESERVATION';
const initialStateDeleteReservation = [];
export const deleteReservationFailure = (payload) => ({
  type: DELETE_RESERVATION,
  payload,
});

export const deleteReservationSuccess = (payload) => ({
  type: DELETE_RESERVATION,
  payload,
});

const deleteReservationReducer = (state = initialStateDeleteReservation, action) => {
  switch (action.type) {
    case DELETE_RESERVATION:
      return action.payload;
    default:
      return state;
  }
};
const reservationReducers = combineReducers({
  reservationReducer,
  deleteReservationReducer,
});
export default reservationReducers;
