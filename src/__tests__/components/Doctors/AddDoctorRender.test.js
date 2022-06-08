import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
import store from '../../../redux/store';
import AddDoctor from '../../../components/Doctors/AddDoctor';

const AddDoctorProvider = () => (
  <Provider store={store}>
    <Router>
      <AddDoctor />
    </Router>
  </Provider>
);

describe('AddDoctor', () => {
  test('renders AddDoctor component', () => {
    render(<AddDoctorProvider />);

    screen.getByText('Add a doctor');
    expect(screen.getByText('Add a doctor')).toBeInTheDocument();
  });

  test('Fill the form', () => {
    render(<AddDoctorProvider />);

    userEvent.type(screen.getByPlaceholderText('Name'), 'My name');
    expect(screen.getByPlaceholderText('Name')).toHaveValue('My name');

    userEvent.type(screen.getByPlaceholderText('City'), 'My city');
    expect(screen.getByPlaceholderText('City')).toHaveValue('My city');

    userEvent.type(screen.getByPlaceholderText('Specialization'), 'My name');
    expect(screen.getByPlaceholderText('Specialization')).toHaveValue('My name');

    userEvent.type(screen.getByPlaceholderText('Description'), 'My descrition');
    expect(screen.getByPlaceholderText('Description')).toHaveValue('My descrition');
  });
});
