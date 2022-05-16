import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../../redux/auth/authSelectors';

// export default function PublicRoute({
//   children,
//   restricted = false,
//   redirectTo = '/',
// }) {
//   const isLoggedIn = useSelector(getIsLoggedIn);
//   console.log('isLoggedIn', isLoggedIn);
//   const shouldRedirect = isLoggedIn && restricted;

//   return <>{!shouldRedirect ? <Navigate to={redirectTo} /> : children}</>;
// }

export default function PublicRoute({ children, restricted, redirectTo }) {
  console.log('__1__');
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  console.log('__isLoggedIn', isLoggedIn);
  console.log('__restricted', restricted);
  console.log('__shouldRedirect', shouldRedirect);

  console.log('__2__');

  return <>{!shouldRedirect ? children : <Navigate to="/home" />}</>;
}

PublicRoute.defaultProps = {
  restricted: false,
  redirectTo: '/home',
};

PublicRoute.propTypes = {
  children: PropTypes.node,
  restricted: PropTypes.bool,
  redirectTo: PropTypes.string,
};
