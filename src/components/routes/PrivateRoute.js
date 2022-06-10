import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../Navigation/Navbar';
import { userStatus } from '../../helpers/format/format';

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!userStatus()) {
      navigate('/login');
    }
  }, []);

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
