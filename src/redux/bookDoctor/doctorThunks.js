import { getRequest, postRequest } from '../../helpers/api/call';
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
  dispatch(actions.loading());
  await postRequest('users/login', data).then((response) => response.json())
    .then((json) => {
      dispatch(actions.apiErrors(false));
      dispatch(actions.loading());
      console.log(json);
    });
};
