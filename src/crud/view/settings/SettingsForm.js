import { Formik } from 'formik';
import actions from 'crud/modules/settings/settingsActions';
import model from 'crud/modules/settings/settingsModel';
import selectors from 'crud/modules/settings/settingsSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'crud/i18n';
import FormWrapper from 'crud/view/shared/styles/FormWrapper';
import Spinner from 'crud/view/shared/Spinner';
import FormSchema from 'crud/view/shared/form/formSchema';
import SelectFormItem from 'crud/view/shared/form/items/SelectFormItem';
import ButtonIcon from 'crud/view/shared/ButtonIcon';

const { fields } = model;

class SettingsForm extends Component {
  schema = new FormSchema(null, [fields.theme]);

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.doFind());
  }

  handleSubmit = (values) => {
    const { dispatch } = this.props;
    const { id, ...data } = this.schema.cast(values);
    dispatch(actions.doSave(data));
  };

  initialValues = () => {
    const settings = this.props.settings;
    return this.schema.initialValues(settings);
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
                <SelectFormItem
                  name={fields.theme.name}
                  label={fields.theme.label}
                  options={fields.theme.options.map(
                    (item) => ({
                      value: item.id,
                      label: item.label,
                    }),
                  )}
                  required={fields.theme.required}
                ></SelectFormItem>

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
                    disabled={saveLoading}
                    onClick={form.handleReset}
                    className="btn btn-light"
                    type="button"
                  >
                    <i className="fas fa-undo"></i>{' '}
                    {i18n('common.reset')}
                  </button>

                  {this.props.onCancel ? (
                    <button
                      disabled={saveLoading}
                      onClick={() => this.props.onCancel()}
                      className="btn btn-light"
                      type="button"
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
    const { findLoading, settings } = this.props;

    if (findLoading) {
      return <Spinner />;
    }

    if (!settings) {
      return <Spinner />;
    }

    return this.renderForm();
  }
}

function select(state) {
  return {
    findLoading: selectors.selectFindLoading(state),
    saveLoading: selectors.selectSaveLoading(state),
    settings: selectors.selectSettings(state),
  };
}

export default connect(select)(SettingsForm);
