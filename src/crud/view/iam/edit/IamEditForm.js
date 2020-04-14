import { Formik } from 'formik';
import { i18n } from 'crud/i18n';
import actions from 'crud/modules/iam/form/iamFormActions';
import selectors from 'crud/modules/iam/form/iamFormSelectors';
import model from 'crud/modules/auth/userModel';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImagesFormItem from 'crud/view/shared/form/items/ImagesFormItem';
import SelectFormItem from 'crud/view/shared/form/items/SelectFormItem';
import InputFormItem from 'crud/view/shared/form/items/InputFormItem';
import ViewFormItem from 'crud/view/shared/form/items/ViewFormItem';
import Spinner from 'crud/view/shared/Spinner';
import FormWrapper from 'crud/view/shared/styles/FormWrapper';
import FormSchema from 'crud/view/shared/form/formSchema';
import ButtonIcon from 'crud/view/shared/ButtonIcon';

const { fields } = model;

class IamEditForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.email,
    fields.firstName,
    fields.lastName,
    fields.phoneNumber,
    fields.avatarsIam,
    fields.roles,
  ]);

  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  handleSubmit = (values) => {
    const { dispatch, user } = this.props;
    const data = {
      id: user.id,
      ...values,
    };
    delete data.email;
    dispatch(actions.doUpdate(data));
  };

  initialValues = () => {
    const user = this.props.user;
    return this.schema.initialValues(user);
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
                  name={fields.id.name}
                  label={fields.id.label}
                />

                <ViewFormItem
                  name={fields.email.name}
                  label={fields.email.label}
                />

                <InputFormItem
                  name={fields.firstName.name}
                  label={fields.firstName.label}
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
                  name={fields.avatarsIam.name}
                  label={fields.avatarsIam.label}
                  path={fields.avatarsIam.path}
                  width={fields.avatarsIam.width}
                  height={fields.avatarsIam.height}
                  schema={{
                    size: fields.avatarsIam.size,
                  }}
                  max={fields.avatarsIam.max}
                />

                <SelectFormItem
                  name={fields.roles.name}
                  label={fields.roles.label}
                  options={fields.roles.options}
                  mode="multiple"
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
    const { findLoading, user } = this.props;

    if (findLoading) {
      return <Spinner />;
    }

    if (!user) {
      return null;
    }

    return this.renderForm();
  }
}

function select(state) {
  return {
    findLoading: selectors.selectFindLoading(state),
    saveLoading: selectors.selectSaveLoading(state),
    user: selectors.selectUser(state),
  };
}

export default connect(select)(IamEditForm);
