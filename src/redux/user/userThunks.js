import { postRequestWithFormData } from '../../helpers/api/call';
import StorageManager from '../../helpers/format/StorageManager';
import * as actions from './userActions';

export const signupDispatcher = (data) => async (dispatch) => {
  const response = await postRequestWithFormData('users/signup', data);
  if (response.error) {
    dispatch(actions.signupFailure(response.error_message));
  } else {
    StorageManager.setToken(response.token, response.exp);
    dispatch(actions.signupSuccess(response.user_details));
  }
};

export default signupDispatcher;
