import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import Loader from '../Loader';
import Header from '../Header';
import Navigation from '../Navigation/Navigation';
import authSelectors from '../../redux/auth';
import PublicRoute from '../Router/PublicRoute/PublicRoute';
//import  useFetchCurrentUserQuery  from ///
//  must  be  lazy  loading

// const Login = lazy(() =>
//   import('../../pages/LoginPage' /* webpackChunkName: "Login" */),
// );

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
  const dispatch = useDispatch();
  const isToken = useSelector(authSelectors.getToken);

  /// компоненти  по  факту реалізації  потім розставимо  по місцям і  пропишем тут роути
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/" element={<Registration />} /> */}
          <Route path="diagram/*" element={<Dashboard />} />
          <Route
            path="registration"
            element={
              <PublicRoute redirectTo="/" restricted>
                <Registration />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/" restricted>
                <Login />
              </PublicRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Loader />
        <Header />
        <Navigation />
      </Suspense>
    </>
  );
}
