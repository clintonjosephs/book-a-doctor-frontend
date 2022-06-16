import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AddDoctor from './components/Doctors/AddDoctor';
import BookAppointment from './components/Doctors/BookAppointment';
import Details from './components/Doctors/Details';
import ListDoctors from './components/Doctors/ListDoctors';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import MyReservations from './components/Reservations/MyReservations';
import PrivateRoute from './components/routes/PrivateRoute';
import Welcome from './pages/Welcome/Welcome';
import NotFound from './pages/NotFound/NotFound';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <>
    <ToastContainer />
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route
        path="/"
        element={(
          <PrivateRoute>
            <Welcome />
          </PrivateRoute>
      )}
      />
      <Route path="login" element={<Login />} />
      <Route
        path="myreservations"
        element={(
          <PrivateRoute>
            <MyReservations />
          </PrivateRoute>
      )}
      />
      <Route path="signup" element={<Signup />} />
      <Route
        path="add_doctor"
        element={(
          <PrivateRoute>
            <AddDoctor />
          </PrivateRoute>
      )}
      />
      <Route
        path="book_appointment"
        element={(
          <PrivateRoute>
            <BookAppointment />
          </PrivateRoute>
      )}
      />
      <Route
        path="doctor_details/:id"
        element={(
          <PrivateRoute>
            <Details />
          </PrivateRoute>
      )}
      />
      <Route
        path="all_doctors"
        element={(
          <PrivateRoute>
            <ListDoctors />
          </PrivateRoute>
      )}
      />
    </Routes>
  </>
);

export default App;
