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
import { ROUTES } from '../../helpers/constants';
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

export default function App() {
  const showModalLogout = useSelector(selectIsModalLogoutOpen);
  const token = useSelector(authSelectors.getToken);
  // eslint-disable-next-line no-unused-vars
  const { isFetching, data } = useFetchCurrentUserQuery(token, {
    skip: token === null,
  });
  // console.log('data', data);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //     // dispatch(fetchCurrentUser());
  //   };
  // }, []);

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
                    redirectTo={`/${ROUTES.DASHBOARD}/${ROUTES.HOME}`}
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
                    redirectTo={`/${ROUTES.DASHBOARD}/${ROUTES.HOME}`}
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
                  </PrivateRoute>
                }
              />

              <Route path={ROUTES.VERIFY} element={<VerifyPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>

          {showModalLogout && <ModalLogout />}
        </>
      )}
    </>
  );
}
