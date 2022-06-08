import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/store';
import Login from '../../../pages/Login/Login';
import userReducer, * as actions from '../../../redux/user/userActions'
import UserData from '../../../__mocks__/UserData';

const LoginProvider = () => (
  <Provider store={store}>
    <Router>
      <Login />
    </Router>
  </Provider>
);

afterEach(() => {
  cleanup();
});

describe('check login components', () => {
  it('matches actual design', () => {
    const component = renderer.create(<LoginProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('Test Login asynchronous actions', () => {
  // initial state
  const initialState = {
    signup: false,
    userDetails: {},
  };

  const dataPush = userReducer(
    initialState,
    actions.loginSuccess(UserData),
  );

  it('has user details', () => {
    expect(dataPush.userDetails).toEqual(UserData);
  });

  it('has the correct user', () => {
    const { name, email, role } = dataPush.userDetails;
    expect(name).toEqual('Test User');
    expect(email).toEqual('admin@microverse.com');
    expect(role).toEqual('admin');
  });
});
