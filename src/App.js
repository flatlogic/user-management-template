import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AdminRoute, UserRoute, AuthRoute } from './RouteComponents';

import 'styles/theme.scss';

import ErrorPage from 'pages/error';
import LayoutComponent from 'components/Layout';
import Login from 'pages/auth/login';
import Verify from 'pages/auth/verify';
import Register from 'pages/auth/register';
import Reset from 'pages/auth/reset';
import Forgot from 'pages/auth/forgot';

const CloseButton = ({closeToast}) => <i onClick={closeToast} className="la la-close notifications-close"/>

class App extends React.PureComponent {
  render() {
    return (
        <div>
            <ToastContainer
                autoClose={5000}
                hideProgressBar
                closeButton={<CloseButton/>}
            />
            { this.props.currentUser &&
            <HashRouter>
                <Switch>
                    <Route path="/" exact render={() => <Redirect to="/app"/>}/>
                    <Route path="/app" exact render={() => <Redirect to="/app/profile"/>}/>
                    <UserRoute path="/app" dispatch={this.props.dispatch} component={LayoutComponent}/>
                    <AdminRoute path="/admin" dispatch={this.props.dispatch} component={LayoutComponent}/>
                    <AuthRoute path="/register" exact component={Register}/>
                    <AuthRoute path="/login" exact component={Login}/>
                    <AuthRoute path="/verify-email" exact component={Verify}/>
                    <AuthRoute path="/password-reset" exact component={Reset}/>
                    <AuthRoute path="/forgot" exact component={Forgot}/>
                    <Route path="/error" exact component={ErrorPage}/>
                    <Redirect from="*" to="/app/dashboard"/>
                </Switch>
            </HashRouter>
            }
        </div>

    );
  }
}

function mapStateToProps(store) {
    return {
      isAuthenticated: store.auth.isAuthenticated,
      currentUser: store.auth.currentUser,
    };
}

export default connect(mapStateToProps)(App);
