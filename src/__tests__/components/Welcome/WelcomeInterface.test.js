import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/store';
import Welcome from '../../../pages/Welcome/Welcome';

const WelcomeProvider = () => (
  <Provider store={store}>
    <Router>
      <Welcome />
    </Router>
  </Provider>
);

describe('check login components', () => {
  it('matches actual design', () => {
    const component = renderer.create(<WelcomeProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
