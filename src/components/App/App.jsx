import React, { Suspense, lazy } from 'react';
import { Routes, Route /* , Navigate */ } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
// import { useEffect } from 'react';
import '../../../node_modules/modern-normalize/modern-normalize.css';
import ModalLogout from '../ModalLogout';
import {
  selectIsModalLogoutOpen,
  selectIsModalAddTransactionOpen,
} from '../../redux/globalSelectors';
import './App.css';
import Loader from '../Loader';
import authSelectors from '../../redux/auth';
import { PrivateRoute, PublicRouteLogin, PublicRouteRegin } from '../Router';
import { useFetchCurrentUserQuery } from '../../redux/auth/authReduce';
import ModalAddTransactions from '../ModalAddTransactions/';
import NotifyContainer from '../NotifyContainer';
import ButtonAddTransactions from '../ButtonAddTransactions';
import { ROUTES } from '../../helpers/constants';
import { VerifyPage } from '../Pages/';
import { ErrorPage } from '../Pages/';

const Login = lazy(() =>
  import('../../pages/LoginPage' /* webpackChunkName: "Login" */),
);
const Dashboard = lazy(() =>
  import('../../pages/DashBoardPage' /* webpackChunkName: "DashBoard" */),
);
const Registration = lazy(() =>
  import('../../pages/RegistrationPage' /* webpackChunkName: "Registration" */),
);

/// TO  DO  public and protected  routes

export default function App() {
  const showModalLogout = useSelector(selectIsModalLogoutOpen);
  const token = useSelector(authSelectors.getToken);
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const { isFetching } = useFetchCurrentUserQuery(token, {
    skip: token === null,
  });
  // console.log('__isFetching__: ', isFetching);
  //--------------
  const showModalAddTransactions = useSelector(selectIsModalAddTransactionOpen);
  //-------------
  /// компоненти  по  факту реалізації  потім розставимо  по місцям і  пропишем тут роути
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
                path={ROUTES.REGISTRATION}
                element={
                  <PublicRouteRegin
                    redirectTo={`/${ROUTES.DASHBOARD}`}
                    restricted
                  >
                    <Registration />
                  </PublicRouteRegin>
                }
              />

              <Route
                path={ROUTES.LOGIN}
                element={
                  <PublicRouteLogin
                    redirectTo={`/${ROUTES.DASHBOARD}`}
                    restricted
                  >
                    <Login />
                  </PublicRouteLogin>
                }
              />

              <Route
                path={`/${ROUTES.DASHBOARD}/*`}
                element={
                  <PrivateRoute redirectTo={ROUTES.LOGIN}>
                    <Dashboard />
                    <ButtonAddTransactions />
                  </PrivateRoute>
                }
              />

              <Route path={ROUTES.VERIFY} element={<VerifyPage />} />
              <Route path="*" element={<ErrorPage />} />
              {/* <Route path="*" element={<Navigate to={`/${ROUTES.NOT_FOUND}`} />} /> */}
            </Routes>
            {showModalAddTransactions && <ModalAddTransactions />}
            {/* <ButtonAddTransactions /> */}
            {/* <Loader /> */}
            {/* <Header /> */}
            {/* <Navigation /> */}
            {/* <HomeTab/> */}
          </Suspense>

          {showModalLogout && <ModalLogout />}
        </>
      )}
    </>
  );
}
