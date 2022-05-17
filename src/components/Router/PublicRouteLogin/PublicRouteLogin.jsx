import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../../redux/auth/authSelectors';

export default function PublicRouteLogin({ children, restricted, redirectTo }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = restricted && isLoggedIn;

  console.log('==PublicRouteLogin==');
  console.log('====shouldRedirect==', shouldRedirect);
  console.log('=restricted==', restricted);
  console.log('==isLoggedIn==', isLoggedIn);

  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : children}</>;
}

PublicRouteLogin.defaultProps = {
  restricted: false,
  redirectTo: '/home',
};

PublicRouteLogin.propTypes = {
  children: PropTypes.node,
  restricted: PropTypes.bool,
  redirectTo: PropTypes.string,
};
