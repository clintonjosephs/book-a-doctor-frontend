import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navigation/Navbar';
import { userStatus } from '../../helpers/format/format';
import LoadingInfo from '../Spinner';
import { fetchUserDetails } from '../../redux/user/userThunks';

let loadData = false;

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userStatus()) {
      navigate('/login');
    } else if (!loadData) {
      dispatch(fetchUserDetails());
      loadData = true;
    }
  }, []);

  const user = useSelector((state) => state.userReducer.userDetails);
  if (Object.keys(user).length === 0) {
    return <LoadingInfo />;
  }

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
