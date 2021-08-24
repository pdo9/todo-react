import React from 'react';
import {
  // BrowserRouter,
  // Switch,
  Route,
  //Link,
  Redirect,
  // useHistory,
  // useLocation,
} from 'react-router-dom';

import useAuth from './useAuth';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login2',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
