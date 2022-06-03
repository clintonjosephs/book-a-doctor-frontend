import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import StorageManager from '../../helpers/format/StorageManager';

const PrivateRoute = ({ children }) => {
  const accessToken = StorageManager.getToken().token;
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken === '' || !!accessToken) {
      navigate('/login');
    }
  }, []);

  if (accessToken !== '') {
    return children;
  }

  return (
    <p>Something went wrong</p>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
