import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn, getToken } from '../../../redux/auth/authSelectors';

export default function PrivateRoute({ children, restricted, redirectTo }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const hasToken = useSelector(getToken);
  const hasTokenAndLoggedIn = isLoggedIn && hasToken && children;

  return <>{isLoggedIn ? hasTokenAndLoggedIn : <Navigate to={redirectTo} />}</>;
}

PrivateRoute.defaultProps = {
  redirectTo: '/login',
  restricted: true,
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
  redirectTo: PropTypes.string,
};
