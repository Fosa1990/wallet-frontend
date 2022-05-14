// export default function PublicRoute() {
//   return <div>Component: PublicRoute</div>;
// }

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../../redux/auth/authSelectors';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log('isLoggedIn', isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  if (!shouldRedirect) {
    return children;
  }
  return <Navigate to={redirectTo} />;
}
