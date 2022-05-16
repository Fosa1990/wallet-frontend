import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  getIsLoggedIn /*, getToken */,
} from '../../../redux/auth/authSelectors';

// export default function PrivateRoute({
//   children,
//   restricted = true,
//   redirectTo = '/',
// }) {
//   const isLoggedIn = useSelector(getIsLoggedIn);
//   const shouldRedirect = isLoggedIn && restricted;
//   return shouldRedirect ? <Navigate to={redirectTo} /> : children;
// }
export default function PrivateRoute({ children, restricted, redirectTo }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  // const hasToken = useSelector(getToken);
  // const hasTokenAndLoggedIn = isLoggedIn && hasToken && children;

  // return <>{hasToken ? hasTokenAndLoggedIn : <Navigate to={redirectTo} />}</>;
  return <>{isLoggedIn ? children : <Navigate to="/login" />}</>;
}

PrivateRoute.defaultProps = {
  redirectTo: '/login',
  restricted: true,
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
  redirectTo: PropTypes.string,
};
