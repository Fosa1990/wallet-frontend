import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import authSelectors from '../../../redux/auth/authSelectors';
import { ROUTES } from '../../../utils/constants';

export default function PrivateRoute({ children, restricted, redirectTo }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const hasToken = useSelector(authSelectors.getToken);
  const hasTokenAndLoggedIn = isLoggedIn && hasToken && children;

  return <>{isLoggedIn ? hasTokenAndLoggedIn : <Navigate to={redirectTo} />}</>;
}

PrivateRoute.defaultProps = {
  restricted: true,
  redirectTo: `/${ROUTES.LOGIN}`,
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
  redirectTo: PropTypes.string,
};
