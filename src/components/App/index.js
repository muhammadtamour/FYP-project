import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignIn from '../SignIn/index';
import PasswordForget from '../PasswordForget/index';
import Home from '../Home/index';

const App = () => (
    <Router>
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
        <Route path={ROUTES.HOME} component={Home} />
    </Router>
);

export default App;