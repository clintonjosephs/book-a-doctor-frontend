import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Signup from '../../../pages/Signup/Signup';
import FormInput from '../../../pages/Signup/FormInput';
import store from '../../../redux/store';

it('Signup renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Signup />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

it('FormInput renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <FormInput />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
