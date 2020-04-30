import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Hammer from 'rc-hammerjs';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { openSidebar, closeSidebar, toggleSidebar } from '../../actions/navigation';
import s from './Layout.module.scss';
import BreadcrumbHistory from '../BreadcrumbHistory';
import UserFormPage from '../Users/form/UsersFormPage';
import UserListPage from '../Users/list/UsersListPage';
import UserViewPage from '../Users/view/UsersViewPage';
import ChangePasswordFormPage from '../Users/changePassword/ChangePasswordFormPage';
import Dashboard from '../../pages/dashboard';

class Layout extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleSwipe = this.handleSwipe.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  handleResize() {
    if (window.innerWidth <= 768 && this.props.sidebarStatic) {
      this.props.dispatch(toggleSidebar(false));
    }
  }

  handleSwipe(e) {
    if ('ontouchstart' in window) {
      if (e.direction === 4) {
        this.props.dispatch(openSidebar());
        return;
      }

      if (e.direction === 2 && this.props.sidebarOpened) {
        this.props.dispatch(closeSidebar());
        return;
      }
    }
  }

  render() {
    return (
      <div
        className={[
          s.root,
          this.props.sidebarStatic ? `${s.sidebarStatic}` : '',
          !this.props.sidebarOpened ? s.sidebarClose : '',
          'sing-dashboard'
        ].join(' ')}
      >
        <Sidebar />
        <div className={s.wrap}>
          <Header />

          <Hammer onSwipe={this.handleSwipe}>
            <main className={s.content}>
            <BreadcrumbHistory url={this.props.location.pathname} />
              <TransitionGroup>
                <CSSTransition
                  key={this.props.location.key}
                  classNames="fade"
                  timeout={200}
                >
                  <Switch>
                    <Route path={"/app/dashboard"} exact component={Dashboard} />
                    <Route path={"/app/profile"} exact component={UserFormPage} />
                    <Route path={"/app/password"} exact component={ChangePasswordFormPage} />
                    <Route path={"/admin/users"} exact component={UserListPage} />
                    <Route path={"/admin/users/new"} exact component={UserFormPage} />
                    <Route path={"/admin/users/:id/edit"} exact component={UserFormPage} />
                    <Route path={"/admin/users/:id"} exact component={UserViewPage} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              <footer className={s.contentFooter}>
                React User Management - Made by <a href="https://flatlogic.com" rel="nofollow noopener noreferrer" target="_blank">Flatlogic</a>
              </footer>
            </main>
          </Hammer>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
    currentUser: store.auth.currentUser,
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
