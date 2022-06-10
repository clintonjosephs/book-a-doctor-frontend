import * as actions from './reservationActions';
import { getAllReservation } from '../../helpers/api/call';

const getReservations = () => async (dispatch) => {
  const response = await getAllReservation('appointments');
  if (response.error) {
    dispatch(actions.getReservationsFailure(response.error_message));
  } else {
    dispatch(actions.getReservationsSuccess(response.data));
  }
};

export default getReservations;
