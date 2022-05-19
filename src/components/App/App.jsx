import React, { Suspense, lazy } from 'react';
import { Routes, Route /* , Navigate */ } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
import ButtonAddTransactions from '../ButtonAddTransactions';
import ModalAddTransactions from '../ModalAddTransactions/ModalAddTransactions';

const Login = lazy(() =>
  import('../../pages/LoginPage' /* webpackChunkName: "Login" */),
);
const Dashboard = lazy(() =>
  import('../../pages/DashBoardPage' /* webpackChunkName: "DashBoard" */),
);
const Registration = lazy(() =>
  import('../../pages/RegistrationPage' /* webpackChunkName: "Registration" */),
);
const HomePage = lazy(() =>
  import('../../pages/HomePage' /* webpackChunkName: "Registration" */),
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
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />

              <Route
                path="registration"
                element={
                  <PublicRouteRegin redirectTo="/dashboard" restricted>
                    <Registration />
                  </PublicRouteRegin>
                }
              />

              <Route
                path="login"
                element={
                  <PublicRouteLogin redirectTo="/dashboard" restricted>
                    <Login />
                  </PublicRouteLogin>
                }
              />

              <Route
                path="dashboard/*"
                element={
                  <PrivateRoute redirectTo="/login">
                    <Dashboard />
                  </PrivateRoute>
                }
              />

              {/* <Route path="*" element={<Navigate to="/" />} /> */}
            </Routes>
            <ButtonAddTransactions />
            {showModalAddTransactions && <ModalAddTransactions />}
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
