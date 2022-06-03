import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../pages/Login/Login';

describe('check login components', () => {
    it('matches actual design', () => {
        const component = renderer.create(
            <Provider store={store}>
                <Router>
                    <Login />
                </Router>
            </Provider>
        ).toJSON();
        expect(component).toMatchSnapshot();
    });
});