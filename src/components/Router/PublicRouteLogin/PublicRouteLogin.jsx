import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import authSelectors from '../../../redux/auth/authSelectors';
import { ROUTES } from '../../../utils/constants';

export default function PublicRouteLogin({ children, restricted, redirectTo }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = restricted && isLoggedIn;

  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : children}</>;
}

PublicRouteLogin.defaultProps = {
  restricted: false,
  redirectTo: `/${ROUTES.HOME}`,
};

PublicRouteLogin.propTypes = {
  children: PropTypes.node,
  restricted: PropTypes.bool,
  redirectTo: PropTypes.string,
};
