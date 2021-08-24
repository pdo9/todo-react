import React from 'react';
// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   //Link,
//   Redirect,
//   useHistory,
//   useLocation,
// } from 'react-router-dom';

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */

import { authContext } from './authContext';

export default function useAuth() {
  return React.useContext(authContext);
}
