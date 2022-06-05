import { Provider } from 'react-redux';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Login from '../pages/Login/Login';

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

describe('Test login screen functionality', () => {
  test('response with invalid email', async () => {
    render(<LoginProvider />);
    fireEvent.change(screen.getByTestId('email-input'), {
      target: { value: 'johndoe@microverse.com' },
    });
    fireEvent.change(screen.getByTestId('password-input'), {
      target: { value: 'password' },
    });
    userEvent.click(screen.getByText('Log in'));
    const result = await screen.findByText('User does not exist');
    expect(result).toBeInTheDocument();
  });

  test('response with invalid password', async () => {
    render(<LoginProvider />);
    fireEvent.change(screen.getByTestId('email-input'), {
      target: { value: 'admin@microverse.com' },
    });
    fireEvent.change(screen.getByTestId('password-input'), {
      target: { value: 'wrongpassword' },
    });
    userEvent.click(screen.getByText('Log in'));
    const result = await screen.findByText('invalid password');
    expect(result).toBeInTheDocument();
  });
});
