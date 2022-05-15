import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
import './App.css';
import Loader from '../Loader';
import Header from '../Header';
import Navigation from '../Navigation/Navigation';
import authSelectors from '../../redux/auth';
import PublicRoute from '../Router/PublicRoute/PublicRoute';
import { useFetchCurrentUserQuery } from '../../redux/auth/authReduce';
//  must  be  lazy  loading

const Login = lazy(() =>
  import('../../pages/LoginPage' /* webpackChunkName: "Login" */),
);
const Dashboard = lazy(() =>
  import('../../pages/DashBoardPage' /* webpackChunkName: "DashBoard" */),
);
// const Registration = lazy(() =>
//   import('../../pages/RegistrationPage' /* webpackChunkName: "Registration" */),
// );
const Registration = lazy(() =>
  import('../RegistrationForm' /* webpackChunkName: "Registration" */),
);

/// TO  DO  public and protected  routes

export default function App() {
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
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="diagram/*" element={<Dashboard />} />
            <Route
              path="registration"
              element={
                <PublicRoute redirectTo="/" restricted>
                  <Registration />
                </PublicRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Loader />
          <Header />
          <Navigation />
        </Suspense>
      )}
    </>
  );
}
