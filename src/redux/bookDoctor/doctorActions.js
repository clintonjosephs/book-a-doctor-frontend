// action addresses
const GET_ALL_DOCTORS = 'doctors/GET_ALL_DOCTORS';
const GET_DOCTOR = 'doctors/GET_DOCTOR';
const API_ERROR = 'doctors/API_ERROR';
const API_LOADING = 'doctors/API_LOADING';

// initial state
const bookDoctorState = {
  doctors: [
    { name: 'Mithi Lacka', country: 'France', brother: 'atilla' },
  ],
  doctor: [],
  appointments: [],
  error: false,
  loading: true,
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

export const apiErrors = (payload) => ({
  type: API_ERROR,
  payload,
});

export const loading = () => ({
  type: API_LOADING,
});

// ... other synchronous actions goes here

// reducer
const bookDoctorReducer = (state = bookDoctorState, { type, payload }) => {
  switch (type) {
    case GET_ALL_DOCTORS:
      return { ...state, doctors: payload };
    case GET_DOCTOR:
      return { ...state, doctor: payload };
    case API_ERROR:
      return { ...state, error: payload };
    case API_LOADING:
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
};

export default bookDoctorReducer;
