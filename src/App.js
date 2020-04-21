import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

/* eslint-disable */
import ErrorPage from 'pages/error';
/* eslint-enable */

import 'styles/theme.scss';
import LayoutComponent from 'components/Layout';
import Login from 'pages/auth/login';
import Verify from 'pages/auth/verify';
import Register from 'pages/auth/register';
import { logoutUser } from 'actions/auth';

const AdminRoute = ({currentUser, dispatch, component, ...rest }) => {
    if (currentUser.role != 'admin' || !Login.isAuthenticated(localStorage.getItem('token'))) {
        dispatch(logoutUser());
        return (<Redirect to="/login"/>)
    } else if (currentUser && currentUser.role == 'admin') {
        return ( // eslint-disable-line
            <Route {...rest} render={props => (React.createElement(component, props))}/>
        );
    }
};

const PrivateRoute = ({dispatch, component, ...rest }) => {
    if (!Login.isAuthenticated(localStorage.getItem('token'))) {
        dispatch(logoutUser());
        return (<Redirect to="/login"/>)
    } else {
        return ( // eslint-disable-line
            <Route {...rest} render={props => (React.createElement(component, props))}/>
        );
    }
};

const CloseButton = ({closeToast}) => <i onClick={closeToast} className="la la-close notifications-close"/>

class App extends React.PureComponent {
  render() {
    console.log(this.props.currentUser);
    return (
        <div>
            <ToastContainer
                autoClose={5000}
                hideProgressBar
                closeButton={<CloseButton/>}
            />
            <HashRouter>
                <Switch>
                    <Route path="/" exact render={() => <Redirect to="/app"/>}/>
                    <Route path="/app" exact render={() => <Redirect to="/app/profile"/>}/>
                    <PrivateRoute path="/app" dispatch={this.props.dispatch} component={LayoutComponent}/>
                    <PrivateRoute path="/admin" dispatch={this.props.dispatch} component={LayoutComponent}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/verify-email" exact component={Verify}/>
                    <Route path="/error" exact component={ErrorPage}/>
                    <Redirect from="*" to="/app/profile"/>
                </Switch>
            </HashRouter>
        </div>

    );
  }
}

function mapStateToProps(store) {
    return {
      isAuthenticated: store.auth.isAuthenticated,
      currentUser: store.authCrud.currentUser,
    };
}

export default connect(mapStateToProps)(App);
