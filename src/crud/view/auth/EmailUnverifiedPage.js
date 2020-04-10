import actions from 'crud/modules/auth/authActions';
import selectors from 'crud/modules/auth/authSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from 'crud/view/auth/styles/Content';
import EmailUnverifiedPageWrapper from 'crud/view/auth/styles/EmailUnverifiedPageWrapper';
import Logo from 'crud/view/auth/styles/Logo';
import OtherActions from 'crud/view/auth/styles/OtherActions';
import { i18n, i18nHtml } from 'crud/i18n';
import ButtonIcon from 'crud/view/shared/ButtonIcon';

class EmailUnverifiedPage extends Component {
  doSignout = () => {
    const { dispatch } = this.props;
    dispatch(actions.doSignout());
  };

  doSubmit = () => {
    const { dispatch } = this.props;
    dispatch(actions.doSendEmailConfirmation());
  };

  render() {
    return (
      <EmailUnverifiedPageWrapper>
        <Content>
          <Logo>
            <h1>{i18n('app.title')}</h1>
          </Logo>

          <h3 style={{ textAlign: 'center' }}>
            {i18nHtml(
              'auth.emailUnverified.message',
              this.props.email,
            )}
          </h3>

          <button
            onClick={this.doSubmit}
            style={{ marginTop: '24px' }}
            type="submit"
            className="btn btn-block btn-primary"
          >
            <ButtonIcon loading={this.props.loading} />
            {i18n('auth.emailUnverified.submit')}
          </button>

          <OtherActions>
            <button
              className="btn btn-sm btn-link"
              type="button"
              onClick={this.doSignout}
            >
              {i18n('auth.signinWithAnotherAccount')}
            </button>
          </OtherActions>
        </Content>
      </EmailUnverifiedPageWrapper>
    );
  }
}

const select = (state) => ({
  email: selectors.selectCurrentUserEmail(state),
  loading: selectors.selectLoadingEmailConfirmation(state),
});

export default connect(select)(EmailUnverifiedPage);
