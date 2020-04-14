
import { Formik } from 'formik';
import { i18n } from 'crud/i18n';
import actions from 'crud/modules/users/list/usersListActions';
import selectors from 'crud/modules/users/list/usersListSelectors';
import model from 'crud/modules/users/usersModel';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FormFilterSchema from 'crud/view/shared/form/formFilterSchema';
import InputFormItem from 'crud/view/shared/form/items/InputFormItem';
import DatePickerRangeFormItem from 'crud/view/shared/form/items/DatePickerRangeFormItem';
import ButtonIcon from 'crud/view/shared/ButtonIcon';
import FilterWrapper from 'crud/view/shared/styles/FilterWrapper';
import InputRangeFormItem from 'crud/view/shared/form/items/InputRangeFormItem';
import InputNumberRangeFormItem from 'crud/view/shared/form/items/InputNumberRangeFormItem';
import UserAutocompleteFormItem from 'crud/view/iam/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'crud/view/shared/form/items/SelectFormItem';


const { fields } = model;

const schema = new FormFilterSchema([
  fields.id,

  fields.fullName,

  fields.firstName,

  fields.lastName,

  fields.phoneNumber,

  fields.email,

  fields.disabled,

  fields.password,

  fields.emailVerified,

  fields.emailVerificationToken,

  fields.emailVerificationTokenExpiresAtRange,

  fields.passwordResetToken,

  fields.passwordResetTokenExpiresAtRange,

]);

class UsersListFilter extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.doFetch(this.initialFilter()));
  }

  initialFilter = () => {
    return schema.initialValues(
      this.props.filter,
      this.props.location,
    );
  };

  handleSubmit = (values) => {
    const valuesToSubmit = schema.cast(values);
    const { dispatch } = this.props;
    dispatch(actions.doFetch(valuesToSubmit));
  };

  handleReset = (form) => {
    form.setValues({});
    const { dispatch } = this.props;
    dispatch(actions.doReset());
  };

  render() {
    return null;
  }

  _render() {
    const { loading } = this.props;

    return (
      <FilterWrapper>
        <Formik
          initialValues={this.initialFilter()}
          validationSchema={schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <form onSubmit={form.handleSubmit}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.id.name}
                        label={fields.id.label}
                      />
                    </div>

                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.fullName.name}
                        label={fields.fullName.label}
                      />
                    </div>

                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.firstName.name}
                        label={fields.firstName.label}
                      />
                    </div>

                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.lastName.name}
                        label={fields.lastName.label}
                      />
                    </div>

                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.phoneNumber.name}
                        label={fields.phoneNumber.label}
                      />
                    </div>

                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.email.name}
                        label={fields.email.label}
                      />
                    </div>

                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name={fields.disabled.name}
                        label={fields.disabled.label}
                        options={[
                          {
                            value: 'true',
                            label: fields.disabled.yesLabel,
                          },
                          {
                            value: 'false',
                            label: fields.disabled.noLabel,
                          },
                        ]}
                      />
                    </div>

                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.password.name}
                        label={fields.password.label}
                      />
                    </div>

                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name={fields.emailVerified.name}
                        label={fields.emailVerified.label}
                        options={[
                          {
                            value: 'true',
                            label: fields.emailVerified.yesLabel,
                          },
                          {
                            value: 'false',
                            label: fields.emailVerified.noLabel,
                          },
                        ]}
                      />
                    </div>

                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.emailVerificationToken.name}
                        label={fields.emailVerificationToken.label}
                      />
                    </div>

                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name={fields.emailVerificationTokenExpiresAtRange.name}
                        label={fields.emailVerificationTokenExpiresAtRange.label}
                        showTimeInput
                      />
                    </div>

                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.passwordResetToken.name}
                        label={fields.passwordResetToken.label}
                      />
                    </div>

                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name={fields.passwordResetTokenExpiresAtRange.name}
                        label={fields.passwordResetTokenExpiresAtRange.label}
                        showTimeInput
                      />
                    </div>

                  </div>
                </div>
                <div className="row">
                  <div className="col-12 filter-buttons">
                    <button
                      className="btn btn-primary"
                      type="submit"
                    >
                      <ButtonIcon
                        loading={loading}
                        iconClass="la la-search"
                      />{' '}
                      {i18n('common.search')}
                    </button>
                    <button
                      className="btn btn-light"
                      type="button"
                      onClick={() =>
                        this.handleReset(form)
                      }
                    >
                      <ButtonIcon
                        loading={loading}
                        iconClass="la la-undo"
                      />{' '}
                      {i18n('common.reset')}
                    </button>
                  </div>
                </div>
              </form>
            );
          }}
        />
      </FilterWrapper>
    );
  }
}

function select(state) {
  return {
    filter: selectors.selectFilter(state),
  };
}

export default withRouter(connect(select)(UsersListFilter));
