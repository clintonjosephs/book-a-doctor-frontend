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
      return [...state, ...action.payload];
    case GET_ALL_REVERSATION_ERROR:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reservationReducer;
