import bookDoctorReducer, { GET_ALL_DOCTORS, CHUNKED_DOCTORS } 
    from '../../../redux/bookDoctor/doctorActions';
import { fetchAllDoctors } from '../../../redux/bookDoctor/doctorThunks';
import DoctorsData from '../../../__mocks__/DoctorsData';
    
jest.mock('../../../__mocks__/call');

describe('Welcome page actions', () => {
  it('GET_ALL_DOCTORS', () => {
    const state = {
        doctors: [],
        doctor: [],
        appointments: [],
        error: false,
        loading: false,
        doctorsChunked: [],
        currentCarouselState: [],
      };

    const newState = bookDoctorReducer(state, {
      type: GET_ALL_DOCTORS,
      payload: DoctorsData,
    });

    expect(newState).toEqual({
      ...state,
      doctors: DoctorsData,
    });
  });

  it('Doctors Data was received successfully from the api', () => {
    const dispatch = jest.fn();
    const payload = DoctorsData;
    fetchAllDoctors()(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: GET_ALL_DOCTORS,
        payload,
      });
      expect(dispatch).toHaveBeenCalledWith({
        type: CHUNKED_DOCTORS,
        payload,
      });
    });
  });

//   it('signup failure from the API', () => {
//     const dispatch = jest.fn();
//     const payload = {
//       email: ['has already been taken'],
//     };

//     signupDispatcher()(dispatch).then(() => {
//       expect(dispatch).toHaveBeenCalledWith({
//         type: SIGNUP_FAILURE,
//         payload,
//       });
//     });
//   });
});
