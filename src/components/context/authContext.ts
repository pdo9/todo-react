import React from 'react';

export type TAuthContext = {
  isAuth: boolean;
  setIsAuth: (state: boolean) => void;
};

export const AuthContext = React.createContext<TAuthContext>({
  isAuth: false,
  setIsAuth: () => {},
});

// import React from 'react';

// export const AuthContext = React.createContext(null);
