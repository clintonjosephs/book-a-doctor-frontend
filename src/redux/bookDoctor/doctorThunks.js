import { getRequest } from '../../helpers/api/call';
import * as actions from './doctorActions';

const fetchAllDoctors = () => async (dispatch) => {
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

export default fetchAllDoctors;
