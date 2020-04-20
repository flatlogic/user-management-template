import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormErrors from 'components/FormItems/formErrors';
import { FastField } from 'formik';
import Select from 'react-select';

class SelectFormItemNotFast extends Component {
  value = () => {
    const { form, name } = this.props;
    const options = this.props.schema[name].options;

    if (form.values[name]) {
      return options.find(
        (option) => option.value === form.values[name],
      );
    }
    return '';
  };

  handleSelect = (data) => {
    const { form, name } = this.props;
    form.setFieldTouched(name);

    if (!data) {
      form.setFieldValue(name, undefined);
      return;
    }

    form.setFieldValue(name, data.value);
  };

  render() {
    const {
      form,
      name,
      hint,
      errorMessage,
      required,
      mode,
      placeholder,
      isClearable,
    } = this.props;

    const { label, options } = this.props.schema[name];

    const isInvalid = !!FormErrors.displayableError(
      form,
      name,
      errorMessage,
    );

    const controlStyles = isInvalid
      ? {
          control: (provided) => ({
            ...provided,
            borderColor: 'red',
          }),
        }
      : undefined;

    return (
      <div className="form-group">
        {!!label && (
          <label
            className={`col-form-label ${
              required ? 'required' : null
            }`}
          >
            {label}
          </label>
        )}

        <br />

        <Select
          className="w-100"
          value={this.value()}
          onChange={this.handleSelect}
          id={name}
          name={name}
          options={options}
          isMulti={false}
          placeholder={placeholder || ''}
          isClearable={isClearable}
          styles={controlStyles}
          loadingMessage={() =>
            'Loading'
          }
          noOptionsMessage={() =>
            'No options'
          }
        />

        <div className="invalid-feedback">
          {FormErrors.displayableError(
            form,
            name,
            errorMessage,
          )}
        </div>

        {!!hint && (
          <small className="form-text text-muted">
            {hint}
          </small>
        )}
      </div>
    );
  }
}

SelectFormItemNotFast.defaultProps = {
  required: false,
  isClearable: true,
};

SelectFormItemNotFast.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  schema: PropTypes.object.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
  mode: PropTypes.string,
  isClearable: PropTypes.bool,
};

class SelectFormItem extends Component {
  render() {
    return (
      <FastField
        name={this.props.name}
        render={({ form }) => (
          <SelectFormItemNotFast
            {...this.props}
            form={form}
          />
        )}
      />
    );
  }
}

export default SelectFormItem;
