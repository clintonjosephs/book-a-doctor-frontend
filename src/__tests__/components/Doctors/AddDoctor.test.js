import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/store';
import AddDoctor from '../../../components/Doctors/AddDoctor';

it('Signup renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <AddDoctor />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
