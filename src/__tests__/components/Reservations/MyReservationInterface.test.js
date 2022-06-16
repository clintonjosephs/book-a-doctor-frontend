import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/store';
import MyReservations from '../../../components/Reservations/MyReservations';

const Wrapper = () => (
  <Provider store={store}>
    <Router>
      <MyReservations />
    </Router>
  </Provider>
);

describe('check login components', () => {
  it('matches actual design', () => {
    const component = renderer.create(<Wrapper />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
