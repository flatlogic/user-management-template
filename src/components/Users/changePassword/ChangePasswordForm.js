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
import Widget from 'components/Widget';

class UsersForm extends Component {
  handleSubmit = (values) => {
    const { ...data } = values || {};
    this.props.onSubmit(data);
  };

  title = () => {
    return 'Change Password';
  };

  passwordSchema = {
    currentPassword: { type: 'string', label: 'Current Password' },
    newPassword: { type: 'string', label: 'New Password' },
    confirmNewPassword: { type: 'string', label: 'Current Password' },
  };

  renderForm() {
    const { saveLoading, isEditing } = this.props;

    return (
      <Widget title={<h4>{this.title()}</h4>} collapse close>
        <Formik
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <form onSubmit={form.handleSubmit}>

                <InputFormItem
                  name={'currentPassword'}
                  password
                  schema={this.passwordSchema}
                  autoFocus
                />

                <InputFormItem
                  name={'newPassword'}
                  schema={this.passwordSchema}
                  password
                />

                <InputFormItem
                  name={'confirmNewPassword'}
                  schema={this.passwordSchema}
                  password
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
                    Change Password
                  </button>{' '}

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
