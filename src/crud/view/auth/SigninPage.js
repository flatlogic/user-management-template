import { Formik } from 'formik';
import actions from 'crud/modules/auth/authActions';
import model from 'crud/modules/auth/userModel';
import selectors from 'crud/modules/auth/authSelectors';
import { i18n } from 'crud/i18n';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Content from 'crud/view/auth/styles/Content';
import Logo from 'crud/view/auth/styles/Logo';
import OtherActions from 'crud/view/auth/styles/OtherActions';
import SigninPageWrapper from 'crud/view/auth/styles/SigninPageWrapper';
import I18nFlags from 'crud/view/layout/I18nFlags';
import InputFormItem, {
  InputFormItemNotFast,
} from 'crud/view/shared/form/items/InputFormItem';
import FormSchema from 'crud/view/shared/form/formSchema';
import ButtonIcon from 'crud/view/shared/ButtonIcon';

const { fields } = model;

class SigninPage extends Component {
  schema = new FormSchema(fields.id, [
    fields.email,
    fields.password,
    fields.rememberMe,
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
    return { email: '', password: '', rememberMe: true };
  };

  doSubmit = ({ email, password, rememberMe }) => {
    const { dispatch } = this.props;
    dispatch(
      actions.doSigninWithEmailAndPassword(
        email,
        password,
        rememberMe,
      ),
    );
  };

  render() {
    return (
      <SigninPageWrapper>
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

                <div className="d-flex form-group">
                  <div className="form-check col-6">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={fields.rememberMe.name}
                      checked={form.values.rememberMe}
                      onChange={form.handleChange}
                    />

                    <label
                      className="form-check-label"
                      htmlFor={fields.rememberMe.name}
                    >
                      {fields.rememberMe.label}
                    </label>
                  </div>

                  <div className="col-6 pr-0">
                    <Link
                      className="btn btn-sm btn-link"
                      style={{ float: 'right' }}
                      to="/auth/forgot-password"
                    >
                      {i18n('auth.forgotPassword')}
                    </Link>
                  </div>
                </div>

                <button
                  className="btn btn-primary btn-block"
                  type="submit"
                >
                  <ButtonIcon
                    loading={this.props.loading}
                  />{' '}
                  {i18n('auth.signin')}
                </button>

                <OtherActions>
                  <Link
                    className="btn btn-sm btn-link"
                    to="/auth/signup"
                  >
                    {i18n('auth.createAnAccount')}
                  </Link>
                </OtherActions>

                <I18nFlags style={{ marginTop: '24px' }} />
              </form>
            )}
          />
        </Content>
      </SigninPageWrapper>
    );
  }
}

const select = (state) => ({
  loading: selectors.selectLoading(state),
  errorMessage: selectors.selectErrorMessage(state),
});

export default connect(select)(SigninPage);
