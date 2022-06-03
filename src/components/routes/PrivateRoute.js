import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import StorageManager from '../../helpers/format/StorageManager';
import { dateDiff } from '../../helpers/format/format';

const PrivateRoute = ({ children }) => {
  const auth = StorageManager.getToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.token === '' || !!auth || (auth.token !== '' && dateDiff(auth.exp) > 1)) {
      navigate('/login');
    }
  }, []);

  if (auth !== '') {
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
