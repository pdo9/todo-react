import React from 'react';
import Sidebar from './SidebarContent';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from '../pages/home';
//import { LoginPage } from '../pages/login';
import { Logout } from '../pages/logout';
import AuthExample from '../pages/AuthExample';

//import authContext from '../auth/authContext';

import {
  BrowserRouter,
  Switch,
  Route,
  //Link,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';

const userNameLoggedIn = 'user1';

export default function BodyContent() {
  /*
export default function AuthExample() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <AuthButton />

          <ul>
            <li>
              <Link to='/public'>Public Page</Link>
            </li>
            <li>
              <Link to='/protected'>Protected Page</Link>
            </li>
          </ul>

          <Switch>
            <Route path='/public'>
              <PublicPage />
            </Route>
            <Route path='/login'>
              <LoginPage />
            </Route>
            <PrivateRoute path='/protected'>
              <ProtectedPage />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}
*/

  const fakeAuth = {
    isAuthenticated: false,
    signin(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    },
  };

  /** For more details on
   * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
   * refer to: https://usehooks.com/useAuth/
   */
  const authContext = React.createContext();

  function useAuth() {
    return React.useContext(authContext);
  }

  function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
  }

  function useProvideAuth() {
    let currentUserName = localStorage.getItem('userName');
    console.log('currentUser', currentUserName);

    const [user, setUser] = React.useState(currentUserName);

    const signin = (cb) => {
      return fakeAuth.signin(() => {
        setUser(userNameLoggedIn);
        cb();
        localStorage.setItem('userName', userNameLoggedIn);
        //console.log('user logged in:', user);
      });
    };

    const signout = (cb) => {
      return fakeAuth.signout(() => {
        setUser(null);
        cb();
        localStorage.removeItem('userName');
        //console.log('user logged out:', user);
      });
    };

    return {
      user,
      signin,
      signout,
    };
  }

  function AuthButton() {
    let history = useHistory();
    let auth = useAuth();
    console.log(history);
    console.log(auth);

    return auth.user ? (
      <p>
        Welcome!{' '}
        <button
          onClick={() => {
            auth.signout(() => history.push('/'));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    );
  }

  // A wrapper for <Route> that redirects to the login
  // screen if you're not yet authenticated.
  function PrivateRoute({ children, ...rest }) {
    let auth = useAuth();
    fakeAuth.isAuthenticated = localStorage.getItem('userName');

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

  /*
  function PublicPage() {
    return <h3>Public</h3>;
  }

  function ProtectedPage() {
    return <h3>Protected</h3>;
  }
  */

  function LoginPage() {
    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();

    let { from } = location.state || { from: { pathname: '/' } };
    let login = () => {
      auth.signin(() => {
        history.replace(from);
      });
    };

    return (
      <div>
        <p>Вам необходимо авторизоваться {/*{from.pathname}*/}</p>
        <button style={{ height: '40px', width: '100px' }} onClick={login}>
          Вход
        </button>
      </div>
    );
  }

  return (
    <main style={{ display: 'flex' }}>
      <div>
        <Sidebar />
      </div>

      <div>
        <ProvideAuth>
          <BrowserRouter>
            <AuthButton />
            <Switch>
              <PrivateRoute path='/' exact>
                <Home />
              </PrivateRoute>

              <Route path='/login2' exact>
                <LoginPage />
              </Route>

              <Route path='/logout' exact>
                <Logout />
              </Route>

              <Route path='/auth' exact>
                <AuthExample />
              </Route>
            </Switch>
          </BrowserRouter>
        </ProvideAuth>
      </div>
    </main>
  );
}
