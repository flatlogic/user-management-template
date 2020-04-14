import { Formik } from 'formik';
import { i18n } from 'crud/i18n';
import actions from 'crud/modules/iam/list/users/iamListUsersActions';
import selectors from 'crud/modules/iam/list/users/iamListUsersSelectors';
import model from 'crud/modules/auth/userModel';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SelectFormItem from 'crud/view/shared/form/items/SelectFormItem';
import InputFormItem from 'crud/view/shared/form/items/InputFormItem';
import FormFilterSchema from 'crud/view/shared/form/formFilterSchema';
import DatePickerRangeFormItem from 'crud/view/shared/form/items/DatePickerRangeFormItem';
import ButtonIcon from 'crud/view/shared/ButtonIcon';
import FilterWrapper from 'crud/view/shared/styles/FilterWrapper';

const { fields } = model;
const schema = new FormFilterSchema([
  fields.id,
  fields.fullName,
  fields.email,
  fields.role,
  fields.status,
  fields.createdAtRange,
]);

class IamFilter extends Component {
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
  };

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
                      <DatePickerRangeFormItem
                        name={fields.createdAtRange.name}
                        label={fields.createdAtRange.label}
                        showTimeInput
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.email.name}
                        label={fields.email.label}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name={fields.fullName.name}
                        label={fields.fullName.label}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name={fields.status.name}
                        label={fields.status.label}
                        options={fields.status.options.map(
                          (item) => ({
                            value: item.id,
                            label: item.label,
                          }),
                        )}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name={fields.role.name}
                        label={fields.role.label}
                        options={fields.role.options}
                      />
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

export default withRouter(connect(select)(IamFilter));
