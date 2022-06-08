import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup } from '@testing-library/react';
import store from '../../../redux/store';
import Welcome from '../../../pages/Welcome/Welcome';
import bookDoctorReducer, * as actions from '../../../redux/bookDoctor/doctorActions';


const WelcomeProvider = () => (
  <Provider store={store}>
    <Router>
      <Welcome />
    </Router>
  </Provider>
);

afterEach(() => {
  cleanup();
});

describe('check login components', () => {
  it('matches actual design', () => {
    const component = renderer.create(<WelcomeProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

// describe('Test Login asynchronous actions', () => {
//   // initial state
//   const initalState = {
//     doctors: [],
//     appointments: [],
//     userDetails: {},
//     error: false,
//     loading: true,
//   };

//   const dataPush = bookDoctorReducer(
//     initalState,
//     actions.userDetails(UserData),
//   );

//   it('has user details', () => {
//     expect(dataPush.userDetails).toEqual(UserData);
//   });

//   it('has the correct user', () => {
//     const { name, email, role } = dataPush.userDetails;
//     expect(name).toEqual('Test User');
//     expect(email).toEqual('admin@microverse.com');
//     expect(role).toEqual('admin');
//   });
// });
