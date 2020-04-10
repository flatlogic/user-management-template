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
import SignupPageWrapper from 'crud/view/auth/styles/SignupPageWrapper';
import InputFormItem, {
  InputFormItemNotFast,
} from 'crud/view/shared/form/items/InputFormItem';
import FormSchema from 'crud/view/shared/form/formSchema';
import ButtonIcon from 'crud/view/shared/ButtonIcon';

const { fields } = model;

class SignupPage extends Component {
  schema = new FormSchema(fields.id, [
    fields.email,
    fields.password,
  ]);

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
      email: this.emailFromInvitation() || '',
      password: '',
    };
  };

  emailFromInvitation = () => {
    return queryString.parse(this.props.location.search)
      .email;
  };

  doSubmit = ({ email, password }) => {
    const { dispatch } = this.props;
    dispatch(
      actions.doRegisterEmailAndPassword(email, password),
    );
  };

  render() {
    return (
      <SignupPageWrapper>
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
                <InputFormItemNotFast
                  name={fields.email.name}
                  placeholder={fields.email.label}
                  autoComplete={fields.email.name}
                  autoFocus
                  errorMessage={this.props.errorMessage}
                  form={form}
                />

                <InputFormItem
                  name={fields.password.name}
                  placeholder={fields.password.label}
                  autoComplete={fields.password.name}
                  type="password"
                />

                <button
                  className="btn btn-block btn-primary"
                  type="submit"
                >
                  <ButtonIcon
                    loading={this.props.loading}
                  />{' '}
                  {i18n('auth.signup')}
                </button>

                <OtherActions>
                  <Link
                    className="btn btn-sm btn-link"
                    to="/auth/signin"
                  >
                    {i18n('auth.alreadyHaveAnAccount')}
                  </Link>
                </OtherActions>
              </form>
            )}
          />
        </Content>
      </SignupPageWrapper>
    );
  }
}

const select = (state) => ({
  loading: selectors.selectLoading(state),
  errorMessage: selectors.selectErrorMessage(state),
});

export default connect(select)(SignupPage);
