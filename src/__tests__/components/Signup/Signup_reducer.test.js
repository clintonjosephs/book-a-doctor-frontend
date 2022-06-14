import userReducer, { SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../../../redux/user/userActions';
import { signupDispatcher } from '../../../redux/user/userThunks';

jest.mock('../../../__mocks__/call');

describe('Signup actions', () => {
  it('SIGNUP_SUCCESS', () => {
    const state = {};
    const newState = userReducer(state, {
      type: SIGNUP_SUCCESS,
      payload: { userDetails: { name: 'test', email: 'test@test.fr', role: 'user' } },
    });

    expect(newState).toEqual({
      ...state,
      signup: true,
      userDetails: { name: 'test', email: 'test@test.fr', role: 'user' },
    });
  });

  it('signup successfull from the API', () => {
    const dispatch = jest.fn();
    const payload = { name: 'test', email: 'test@test.fr', role: 'user' };
    signupDispatcher(1)(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: SIGNUP_SUCCESS,
        payload,
      });
    });
  });

  it('signup failure from the API', () => {
    const dispatch = jest.fn();
    const payload = {
      email: ['has already been taken'],
    };

    signupDispatcher()(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: SIGNUP_FAILURE,
        payload,
      });
    });
  });
});
