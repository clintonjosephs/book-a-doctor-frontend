import { Routes, Route } from 'react-router-dom';
import AddDoctor from './components/Doctors/AddDoctor';
import BookAppointment from './components/Doctors/BookAppointment';
import Details from './components/Doctors/Details';
import ListDoctors from './components/Doctors/ListDoctors';
import Login from './components/Login/Login';
import MyReservations from './components/Reservations/MyReservations';
import Signup from './components/Signup/Signup';
import Welcome from './components/Welcome/Welcome';

const App = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="welcome" element={<Welcome />} />
    <Route path="myreservations" element={<MyReservations />} />
    <Route path="signup" element={<Signup />} />
    <Route path="add_doctor" element={<AddDoctor />} />
    <Route path="book_appointment" element={<BookAppointment />} />
    <Route path="doctors/:id" element={<Details />} />
    <Route path="all_doctors" element={<ListDoctors />} />
  </Routes>
);

export default App;
