import * as actions from './reservationActions';
import { getAllReservation, deleteReservation } from '../../helpers/api/call';

const getReservations = () => async (dispatch) => {
  const response = await getAllReservation('appointments');
  if (response.error) {
    dispatch(actions.getReservationsFailure(response.error_message));
  } else {
    dispatch(actions.getReservationsSuccess(response.data));
  }
};

export const deleteReservations = (id) => async (dispatch) => {
  const response = await deleteReservation('appointments', id);
  if (response.error) {
    dispatch(actions.deleteReservationFailure(response.error_message));
  } else {
    dispatch(actions.deleteReservationSuccess(response.data));
  }
};

export default getReservations;
