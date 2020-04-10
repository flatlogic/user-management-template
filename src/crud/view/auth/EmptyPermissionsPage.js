import actions from 'crud/modules/auth/authActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'crud/i18n';
import Content from 'crud/view/auth/styles/Content';
import EmptyPermissionsPageWrapper from 'crud/view/auth/styles/EmptyPermissionsPageWrapper';
import Logo from 'crud/view/auth/styles/Logo';
import OtherActions from 'crud/view/auth/styles/OtherActions';

class EmptyPermissionsPage extends Component {
  doSignout = () => {
    const { dispatch } = this.props;
    dispatch(actions.doSignout());
  };

  render() {
    return (
      <EmptyPermissionsPageWrapper>
        <Content>
          <Logo>
            <h1>{i18n('app.title')}</h1>
          </Logo>

          <h3>{i18n('auth.emptyPermissions.message')}</h3>

          <OtherActions>
            <button
              className="btn btn-sm btn-link"
              type="button"
              onClick={this.doSignout}
            >
              {i18n('auth.signout')}
            </button>
          </OtherActions>
        </Content>
      </EmptyPermissionsPageWrapper>
    );
  }
}

export default connect(null)(EmptyPermissionsPage);
