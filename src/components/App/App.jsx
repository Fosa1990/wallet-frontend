import React, { Suspense, lazy /* , useEffect, useDispatch */ } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsModalLogoutOpen } from '../../redux/globalSelectors';
import authSelectors from '../../redux/auth';
import { useFetchCurrentUserQuery } from '../../redux/auth/authReduce';
import ModalLogout from '../ModalLogout';
import Loader from '../Loader';
import { VerifyPage, ErrorPage } from '../Pages';
import { PrivateRoute, PublicRouteLogin, PublicRouteRegin } from '../Router';
import NotifyContainer from '../NotifyContainer';
import { ROUTES } from '../../utils/constants';
// import { tokenService } from '../../services/tokenService';
import '../../../node_modules/modern-normalize/modern-normalize.css';
import 'react-toastify/dist/ReactToastify.css';

const Login = lazy(() =>
  import('../../pages/LoginPage' /* webpackChunkName: "Login" */),
);
const Dashboard = lazy(() =>
  import('../../pages/DashBoardPage' /* webpackChunkName: "DashBoard" */),
);
const Registration = lazy(() =>
  import('../../pages/RegistrationPage' /* webpackChunkName: "Registration" */),
);

const { REGISTRATION, LOGIN, HOME, DASHBOARD, VERIFY } = ROUTES;

export default function App() {
  const showModalLogout = useSelector(selectIsModalLogoutOpen);
  const token = useSelector(authSelectors.getToken);
  // eslint-disable-next-line no-unused-vars
  const { isFetching } = useFetchCurrentUserQuery(token, {
    skip: token === null,
  });

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <NotifyContainer />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path={REGISTRATION}
                element={
                  <PublicRouteRegin
                    redirectTo={`/${DASHBOARD}/${HOME}`}
                    restricted
                  >
                    <Registration />
                  </PublicRouteRegin>
                }
              />

              <Route
                path={LOGIN}
                element={
                  <PublicRouteLogin
                    redirectTo={`/${DASHBOARD}/${HOME}`}
                    restricted
                  >
                    <Login />
                  </PublicRouteLogin>
                }
              />

              <Route
                path={`/${DASHBOARD}/*`}
                element={
                  <PrivateRoute redirectTo={LOGIN}>
                    <Dashboard />
                  </PrivateRoute>
                }
              />

              <Route path={VERIFY} element={<VerifyPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>

          {showModalLogout && <ModalLogout />}
        </>
      )}
    </>
  );
}
