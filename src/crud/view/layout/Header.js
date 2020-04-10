import authActions from 'crud/modules/auth/authActions';
import authSelectors from 'crud/modules/auth/authSelectors';
import layoutActions from 'crud/modules/layout/layoutActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderWrapper from 'crud/view/layout/styles/HeaderWrapper';
import layoutSelectors from 'crud/modules/layout/layoutSelectors';
import { i18n } from 'crud/i18n';
import I18nSelect from 'crud/view/layout/I18nSelect';
import { getHistory } from 'crud/modules/store';
import Avatar from 'crud/view/shared/Avatar';

class Header extends Component {
  doSignout = () => {
    const { dispatch } = this.props;
    dispatch(authActions.doSignout());
  };

  doNavigateToProfile = () => {
    getHistory().push('/profile');
  };

  doToggleMenu = () => {
    const { dispatch } = this.props;
    dispatch(layoutActions.doToggleMenu());
  };

  render() {
    return (
      <HeaderWrapper className="navbar sticky-top navbar-light bg-white border-bottom">
        <button
          type="button"
          onClick={this.doToggleMenu}
          className="menu-toggle-button"
        >
          <i className="fas fa-bars" />
        </button>

        <div>
          <span className="i18n-select">
            <I18nSelect />
          </span>

          <div className="dropdown">
            <span
              className="user-dropdown"
              data-toggle="dropdown"
            >
              <span className="user-dropdown-avatar">
                <Avatar
                  size="small"
                  src={
                    this.props.userDropdownAvatar ||
                    undefined
                  }
                  alt="avatar"
                />
              </span>
              <span className="user-dropdown-text">
                {this.props.userDropdownText}
              </span>
            </span>
            <div className="dropdown-menu dropdown-menu-right">
              <button
                onClick={this.doNavigateToProfile}
                className="dropdown-item"
                type="button"
              >
                <i className="fas fa-user" />{' '}
                {i18n('auth.profile.title')}
              </button>
              <button
                onClick={this.doSignout}
                className="dropdown-item"
                type="button"
              >
                <i className="fas fa-sign-out-alt" />{' '}
                {i18n('auth.signout')}
              </button>
            </div>
          </div>
        </div>
      </HeaderWrapper>
    );
  }
}

const select = (state) => ({
  menuVisible: layoutSelectors.selectMenuVisible(state),
  userDropdownText: authSelectors.selectCurrentUserNameOrEmailPrefix(
    state,
  ),
  userDropdownAvatar: authSelectors.selectCurrentUserAvatar(
    state,
  ),
});

export default connect(select)(Header);
