import { Formik } from 'formik';
import React, { Component } from 'react';
import ViewFormItem from 'components/FormItems/items/ViewFormItem';
import Spinner from 'crud/view/shared/Spinner';
import ButtonIcon from 'crud/view/shared/ButtonIcon';
import InputFormItem from 'components/FormItems/items/InputFormItem';
import InputNumberFormItem from 'components/FormItems/items/InputNumberFormItem';
import SwitchFormItem from 'components/FormItems/items/SwitchFormItem';
import RadioFormItem from 'components/FormItems/items/RadioFormItem';
import SelectFormItem from 'components/FormItems/items/SelectFormItem';
import DatePickerFormItem from 'components/FormItems/items/DatePickerFormItem';
import ImagesFormItem from 'components/FormItems/items/ImagesFormItem';
import FilesFormItem from 'components/FormItems/items/FilesFormItem';
import usersFields from 'crud/modules/users/usersFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

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

  title = () => {
    if(this.props.isProfile) {
      return 'Edit My Profile';
    }

    return this.props.isEditing
      ? 'Edit User'
      : 'Add User';
  };

  renderForm() {
    const { saveLoading, isEditing } = this.props;

    return (
      <Widget title={<h4>{this.title()}</h4>} collapse close>
        <Formik
          onSubmit={this.handleSubmit}
          initialValues={this.iniValues()}
          validationSchema={this.formValidations()}
          render={(form) => {
            return (
              <form onSubmit={form.handleSubmit}>

                <InputFormItem
                  name={'firstName'}
                  schema={usersFields}

                  autoFocus
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

                { this.props.currentUser && this.props.currentUser.role == 'admin' &&
                  <>
                    <RadioFormItem
                      name={'role'}
                      schema={usersFields}
                    />

                    <SwitchFormItem
                      name={'disabled'}
                      schema={usersFields}
                    />
                  </>
                }

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
                    Save
                  </button>{' '}{' '}

                  <button
                    className="btn btn-light"
                    type="button"
                    disabled={saveLoading}
                    onClick={form.handleReset}
                  >
                    <i className="la la-undo"></i>{' '}
                    Reset
                  </button>{' '}{' '}

                    <button
                      className="btn btn-light"
                      type="button"
                      disabled={saveLoading}
                      onClick={() => this.props.onCancel()}
                    >
                      <i className="la la-times"></i>{' '}
                      Cancel
                    </button>
                </div>
              </form>
            );
          }}
        />
      </Widget>
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
