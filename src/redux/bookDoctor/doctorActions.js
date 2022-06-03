// action addresses
const GET_ALL_DOCTORS = 'doctors/GET_ALL_DOCTORS';
const API_ERROR = 'doctors/API_ERROR';
const USER_DETAILS = 'doctors/USER_DETAILS';
const API_LOADING = 'doctors/API_LOADING';
const LOGIN_SUCCESS = 'doctors/LOGIN_SUCCESS';

// initial state
const bookDoctorState = {
  doctors: [],
  appointments: [],
  userDetails: {},
  error: false,
  loading: true,
  loginStatus: false,
};

// synchronous actions
export const loadAllDoctors = (payload) => ({
  type: GET_ALL_DOCTORS,
  payload,
});

export const apiErrors = (payload) => ({
  type: API_ERROR,
  payload,
});

export const loading = () => ({
  type: API_LOADING,
});

export const userDetails = (payload) => ({
  type: USER_DETAILS,
  payload,
});

export const loginStatus = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

// ... other synchronous actions goes here

// reducer
const bookDoctorReducer = (state = bookDoctorState, { type, payload }) => {
  switch (type) {
    case GET_ALL_DOCTORS:
      return { ...state, doctors: payload };
    case API_ERROR:
      return { ...state, error: payload };
    case API_LOADING:
      return { ...state, loading: !state.loading };
    case USER_DETAILS:
      return { ...state, userDetails: payload };
    case LOGIN_SUCCESS:
      return { ...state, loginStatus: payload };
    default:
      return state;
  }
};

export default bookDoctorReducer;
