import React, { Component } from 'react';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

const PasswordForget = () => (
    <div className="container-fluid">
        <div className="login-wrapper row">
            <div id="login" className="login loginpage col-lg-offset-4 col-md-offset-3 col-sm-offset-3 col-xs-offset-0 col-xs-12 col-sm-6 col-lg-4">
                <h1><a href={ROUTES.PASSWORD_FORGET} title="Login Page" tabIndex={-1}>ARES BJJ</a></h1>
                <PasswordForgetForm />
                {/* <p id="nav">
                    <a className="pull-left" href="#" title="Password Lost and Found" style={{ color: '#cecccf' }} />
                </p> */}
            </div>
        </div>
    </div>
);

const INITIAL_STATE = {
    email: '',
    error: null,
};


class PasswordForgetFormBase extends Component {

    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email } = this.state;

        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                alert("Email Has Been Sent");
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {

        const { email, error } = this.state;

        const isInvalid = email === '';

        return (
            <form name="loginform" id="loginform" onSubmit={this.onSubmit}>
                <p>
                    <label htmlFor="user_login">Enter Your Email<br />
                        <input type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            id="user_login"
                            className="input"
                            size={13} />
                    </label>
                </p>
                <p className="submit">
                    <input type="submit"
                        id="wp-submit"
                        className="btn btn-accent btn-block"
                        value="Send Request" />
                </p>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

export default PasswordForget;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm };