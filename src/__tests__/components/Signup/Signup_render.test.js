import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import store from '../../../redux/store';

import Signup from '../../../pages/Signup/Signup';

const SignupProvider = () => (
  <Provider store={store}>
    <Router>
      <Signup />
    </Router>
  </Provider>
);

describe('Signup', () => {
  test('renders Signup component', () => {
    render(<SignupProvider />);

    screen.getByText('Sign Up');
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

  test('Fill the form', () => {
    render(<SignupProvider />);

    userEvent.type(screen.getByPlaceholderText('Name*'), 'My name');
    expect(screen.getByPlaceholderText('Name*')).toHaveValue('My name');

    userEvent.type(screen.getByPlaceholderText('Email*'), 'Myemail');
    expect(screen.getByPlaceholderText('Email*')).toHaveValue('Myemail');

    userEvent.type(screen.getByPlaceholderText('Password*'), 'password');
    expect(screen.getByPlaceholderText('Password*')).toHaveValue('password');

    userEvent.type(screen.getByPlaceholderText('Confirm Password*'), 'password');
    expect(screen.getByPlaceholderText('Confirm Password*')).toHaveValue('password');
  });

  test('Email has already been taken', async () => {
    render(<SignupProvider />);

    userEvent.type(screen.getByPlaceholderText('Name*'), 'My name');
    userEvent.type(screen.getByPlaceholderText('Email*'), 'admin@microverse.com');
    userEvent.type(screen.getByPlaceholderText('Password*'), 'password');
    userEvent.type(screen.getByPlaceholderText('Confirm Password*'), 'password');
    userEvent.click(screen.getByText('Signup'));
    const result = await screen.findByText('email has already been taken');
    expect(result).toBeInTheDocument();
  });

  test('Username is too short (minimum is 3 characters)', async () => {
    render(<SignupProvider />);

    userEvent.type(screen.getByPlaceholderText('Name*'), 'My');
    userEvent.type(screen.getByPlaceholderText('Email*'), 'testxx@test.fr');
    userEvent.type(screen.getByPlaceholderText('Password*'), 'password');
    userEvent.type(screen.getByPlaceholderText('Confirm Password*'), 'password');
    userEvent.click(screen.getByText('Signup'));
    const result = await screen.findByText('username is too short (minimum is 3 characters)');
    expect(result).toBeInTheDocument();
  });

  test('Password is too short (minimum is 6 characters)', async () => {
    render(<SignupProvider />);

    userEvent.type(screen.getByPlaceholderText('Name*'), 'My name');
    userEvent.type(screen.getByPlaceholderText('Email*'), 'test@test.fr');
    userEvent.type(screen.getByPlaceholderText('Password*'), 'pass');
    userEvent.type(screen.getByPlaceholderText('Confirm Password*'), 'pass');
    userEvent.click(screen.getByText('Signup'));
    const result = await screen.findByText('password is too short (minimum is 6 characters)');
    expect(result).toBeInTheDocument();
  });

  test('Create new user', async () => {
    render(<SignupProvider />);

    userEvent.type(screen.getByPlaceholderText('Name*'), 'My name');
    userEvent.type(screen.getByPlaceholderText('Email*'), `${uuidv4()}@test.fr`);
    userEvent.type(screen.getByPlaceholderText('Password*'), 'password');
    userEvent.type(screen.getByPlaceholderText('Confirm Password*'), 'password');
    userEvent.click(screen.getByText('Signup'));
    const result = await screen.queryByText('Sign up');
    expect(result).toBeNull();
  });
});
