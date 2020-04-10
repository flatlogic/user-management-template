import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormErrors from 'crud/view/shared/form/formErrors';
import { FastField } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export class DatePickerFormItemNotFast extends Component {
  render() {
    const {
      name,
      form,
      hint,
      size,
      placeholder,
      autoFocus,
      autoComplete,
      inputProps,
      errorMessage,
      required,
      showTimeInput,
    } = this.props;

    const { label } = this.props.schema[name];

    const sizeLabelClassName =
      {
        small: 'col-form-label-sm',
        large: 'col-form-label-lg',
      }[size] || '';

    const sizeInputClassName =
      {
        small: 'form-control-sm',
        large: 'form-control-lg',
      }[size] || '';

    return (
      <div className="form-group">
        {!!label && (
          <label
            className={`col-form-label ${
              required ? 'required' : null
            } ${sizeLabelClassName}`}
            htmlFor={name}
          >
            {label}
          </label>
        )}{' '}
        <br />
        <DatePicker
          id={name}
          className={`form-control ${sizeInputClassName} ${FormErrors.validateStatus(
            form,
            name,
            errorMessage,
          )}`}
          selected={form.values[name]}
          onChange={(value) => {
            form.setFieldValue(name, value);
            form.setFieldTouched(name);
          }}
          showTimeInput={showTimeInput}
          popperModifiers={{
            preventOverflow: {
              enabled: true,
              escapeWithReference: false,
            },
          }}
          placeholderText={placeholder || ''}
          autoFocus={autoFocus || undefined}
          autoComplete={autoComplete || undefined}
          dateFormat={
            showTimeInput
              ? 'yyyy-MM-dd HH:mm'
              : 'yyyy-MM-dd'
          }
          timeIntervals={15}
          {...inputProps}
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

DatePickerFormItemNotFast.defaultProps = {
  required: false,
};

DatePickerFormItemNotFast.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  size: PropTypes.string,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  inputProps: PropTypes.object,
};

class DatePickerFormItem extends Component {
  render() {
    return (
      <FastField
        name={this.props.name}
        render={({ form }) => (
          <DatePickerFormItemNotFast
            {...this.props}
            form={form}
          />
        )}
      />
    );
  }
}

export default DatePickerFormItem;
