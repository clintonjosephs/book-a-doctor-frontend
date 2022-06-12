// action addresses
export const GET_ALL_DOCTORS = 'doctors/GET_ALL_DOCTORS';
const GET_DOCTOR = 'doctors/GET_DOCTOR';
const ADD_DOCTOR = 'doctors/ADD_DOCTOR';
const API_ERROR = 'doctors/API_ERROR';
const USER_DETAILS = 'doctors/USER_DETAILS';
const API_LOADING = 'doctors/API_LOADING';
export const CHUNKED_DOCTORS = 'doctors/CHUNKED_DOCTORS';
export const CAROUSEL_STATE = 'doctors/CAROUSEL_STATE';
const SET_CURRENT_DOCTOR = 'doctors/SET_CURRENT_DOCTOR';
export const ADD_APPOINTMENT = 'doctors/ADD_APPOINTMENT';
export const ADD_APPOINTMENT_FAILURE = 'doctors/ADD_APPOINTMENT_FAILURE';

// initial state
const bookDoctorState = {
  doctors: [],
  doctor: [],
  appointments: [],
  error: false,
  loading: false,
  doctorsChunked: [],
  currentCarouselState: [],
};

// synchronous actions
export const loadAllDoctors = (payload) => ({
  type: GET_ALL_DOCTORS,
  payload,
});

export const loadOneDoctor = (payload) => ({
  type: GET_DOCTOR,
  payload,
});

export const addOneDoctor = (payload) => ({
  type: ADD_DOCTOR,
  payload,
});

export const apiErrors = (payload) => ({
  type: API_ERROR,
  payload,
});

export const loading = (payload) => ({
  type: API_LOADING,
  payload,
});

export const loadChunkedDoctors = (payload) => ({
  type: CHUNKED_DOCTORS,
  payload,
});

export const updateCarouselState = (payload) => ({
  type: CAROUSEL_STATE,
  payload,
});

export const setCurrentDoctor = (data) => ({
  type: SET_CURRENT_DOCTOR,
  payload: data,
});

export const addAppointment = (data) => ({
  type: ADD_APPOINTMENT,
  payload: data,
});

export const addAppointmentFailure = (data) => ({
  type: ADD_APPOINTMENT,
  payload: data,
});

// ... other synchronous actions goes here

// reducer
const bookDoctorReducer = (state = bookDoctorState, { type, payload }) => {
  switch (type) {
    case GET_ALL_DOCTORS:
      return { ...state, doctors: payload };
    case GET_DOCTOR:
      return { ...state, doctor: payload };
    case ADD_DOCTOR: {
      const doctors = [...state.doctors, payload];
      return { ...state, doctors };
    }
    case API_ERROR:
      return { ...state, error: payload };
    case API_LOADING:
      return { ...state, loading: payload };
    case USER_DETAILS:
      return { ...state, userDetails: payload };
    case CHUNKED_DOCTORS:
      return { ...state, doctorsChunked: [...payload], currentCarouselState: [...payload[0]] };
    case CAROUSEL_STATE:
      return { ...state, currentCarouselState: [...state.doctorsChunked[payload]] };
    case SET_CURRENT_DOCTOR:
      return { ...state, doctor: [payload] };
    case ADD_APPOINTMENT:
      return { ...state, doctor: [], appointments: [...state.appointments, payload] };
    case ADD_APPOINTMENT_FAILURE:
      return { ...state, error: true, message: payload };
    default:
      return state;
  }
};

export default bookDoctorReducer;
