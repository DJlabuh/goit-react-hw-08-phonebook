import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '../Layout/Layout';
import { Loader } from 'components/Loader';

// import { PrivateRoute } from 'components/PrivateRoute';
// import { RestrictedRoute } from 'components/RestrictedRoute';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Register = lazy(() => import('pages/Register'));
const LogIn = lazy(() => import('pages/LogIn'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
};
