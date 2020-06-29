import React from 'react';
import { Router } from '@reach/router';

import Login from '../pages/login/Login';

function AppRouter() {
  return (
    <Router>
      <Login path='/' />
    </Router>
  );
}

export default AppRouter;
