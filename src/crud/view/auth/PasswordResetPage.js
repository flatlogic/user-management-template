import { Formik } from 'formik';
import actions from 'crud/modules/auth/authActions';
import model from 'crud/modules/auth/userModel';
import selectors from 'crud/modules/auth/authSelectors';
import { i18n } from 'crud/i18n';
import queryString from 'query-string';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Content from 'crud/view/auth/styles/Content';
import Logo from 'crud/view/auth/styles/Logo';
import OtherActions from 'crud/view/auth/styles/OtherActions';
import InputFormItem from 'crud/view/shared/form/items/InputFormItem';
import ForgotPasswordPageWrapper from 'crud/view/auth/styles/EmptyPermissionsPageWrapper';
import FormSchema from 'crud/view/shared/form/formSchema';
import ButtonIcon from 'crud/view/shared/ButtonIcon';

const { fields } = model;

class PasswordResetPage extends Component {
  schema = new FormSchema(fields.id, [fields.password]);

  componentDidMount() {
    this.clearErrorMessage();
  }

  handleChange(event, form) {
    if (this.props.errorMessage) {
      this.clearErrorMessage();
    }

    form.handleChange(event);
  }

  clearErrorMessage = () => {
    const { dispatch } = this.props;
    dispatch(actions.doClearErrorMessage());
  };

  initialValues = () => {
    return {
      password: '',
    };
  };

  token = () => {
    return queryString.parse(this.props.location.search)
      .token;
  };

  doSubmit = ({ password }) => {
    const { dispatch } = this.props;
    dispatch(
      actions.doResetPassword(this.token(), password),
    );
  };

  render() {
    return (
      <ForgotPasswordPageWrapper>
        <Content>
          <Logo>
            <h1>{i18n('app.title')}</h1>
          </Logo>

          <Formik
            initialValues={this.initialValues()}
            validationSchema={this.schema.schema}
            onSubmit={this.doSubmit}
            render={(form) => (
              <form onSubmit={form.handleSubmit}>
                <InputFormItem
                  name={fields.password.name}
                  placeholder={fields.password.label}
                  autoComplete={fields.password.name}
                  type="password"
                />

                <button
                  type="submit"
                  className="btn btn-block btn-primary"
                >
                  <ButtonIcon
                    loading={this.props.loading}
                  />{' '}
                  {i18n('auth.passwordReset.message')}
                </button>

                <OtherActions>
                  <Link
                    className="btn btn-sm btn-link"
                    to="/auth/signin"
                  >
                    {i18n('common.cancel')}
                  </Link>
                </OtherActions>
              </form>
            )}
          />
        </Content>
      </ForgotPasswordPageWrapper>
    );
  }
}

const select = (state) => ({
  loading: selectors.selectLoadingPasswordReset(state),
  errorMessage: selectors.selectErrorMessage(state),
});

export default connect(select)(PasswordResetPage);
