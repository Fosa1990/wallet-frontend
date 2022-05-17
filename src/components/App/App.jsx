import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import { selectIsModalLogoutOpen } from '../../redux/globalSelectors';
// import { useEffect } from 'react';
import './App.css';
import Loader from '../Loader';
import Header from '../Header';
import Navigation from '../Navigation/Navigation';
import authSelectors from '../../redux/auth';
import PublicRoute from '../Router/PublicRoute/PublicRoute';
import PrivateRoute from '../Router/PrivateRoute/PrivateRoute';
import { useFetchCurrentUserQuery } from '../../redux/auth/authReduce';

import HomeTab from '../HomeTab';

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

  /// компоненти  по  факту реалізації  потім розставимо  по місцям і  пропишем тут роути
  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="dashboard/*"
                element={
                  <PrivateRoute redirectTo="/">
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="registration"
                element={
                  <PublicRoute redirectTo="/" restricted>
                    <Registration />
                  </PublicRoute>
                }
              />
              <Route
                path="/"
                element={
                  <PublicRoute redirectTo="/" restricted>
                    <Login />
                  </PublicRoute>
                }
              />
              {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
            </Routes>
          </Suspense>
          {showModalLogout && <Modal />}
        </>
      )}
    </>
  );
}
