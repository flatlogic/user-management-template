import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Hammer from 'rc-hammerjs';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { openSidebar, closeSidebar, changeActiveSidebarItem, toggleSidebar } from '../../actions/navigation';
import s from './Layout.module.scss';
import BreadcrumbHistory from '../BreadcrumbHistory';
import LazyLoad from './LazyLoad';

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
                    <Route path={"/app/dashboard"} exact component={LazyLoad({loader: () => import('pages/dashboard/Dashboard')})} />
                    <Route path={"/app/profile"} exact component={LazyLoad({loader: () => import('components/Users/form/UsersFormPage')})} />
                    <Route path={"/app/password"} exact component={LazyLoad({loader: () => import('components/Users/changePassword/ChangePasswordFormPage')})} />
                    <Route path={"/admin/users"} exact component={LazyLoad({loader: () => import('components/Users/list/UsersListPage')})} />
                    <Route path={"/admin/users/new"} exact component={LazyLoad({loader: () => import('components/Users/form/UsersFormPage')})} />
                    <Route path={"/admin/users/:id/edit"} exact component={LazyLoad({loader: () => import('components/Users/form/UsersFormPage')})} />
                    <Route path={"/admin/users/:id"} exact component={LazyLoad({loader: () => import('components/Users/view/UsersViewPage')})} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              <footer className={s.contentFooter}>
                Sing App React Admin Dashboard Template - Made by <a href="https://flatlogic.com" rel="nofollow noopener noreferrer" target="_blank">Flatlogic</a>
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
