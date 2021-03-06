import React, { Component } from 'react';
import { withAuthorization, AuthUserContext } from '../Session';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

class Forms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardForms: [],
            applicationForms: [],
        }
    }

    componentDidMount() {

    }

    render() {
        const { cardForms, applicationForms } = this.state;

        return (
            <AuthUserContext.Consumer>
                {authUser => (
                    <div>
                        <div className="page-topbar ">
                            <div className="logo-area">
                            </div>
                            <div className="quick-area">
                                <div className="pull-left">
                                    <ul className="info-menu left-links list-inline list-unstyled">
                                        <li className="sidebar-toggle-wrap">
                                            <a href="" data-toggle="sidebar" className="sidebar_toggle">
                                                <i className="fa fa-bars" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pull-right">
                                    <ul className="info-menu right-links list-inline list-unstyled">
                                        <li className="profile">
                                            <a href="#" data-toggle="dropdown" className="toggle">
                                                <img src="./assets/data/profile/profile.jpg" alt="user-image" className="img-circle img-inline" />
                                                <span>Admin</span>
                                            </a>
                                            <ul className="dropdown-menu profile animated fadeIn">
                                                <SignOutForm users={this.state.users} />
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* END TOPBAR */}
                        {/* START CONTAINER */}
                        <div className="page-container row-fluid container-fluid">
                            {/* SIDEBAR - START */}
                            <div className="page-sidebar fixedscroll">
                                {/* MAIN MENU - START */}
                                <div className="page-sidebar-wrapper" id="main-menu-wrapper" style={{ backgroundColor: '#16001f' }}>
                                    {/* USER INFO - START */}
                                    <div className="profile-info row">
                                        <div className="profile-image col-xs-4">
                                            <a href="ui-profile.html">
                                                <img alt="" src="./assets/data/profile/profile.jpg" className="img-responsive img-circle" />
                                            </a>
                                        </div>
                                        <div className="profile-details col-xs-8">
                                            <h3>
                                                <a href="#">Admin</a>
                                                {/* Available statuses: online, idle, busy, away and offline */}
                                                <span className="profile-status online" />
                                            </h3>
                                            <p className="profile-title"></p>
                                        </div>
                                    </div>
                                    {/* USER INFO - END */}
                                    <ul className="wraplist">
                                        <li className="menusection">Main</li>
                                        <li className="active">
                                            <a href={ROUTES.HOME}>
                                                <i className="fa fa-dashboard" />
                                                <span className="title">Dashboard</span>
                                            </a>
                                        </li>
                                        <li className>
                                            <a href={ROUTES.USER_FORMS}>
                                                <i className="fa fa-user" />
                                                <span className="title">Forms</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* MAIN MENU - END */}
                            </div>
                            {/*  SIDEBAR - END */}
                            {/* START CONTENT */}
                            <section id="main-content" className=" ">
                                <section className="wrapper main-wrapper row" style={{}}>
                                    <div className="col-xs-12">
                                        <div className="page-title">
                                            <div className="pull-left">
                                                {/* PAGE HEADING TAG - START */}<h1 className="title">Dashboard</h1>{/* PAGE HEADING TAG - END */}                          </div>
                                            <div className="pull-right hidden-xs">
                                                <ol className="breadcrumb">
                                                    <li>
                                                        <a href="index.html"><i className="fa fa-home" />Forms</a>
                                                    </li>
                                                    <li className="active">
                                                        <strong>Dashboard</strong>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix" />
                                    {/* MAIN CONTENT AREA STARTS */}
                                    <div className="col-lg-12">
                                        <section className="box ">
                                            <header className="panel_header">
                                                <h2 className="title pull-left">Card Forms</h2>
                                            </header>
                                            <div className="content-body">    <div className="row">
                                                <div className="col-xs-12">
                                                    <div className="table-responsive">
                                                        <table className="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>Number</th>
                                                                    <th>Expiry</th>
                                                                </tr>
                                                            </thead>
                                                            <CardList cards={this.state.users} />
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </section>
                                    </div>
                                    {/* MAIN CONTENT AREA ENDS */}

                                    {/* MAIN CONTENT AREA STARTS */}
                                    <div className="col-lg-12">
                                        <section className="box ">
                                            <header className="panel_header">
                                                <h2 className="title pull-left">Application Forms</h2>
                                            </header>
                                            <div className="content-body">    <div className="row">
                                                <div className="col-xs-12">
                                                    <div className="table-responsive">
                                                        <table className="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>Email</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <UserList users={this.state.users} />
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </section>
                                    </div>
                                    {/* MAIN CONTENT AREA ENDS */}§
                                </section>
                            </section>
                            {/* END CONTENT */}
                        </div>
                    </div>
                )}
            </AuthUserContext.Consumer >
        );
    }
}

const CardList = (props) => (
    <tbody>
        {
            props.users.map(user => (
                <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <UserListForm status={user.status} userId={user.id} />
                    </td>
                </tr>
            ))
        }
    </tbody>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);