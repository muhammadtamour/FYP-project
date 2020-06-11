import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import SignIn from '../SignIn/index';
import PasswordForget from '../PasswordForget';
import Home from '../Home/index';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
        }
    }

    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState({ authUser })
                : this.setState({ authUser: null });
        })
    }

    componentWillUnmount() {
        this.listener();
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path={ROUTES.SIGN_IN} >
                        <SignIn authUser={this.state.authUser} />
                    </Route>
                    <Route path={ROUTES.PASSWORD_FORGET}>
                        <PasswordForget authUser={this.state.authUser} />
                    </Route>
                    <Route path={ROUTES.HOME}>
                        <Home authUser={this.state.authUser} />
                    </Route>
                </Switch>
            </Router >
        );
    }
}


export default withFirebase(App);