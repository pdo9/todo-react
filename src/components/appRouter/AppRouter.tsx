import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
// import { TAuthContext, AuthContext } from '../context/authContext';
import AuthStore, { IAuthCredential } from '../stores/AuthStore';
import { observer } from 'mobx-react-lite';

const AppRouter: React.FC = () => {
  // const { isAuth }: TAuthContext = React.useContext<TAuthContext>(AuthContext);
  const authState: IAuthCredential = AuthStore.authState;
  // console.log('approuter authState:', authState);

  // return isAuth ? (
  return authState.isAccessAllowed ? (
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
