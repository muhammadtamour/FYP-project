import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Firebase, { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignIn = () => (
    <div className="container-fluid">
        <div className="login-wrapper row">
            <div id="login" className="login loginpage col-lg-offset-4 col-md-offset-3 col-sm-offset-3 col-xs-offset-0 col-xs-12 col-sm-6 col-lg-4">
                <h1><a href="#" title="Login Page" tabIndex={-1}>ARES BJJ</a></h1>
                <SignInForm />
                <p id="nav">
                    <a className="pull-left" href="#" title="Password Lost and Found" style={{ color: '#cecccf' }} />
                </p>
            </div>
        </div>
    </div >
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        event.preventDefault();

        const { email, password } = this.state;


        this.props.firebase.doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <form id="loginform" onSubmit={this.onSubmit}>
                <p>
                    <label htmlFor="user_login">Enter Your Email<br />
                        <input type="text"
                            name="email"
                            value={email}
                            onChange={this.onChange}
                            id="user_login"
                            className="input"
                            size={13} />
                    </label>
                </p>
                <p>
                    <label htmlFor="user_pass">Enter Your Password<br />
                        <input type="password"
                            name="password"
                            value={password}
                            id="user_pass"
                            onChange={this.onChange}
                            className="input"
                            size={13} />
                    </label>
                </p>
                <p className="submit">
                    <input type="submit" name="wp-submit" id="wp-submit" className="btn btn-accent btn-block" defaultValue="Sign In" />
                </p>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}


const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignIn;

export { SignInForm };