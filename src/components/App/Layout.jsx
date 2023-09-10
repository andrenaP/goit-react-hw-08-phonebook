import { Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { HStack, StackDivider } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import UserMenu from 'components/UserMenu';

export const Layout = () => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <header>
        {IsLoggedIn ? (
          <HStack spacing={10} divider={<StackDivider />}>
            <RouteLink as="li" to="/">
              Home
            </RouteLink>

            <RouteLink as="li" to="/contacts">
              Contacts
            </RouteLink>
          </HStack>
        ) : (
          <HStack spacing={10} divider={<StackDivider />}>
            <RouteLink as="li" to="/">
              Home
            </RouteLink>
            <RouteLink as="li" to="/login">
              Login
            </RouteLink>

            <RouteLink as="li" to="/register">
              Register
            </RouteLink>
          </HStack>
        )}

        <UserMenu />
      </header>
      <main>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};
