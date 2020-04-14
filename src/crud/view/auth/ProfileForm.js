import { Formik } from 'formik';
import actions from 'crud/modules/auth/authActions';
import model from 'crud/modules/auth/userModel';
import selectors from 'crud/modules/auth/authSelectors';
import { i18n } from 'crud/i18n';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImagesFormItem from 'crud/view/shared/form/items/ImagesFormItem';
import InputFormItem from 'crud/view/shared/form/items/InputFormItem';
import ViewFormItem from 'crud/view/shared/form/items/ViewFormItem';
import FormSchema from 'crud/view/shared/form/formSchema';
import FormWrapper from 'crud/view/shared/styles/FormWrapper';
import ButtonIcon from 'crud/view/shared/ButtonIcon';

const { fields } = model;

class ProfileFormPage extends Component {
  schema = new FormSchema(fields.id, [
    fields.email,
    fields.firstName,
    fields.lastName,
    fields.phoneNumber,
    fields.avatarsProfile,
    fields.roles,
  ]);

  handleSubmit = (values) => {
    const { dispatch } = this.props;
    dispatch(
      actions.doUpdateProfile(
        values.firstName,
        values.lastName,
        values.phoneNumber,
        values.avatars,
      ),
    );
  };

  initialValues = () => {
    const currentUser = this.props.currentUser;
    return this.schema.initialValues(currentUser);
  };

  renderForm() {
    const { saveLoading } = this.props;

    return (
      <FormWrapper>
        <Formik
          initialValues={this.initialValues()}
          validationSchema={this.schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <form onSubmit={form.handleSubmit}>
                <ViewFormItem
                  name={fields.email.name}
                  label={fields.email.label}
                />

                <InputFormItem
                  name={fields.firstName.name}
                  label={fields.firstName.label}
                  autoComplete={fields.firstName.name}
                  autoFocus
                />

                <InputFormItem
                  name={fields.lastName.name}
                  label={fields.lastName.label}
                  autoComplete={fields.lastName.name}
                />

                <InputFormItem
                  name={fields.phoneNumber.name}
                  label={fields.phoneNumber.label}
                  autoComplete={fields.phoneNumber.name}
                  prefix={'+'}
                />

                <ImagesFormItem
                  name={fields.avatarsProfile.name}
                  label={fields.avatarsProfile.label}
                  path={fields.avatarsProfile.path(
                    this.props.currentUser
                      .authenticationUid,
                  )}
                  schema={{
                    size: fields.avatarsProfile.size,
                  }}
                  max={fields.avatarsProfile.max}
                />

                <div className="form-buttons">
                  <button
                    className="btn btn-primary"
                    disabled={saveLoading}
                    type="button"
                    onClick={form.handleSubmit}
                  >
                    <ButtonIcon
                      loading={saveLoading}
                      iconClass="far fa-save"
                    />{' '}
                    {i18n('common.save')}
                  </button>

                  <button
                    className="btn btn-light"
                    disabled={saveLoading}
                    onClick={form.handleReset}
                    type="button"
                  >
                    <i className="la la-undo"></i>{' '}
                    {i18n('common.reset')}
                  </button>

                  {this.props.onCancel ? (
                    <button
                      className="btn btn-light"
                      disabled={saveLoading}
                      onClick={() => this.props.onCancel()}
                      type="button"
                    >
                      <i className="la la-times"></i>{' '}
                      {i18n('common.cancel')}
                    </button>
                  ) : null}
                </div>
              </form>
            );
          }}
        />
      </FormWrapper>
    );
  }

  render() {
    return this.renderForm();
  }
}

function select(state) {
  return {
    saveLoading: selectors.selectLoadingUpdateProfile(
      state,
    ),
    currentUser: selectors.selectCurrentUser(state),
  };
}

export default connect(select)(ProfileFormPage);
