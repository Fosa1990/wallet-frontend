import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import authSelectors from '../../../redux/auth/authSelectors';
import { ROUTES } from '../../../utils/constants';

export default function PublicRoute({ children, restricted, redirectTo }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isInBase = useSelector(authSelectors.getIsInBase);
  const shouldRedirect = restricted && (isLoggedIn || isInBase);

  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : children}</>;
}

PublicRoute.defaultProps = {
  restricted: false,
  redirectTo: `/${ROUTES.HOME}`,
};

PublicRoute.propTypes = {
  children: PropTypes.node,
  restricted: PropTypes.bool,
  redirectTo: PropTypes.string,
};
