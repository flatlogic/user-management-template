import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormErrors from 'components/FormItems/formErrors';
import { FastField } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class DatePickerRangeFormItemNotFast extends Component {
  handleStartChanged = (value) => {
    const { form, name } = this.props;
    form.setFieldTouched(name);
    form.setFieldValue(name, [value, this.endValue()]);
  };

  handleEndChanged = (value) => {
    const { form, name } = this.props;
    form.setFieldTouched(name);
    form.setFieldValue(name, [this.startValue(), value]);
  };

  value = () => {
    const { form, name } = this.props;
    return form.values[name];
  };

  startValue = () => {
    if (!this.value()) {
      return '';
    }

    if (Array.isArray(!this.value())) {
      return '';
    }

    if (!this.value().length) {
      return '';
    }

    return this.value()[0] || '';
  };

  endValue = () => {
    if (!this.value()) {
      return '';
    }

    if (Array.isArray(!this.value())) {
      return '';
    }

    if (this.value().length < 2) {
      return '';
    }

    return this.value()[1] || '';
  };

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
        )}
        <div
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            alignItems: 'baseline',
          }}
        >
          <DatePicker
            id={`${name}Start`}
            onChange={(value) =>
              this.handleStartChanged(value)
            }
            selected={this.startValue()}
            className={`form-control ${sizeInputClassName} ${FormErrors.validateStatus(
              form,
              name,
              errorMessage,
            )}`}
            showTimeInput={showTimeInput}
            popperModifiers={{
              preventOverflow: {
                enabled: true,
                escapeWithReference: false,
                boundariesElement: 'viewport',
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

          <div
            style={{
              flexShrink: 1,
              marginLeft: '8px',
              marginRight: '8px',
            }}
          >
            ~
          </div>

          <DatePicker
            id={`${name}End`}
            onChange={(value) =>
              this.handleEndChanged(value)
            }
            selected={this.endValue()}
            className={`form-control ${sizeInputClassName} ${FormErrors.validateStatus(
              form,
              name,
              errorMessage,
            )}`}
            showTimeInput={showTimeInput}
            placeholderText={placeholder || ''}
            autoFocus={autoFocus || undefined}
            autoComplete={autoComplete || undefined}
            dateFormat={
              showTimeInput
                ? 'yyyy-MM-dd HH:mm'
                : 'yyyy-MM-dd'
            }
            timeIntervals={15}
            popperModifiers={{
              preventOverflow: {
                enabled: true,
                escapeWithReference: false,
                boundariesElement: 'viewport',
              },
            }}
            {...inputProps}
          />
        </div>
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

DatePickerRangeFormItemNotFast.defaultProps = {
  required: false,
};

DatePickerRangeFormItemNotFast.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.string,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  formItemProps: PropTypes.object,
  inputProps: PropTypes.object,
};

class DatePickerRangeFormItem extends Component {
  render() {
    return (
      <FastField
        name={this.props.name}
        render={({ form }) => (
          <DatePickerRangeFormItemNotFast
            {...this.props}
            form={form}
          />
        )}
      />
    );
  }
}

export default DatePickerRangeFormItem;
