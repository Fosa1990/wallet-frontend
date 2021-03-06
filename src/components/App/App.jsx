import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsModalLogoutOpen,
  selectIsModalAddTransactionOpen,
} from '../../redux/globalSelectors';
import authSelectors from '../../redux/auth';
import { useFetchCurrentUserQuery } from '../../redux/auth/authReduce';
import ModalLogout from '../ModalLogout';
import Loader from '../Loader';
import { VerifyPage, ErrorPage } from '../Pages';
import { PrivateRoute, PublicRouteLogin, PublicRouteRegin } from '../Router';
import NotifyContainer from '../NotifyContainer';
import { ROUTES } from '../../utils/constants';
import '../../../node_modules/modern-normalize/modern-normalize.css';
import 'react-toastify/dist/ReactToastify.css';

const Login = lazy(() =>
  import('../../pages/LoginPage' /* webpackChunkName: "Login" */),
);
const Statistics = lazy(() =>
  import('../../pages/StatisticsPage' /* webpackChunkName: "Statistics" */),
);
const Registration = lazy(() =>
  import('../../pages/RegistrationPage' /* webpackChunkName: "Registration" */),
);

const { REGISTRATION, LOGIN, HOME, STATISTICS, VERIFY } = ROUTES;

export default function App() {
  const showModalLogout = useSelector(selectIsModalLogoutOpen);
  const showTransactionModalOpen = useSelector(selectIsModalAddTransactionOpen);
  showTransactionModalOpen || showModalLogout
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto');
  const token = useSelector(authSelectors.getToken);
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
                    redirectTo={`/${STATISTICS}/${HOME}`}
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
                    redirectTo={`/${STATISTICS}/${HOME}`}
                    restricted
                  >
                    <Login />
                  </PublicRouteLogin>
                }
              />
              <Route
                path={`/${STATISTICS}/*`}
                element={
                  <PrivateRoute redirectTo={LOGIN}>
                    <Statistics />
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
