import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import SignIn from '../SignIn/index';
import PasswordForget from '../PasswordForget/index.js';
import * as ROUTES from '../../constants/routes';

const App = () => (
    <Router>
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
    </Router>
);

export default App;