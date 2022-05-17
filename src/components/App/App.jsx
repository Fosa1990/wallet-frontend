import React, { Suspense, lazy } from 'react';
import { Routes, Route /* , Navigate */ } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import { selectIsModalLogoutOpen } from '../../redux/globalSelectors';
// import { useEffect } from 'react';
import './App.css';
import Loader from '../Loader';
// import Header from '../Header';
// import Navigation from '../Navigation';
import authSelectors from '../../redux/auth';
import { PublicRoute, PrivateRoute } from '../Router';
import { useFetchCurrentUserQuery } from '../../redux/auth/authReduce';

//  must  be  lazy  loading

// import HomeTab from '../HomeTab';

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
                  <PublicRoute redirectTo="/login" restricted>
                    {/* <PublicRoute redirectTo="/login" restricted> */}
                    <Registration />
                  </PublicRoute>
                }
              />

              <Route
                path="login"
                element={
                  <PublicRoute redirectTo="/dashboard" restricted>
                    <Login />
                  </PublicRoute>
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

              {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
            </Routes>

            {/* <Loader /> */}
            {/* <Header /> */}
            {/* <Navigation /> */}
          </Suspense>
          {showModalLogout && <Modal />}
        </>
      )}
    </>
  );
}
