import bookDoctorReducer, {
  ADD_APPOINTMENT,
  ADD_APPOINTMENT_FAILURE,
} from '../../../redux/bookDoctor/doctorActions';
import { addAppointmentDispatcher } from '../../../redux/bookDoctor/doctorThunks';

jest.mock('../../../__mocks__/call');

describe('addAppointment actions', () => {
  it('ADD_APPOINTMENT', () => {
    const state = { appointments: [] };
    const newState = bookDoctorReducer(state, {
      type: ADD_APPOINTMENT,
      payload: {
        doctor_id: 1,
        date_of_appointment: '2020/10/10',
      },
    });

    expect(newState).toEqual({
      ...state,
      doctor: [],
      appointments: [
        {
          doctor_id: 1,
          date_of_appointment: '2020/10/10',
        },
      ],
    });
  });

  it('addAppointment successfull from the API', () => {
    const dispatch = jest.fn();
    const payload = {
      doctor_id: 1,
      date_of_appointment: '2020/10/10',
    };
    addAppointmentDispatcher(1)(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: ADD_APPOINTMENT,
        payload,
      });
    });
  });

  it('addAppointment failure from the API', () => {
    const dispatch = jest.fn();
    const payload = {
      error: 'string',
      error_message: {},
    };

    addAppointmentDispatcher()(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: ADD_APPOINTMENT_FAILURE,
        payload,
      });
    });
  });
});
