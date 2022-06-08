import { getRequest, postRequest, getOneDoctor, addDoctorApi } from '../../helpers/api/call';
import StorageManager from '../../helpers/format/StorageManager';
import * as actions from './doctorActions';

export const fetchAllDoctors = () => async (dispatch) => {
  try {
    dispatch(actions.loading());
    const response = await getRequest('doctors');
    const responsejson = await response.json();
    dispatch(actions.loadAllDoctors(responsejson));
    dispatch(actions.loading());
  } catch (err) {
    dispatch(actions.apiErrors(true));
    throw new Error(err);
  }
};

export const fetchOneDoctor = (id) => async (dispatch) => {
  try {
    dispatch(actions.loading());
    const response = await getOneDoctor(id);
    dispatch(actions.loadOneDoctor(response));
    dispatch(actions.loading());
  } catch (err) {
    dispatch(actions.apiErrors(true));
    throw new Error(err);
  }
};

export const accountLogin = (data) => async (dispatch) => {
  let message = '';
  dispatch(actions.loading());
  await postRequest('users/login', data)
    .then((response) => response.json())
    .then((json) => {
      dispatch(actions.apiErrors(false));
      dispatch(actions.loading());
      if (!json.error) {
        StorageManager.setToken(json.token, json.exp);
        dispatch(actions.userDetails(json.user_details));
        message = { message: 'Login successful, redirecting ...', status: true };
      } else {
        message = { message: json.error_message, status: false };
      }
    });
  return message;
};

export const setCurrentDoctorDispatcher = (id) => async (dispatch) => {
  const response = await getOneDoctor(id);
  if (!response.error) dispatch(actions.setCurrentDoctor(response));
};

export const addAppointmentDispatcher = (id, dateAppointment) => async (dispatch) => {
  const responseToJson = await (
    await postRequest('appointments', {
      doctor_id: id,
      date_of_appointment: dateAppointment,
    })
  ).json();

  if (responseToJson.error) {
    dispatch(actions.addAppointmentFailure(responseToJson.error_message));
  } else {
    dispatch(actions.addAppointment(responseToJson.data));
  }
};
export const addDoctorThunk = (data) => async (dispatch) => {
  let message = '';
  dispatch(actions.loading());
  await addDoctorApi('doctors', data)
    .then((response) => response.json())
    .then((json) => {
      dispatch(actions.apiErrors(false));
      dispatch(actions.loading());
      if (json.id) {
        dispatch(actions.addOneDoctor(json));
        message = { message: 'Doctor was created succesfully', status: true };
      } else {
        message = { message: 'Error in validations', status: false };
      }
    });
  return message;
};
