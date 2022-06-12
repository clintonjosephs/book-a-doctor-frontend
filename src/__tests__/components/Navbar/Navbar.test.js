import {
  fireEvent,
  render, screen, within,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from '../../../components/Navigation/Navbar';
import store from '../../../redux/store';

const Wrapper = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  </Provider>
);

describe('Navbar Component', () => {
  it('should render link if user is  logged in', () => {
    render(<Wrapper />);

    const Doctors = screen.getByText('Doctors')
    const Reservations = screen.getByText('Reservations')
    const BookAppointments = screen.getByText('Book Appointments')
    const userImage = screen.getByAltText('user')
    expect(Doctors).toMatchSnapshot();
    expect(Reservations).toMatchSnapshot();
    expect(BookAppointments).toMatchSnapshot();
    expect(userImage).toBeInTheDocument();
  });

 it('it should render logout', ()=> {
  render(<Wrapper />);
  const Logout = screen.getByText('Logout')

  expect(Logout).toBeInTheDocument();
 })
});