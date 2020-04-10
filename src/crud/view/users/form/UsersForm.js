
import { Formik } from 'formik';
import { i18n } from 'crud/i18n';
import model from 'crud/modules/users/usersModel';
import React, { Component } from 'react';
import ViewFormItem from 'crud/view/shared/form/items/ViewFormItem';
import Spinner from 'crud/view/shared/Spinner';
import FormWrapper from 'crud/view/shared/styles/FormWrapper';
import FormSchema from 'crud/view/shared/form/formSchema';
import ButtonIcon from 'crud/view/shared/ButtonIcon';
import InputFormItem from 'crud/view/shared/form/items/InputFormItem';
import InputNumberFormItem from 'crud/view/shared/form/items/InputNumberFormItem';
import UserAutocompleteFormItem from 'crud/view/iam/autocomplete/UserAutocompleteFormItem';
import SwitchFormItem from 'crud/view/shared/form/items/SwitchFormItem';
import RadioFormItem from 'crud/view/shared/form/items/RadioFormItem';
import SelectFormItem from 'crud/view/shared/form/items/SelectFormItem';
import DatePickerFormItem from 'crud/view/shared/form/items/DatePickerFormItem';
import ImagesFormItem from 'crud/view/shared/form/items/ImagesFormItem';
import FilesFormItem from 'crud/view/shared/form/items/FilesFormItem';
import usersFields from 'crud/modules/users/usersFields';
import IniValues from 'crud/view/shared/form/iniValues';
import PreparedValues from 'crud/view/shared/form/preparedValues';
import FormValidations from 'crud/view/shared/form/formValidations';



const { fields } = model;

class UsersForm extends Component {
  iniValues = () => { 
    return IniValues(usersFields, this.props.record || {});
  }

  formValidations = () => { 
    return FormValidations(usersFields, this.props.record || {});
  }

  handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(usersFields, values || {});
    this.props.onSubmit(id, data);
  };

  renderForm() {
    const { saveLoading, isEditing } = this.props;

    return (
      <FormWrapper>
        <Formik
          onSubmit={this.handleSubmit}
          initialValues={this.iniValues()}
          validationSchema={this.formValidations()}
          render={(form) => {
            return (
              <form onSubmit={form.handleSubmit}>

                <InputFormItem
                  name={'fullName'}
                  schema={usersFields}

                  autoFocus

                />

                <InputFormItem
                  name={'firstName'}
                  schema={usersFields}

                />

                <InputFormItem
                  name={'lastName'}
                  schema={usersFields}

                />

                <InputFormItem
                  name={'phoneNumber'}
                  schema={usersFields}

                />

                <InputFormItem
                  name={'email'}
                  schema={usersFields}

                />

                <SwitchFormItem
                  name={'disabled'}
                  schema={usersFields}
                />

                <ImagesFormItem
                  name={'avatar'}
                  schema={usersFields}
                  path={'users/avatar'}
                  fileProps={{
                    size: undefined,
                    formats: undefined,
                  }}
                  max={undefined}
                />

                <InputFormItem
                  name={'password'}
                  schema={usersFields}

                />

                <SwitchFormItem
                  name={'emailVerified'}
                  schema={usersFields}
                />

                <InputFormItem
                  name={'emailVerificationToken'}
                  schema={usersFields}

                />

                <DatePickerFormItem
                  name={'emailVerificationTokenExpiresAt'}
                  schema={usersFields}
                  showTimeInput
                />

                <InputFormItem
                  name={'passwordResetToken'}
                  schema={usersFields}

                />

                <DatePickerFormItem
                  name={'passwordResetTokenExpiresAt'}
                  schema={usersFields}
                  showTimeInput
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
                    type="button"
                    disabled={saveLoading}
                    onClick={form.handleReset}
                  >
                    <i className="fas fa-undo"></i>{' '}
                    {i18n('common.reset')}
                  </button>

                  {this.props.onCancel ? (
                    <button
                      className="btn btn-light"
                      type="button"
                      disabled={saveLoading}
                      onClick={() => this.props.onCancel()}
                    >
                      <i className="fas fa-times"></i>{' '}
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
    const { isEditing, findLoading, record } = this.props;

    if (findLoading) {
      return <Spinner />;
    }

    if (isEditing && !record) {
      return <Spinner />;
    }

    return this.renderForm();
  }
}

export default UsersForm;
