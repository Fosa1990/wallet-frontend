import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn, getIsInBase } from '../../../redux/auth/authSelectors';

export default function PublicRoute({ children, restricted, redirectTo }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isInBase = useSelector(getIsInBase);
  const shouldRedirect = restricted && (isLoggedIn || isInBase);

  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : children}</>;
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
