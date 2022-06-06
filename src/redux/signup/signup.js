import { postRequestWithFormData } from '../../helpers/api/call';

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

const signupReducer = (state = { signup: false }, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        signup: true,
        value: action.payload,
      };
    }
    case SIGNUP_FAILURE: {
      const errMessage = [];
      if (action.payload.email) {
        errMessage.push(`email ${action.payload.email[0]}`);
      }
      if (action.payload.name) {
        errMessage.push(`username ${action.payload.name[0]}`);
      }
      if (action.payload.password) {
        errMessage.push(`password ${action.payload.password[0]}`);
      }
      return {
        ...state,
        signup: false,
        errorMessages: errMessage,
      };
    }
    default: {
      return state;
    }
  }
};

export default signupReducer;

export const signupSuccess = (data) => ({
  type: SIGNUP_SUCCESS,
  payload: data,
});

export const signupFailure = (data) => ({
  type: SIGNUP_FAILURE,
  payload: data,
});

export const signupDispatcher = (data) => async (dispatch) => {
  const response = await postRequestWithFormData('users/signup', data);
  if (response.error) {
    dispatch(signupFailure(response.error_message));
  } else {
    dispatch(signupSuccess(response));
  }
};
