import React from 'react';

const PasswordForget = () => (
    <div className="container-fluid">
        <div className="login-wrapper row">
            <div id="login" className="login loginpage col-lg-offset-4 col-md-offset-3 col-sm-offset-3 col-xs-offset-0 col-xs-12 col-sm-6 col-lg-4">
                <h1><a href="#" title="Login Page" tabIndex={-1}>ARES BJJ</a></h1>
                <form name="loginform" id="loginform" action="http://jaybabani.com/crest-admin/demo/app/index.html" method="post">
                    <p>
                        <label htmlFor="user_login">Enter Your Email<br />
                            <input type="text" name="log" id="user_login" className="input" size={13} /></label>
                    </p>
                    <p className="submit">
                        <input type="submit" name="wp-submit" id="wp-submit" className="btn btn-accent btn-block" defaultValue="Send Request" />
                    </p>
                </form>
                <p id="nav">
                    <a className="pull-left" href="#" title="Password Lost and Found" style={{ color: '#cecccf' }} />
                </p>
            </div>
        </div>
    </div>
);

export default PasswordForget;