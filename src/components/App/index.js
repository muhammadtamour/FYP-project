import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext, withAuthentication } from '../Session';
import SignIn from '../SignIn/index';
import PasswordForget from '../PasswordForget';
import Home from '../Home/index';

const App = () => (
    <AuthUserContext.Provider >
        <Router>
            <Switch>
                <Route path={ROUTES.SIGN_IN} component={SignIn} />
                {/* <SignIn /> */}

                <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
                {/* <PasswordForget /> */}

                <Route path={ROUTES.HOME} component={Home} />
                {/* <Home /> */}
            </Switch>
        </Router >
    </AuthUserContext.Provider>
);


export default withAuthentication(App);