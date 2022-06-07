export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

const initialState = {
  signup: false,
  userDetails: {},
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        signup: true,
        userDetails: payload.userDetails,
      };
    }
    case SIGNUP_FAILURE: {
      const errMessage = [];
      if (payload.email) {
        errMessage.push(`email ${payload.email[0]}`);
      }
      if (payload.name) {
        errMessage.push(`username ${payload.name[0]}`);
      }
      if (payload.password) {
        errMessage.push(`password ${payload.password[0]}`);
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

export default userReducer;

export const signupSuccess = (data) => ({
  type: SIGNUP_SUCCESS,
  payload: data,
});

export const signupFailure = (data) => ({
  type: SIGNUP_FAILURE,
  payload: data,
});
