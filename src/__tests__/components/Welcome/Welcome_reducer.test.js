import { chunkArray } from '../../../helpers/format/format';
import bookDoctorReducer, {
  GET_ALL_DOCTORS,
  CHUNKED_DOCTORS,
} from '../../../redux/bookDoctor/doctorActions';
import { fetchAllDoctors } from '../../../redux/bookDoctor/doctorThunks';
import DoctorsData from '../../../__mocks__/DoctorsData';

jest.mock('../../../__mocks__/call');

describe('Welcome page actions', () => {
  const initalState = {
    doctors: [],
    doctor: [],
    appointments: [],
    error: false,
    loading: false,
    doctorsChunked: [],
    currentCarouselState: [],
  };

  it('GET_ALL_DOCTORS', () => {
    const newState = bookDoctorReducer(initalState, {
      type: GET_ALL_DOCTORS,
      payload: DoctorsData,
    });

    expect(newState).toEqual({
      ...initalState,
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

  it('Is able to chuck doctors data', () => {
    const chunked = chunkArray(DoctorsData);
    const state = bookDoctorReducer(initalState, {
      type: CHUNKED_DOCTORS,
      payload: chunked,
    });

    expect(state).toEqual({
      ...state,
      doctorsChunked: chunked,
    });
  });
});
