import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import BookAppointment from '../../../components/Doctors/BookAppointment';
import store from '../../../redux/store';

it('BookAppointment renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <BookAppointment />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
