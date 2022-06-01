import { getRequest, postRequest } from '../../helpers/api/call';
import StorageManager from '../../helpers/format/StorageManager';
import * as actions from './doctorActions';

export const fetchAllDoctors = () => async (dispatch) => {
  try {
    dispatch(actions.loading());
    const response = await getRequest('doctors/index');
    dispatch(actions.loadAllDoctors(response.json()));
    dispatch(actions.loading());
  } catch (err) {
    dispatch(actions.apiErrors(true));
    throw new Error(err);
  }
};

export const accountLogin = (data) => async (dispatch) => {
  let message = '';
  dispatch(actions.loading());
  await postRequest('users/login', data).then((response) => response.json())
    .then((json) => {
      dispatch(actions.apiErrors(false));
      dispatch(actions.loading());
      if (!json.error) {
        StorageManager.setToken(json.token, json.exp);
        StorageManager.setUserDetails(json.user_details);
        message = { message: 'Login successful, redirecting ... ', status: true };
      } else {
        message = { message: json.error_message, status: false };
      }
    });
  return message;
};
