import * as actions from './reservationActions';
import { getAllReservation, deleteReservation } from '../../helpers/api/call';
import { notification } from '../../helpers/format/format';

const getReservations = () => async (dispatch) => {
  const response = await getAllReservation('appointments');
  if (response.error) {
    dispatch(actions.getReservationsFailure(response.error_message));
    notification(response.error_message, false);
  } else {
    dispatch(actions.getReservationsSuccess(response.data));
    notification('All appointments fetched successfully', true);
  }
};

export const deleteReservations = (id) => async (dispatch) => {
  const response = await deleteReservation('appointments', id);
  if (response.error) {
    dispatch(actions.deleteReservationFailure(response.error_message));
    notification(response.error_message, false);
  } else {
    dispatch(actions.deleteReservationSuccess(response.data));
    notification('Your reservation has been removed', true);
  }
};

export default getReservations;
