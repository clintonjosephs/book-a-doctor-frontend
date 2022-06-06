import signupReducer, { SIGNUP_SUCCESS, SIGNUP_FAILURE, signupDispatcher } from '../../../redux/signup/signup';

jest.mock('../../../helpers/api/call');

describe('Signup actions', () => {
  it('SIGNUP_SUCCESS', () => {
    const state = {};
    const newState = signupReducer(state, {
      type: SIGNUP_SUCCESS,
      payload: {
        user_details: { name: 'test', email: 'test@test.fr', role: 'user' },
      },
    });

    expect(newState).toEqual({
      ...state,
      signup: true,
      payload: {
        user_details: { name: 'test', email: 'test@test.fr', role: 'user' },
      },
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
