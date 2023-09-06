import { Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';
// import css from '../css/Layout.module.css';
import { NavLink } from 'react-router-dom';
export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};
