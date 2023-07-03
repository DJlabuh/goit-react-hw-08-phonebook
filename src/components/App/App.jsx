import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import Layout from '../Layout/Layout';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';

import { useAuth } from 'components/hooks';
import { refreshUser } from 'redux/Auth/operationsAuth';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import RestrictedRoute from 'components/PrivateRoute/RestrictedRoute';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Register = lazy(() => import('pages/Register'));
const LogIn = lazy(() => import('pages/LogIn'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        {!isRefreshing && (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute component={Register}>
                    <Register />
                  </RestrictedRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute component={LogIn}>
                    <LogIn />
                  </RestrictedRoute>
                }
              />

              <Route
                path="/contacts"
                element={
                  <PrivateRoute component={Contacts} redirectTo="/login" />
                }
              />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        )}
      </Suspense>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
