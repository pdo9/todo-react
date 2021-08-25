import React from 'react';

import { authContext } from './authContext';

export default function useAuth() {
  return React.useContext(authContext);
}
