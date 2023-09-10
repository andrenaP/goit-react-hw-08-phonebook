import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { refreshUser } from 'redux/auth/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RestrictedRoute from 'components/Routes/RestrictedRoute';
import PrivateRoute from 'components/Routes/PrivateRoute';
import { useAuth } from 'hooks/useAuth';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/login" component={<Register />} />
          }
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
