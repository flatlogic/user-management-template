<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:strip-space elements="*" />
<xsl:output method="text" />
<xsl:template match="/opt">
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Hammer from 'rc-hammerjs';
import Header from '../Header';
import Helper from '../Helper';
import Sidebar from '../Sidebar';
import { openSidebar, closeSidebar, toggleSidebar } from '../../actions/navigation';
import s from './Layout.module.scss';
import BreadcrumbHistory from '../BreadcrumbHistory';

<xsl:for-each select="./entities">
import <xsl:value-of select="@name_cap"/>FormPage from '../CRUD/<xsl:value-of select="@name_cap"/>/form/<xsl:value-of select="@name_cap"/>FormPage';
import <xsl:value-of select="@name_cap"/>ListPage from '../CRUD/<xsl:value-of select="@name_cap"/>/list/<xsl:value-of select="@name_cap"/>ListPage';
import <xsl:value-of select="@name_cap"/>ViewPage from '../CRUD/<xsl:value-of select="@name_cap"/>/view/<xsl:value-of select="@name_cap"/>ViewPage';
</xsl:for-each>

import ChangePasswordFormPage from '../CRUD/ChangePassword/ChangePasswordFormPage';
import Dashboard from '../../pages/dashboard';
import { SidebarTypes } from '../../reducers/layout';

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
          'sing-dashboard',
          `dashboard-${(this.props.sidebarType === SidebarTypes.TRANSPARENT) ? "light" : this.props.dashboardTheme}`,
        ].join(' ')}
      >
        <Sidebar />
        <div className={s.wrap}>
          <Header />
          <Helper />
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
                    <Route path={"/app/profile"} exact component={UsersFormPage} />
                    <Route path={"/app/password"} exact component={ChangePasswordFormPage} />
<xsl:for-each select="./entities">
                    <Route path={"/admin/<xsl:value-of select="@name"/>"} exact component={<xsl:value-of select="@name_cap"/>ListPage} />
                    <Route path={"/admin/<xsl:value-of select="@name"/>/new"} exact component={<xsl:value-of select="@name_cap"/>FormPage} />
                    <Route path={"/admin/<xsl:value-of select="@name"/>/:id/edit"} exact component={<xsl:value-of select="@name_cap"/>FormPage} />
                    <Route path={"/admin/<xsl:value-of select="@name"/>/:id"} exact component={<xsl:value-of select="@name_cap"/>ViewPage} />
</xsl:for-each>
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
    dashboardTheme: store.layout.dashboardTheme,
    sidebarType: store.layout.sidebarType,
    currentUser: store.auth.currentUser,
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
</xsl:template>
</xsl:stylesheet>
