import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
// import { TAuthContext, AuthContext } from '../context/authContext';
import AuthStore, { IAuth } from '../stores/AuthStore';
import { observer } from 'mobx-react-lite';

const AppRouter: React.FC = () => {
  // const { isAuth }: TAuthContext = React.useContext<TAuthContext>(AuthContext);
  const auth: IAuth = AuthStore.auth;
  console.log('approuter isAuth:', auth.isAuth);

  // return isAuth ? (
  return auth.isAuth ? (
    <div>
      <Switch>
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            component={route.component}
            path={route.path}
            exact={route.isExact}
          />
        ))}
        <Redirect to='/' />
      </Switch>
    </div>
  ) : (
    <div>
      <Switch>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            component={route.component}
            path={route.path}
            exact={route.isExact}
          />
        ))}
        <Redirect to='/login' />
      </Switch>
    </div>
  );
};

export default observer(AppRouter);
