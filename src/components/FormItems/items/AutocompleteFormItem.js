import { FastField } from 'formik';
import { i18n } from 'crud/i18n';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FormErrors from 'components/FormItems/formErrors';
import AsyncSelect from 'react-select/async';

const AUTOCOMPLETE_SERVER_FETCH_SIZE = 100;

class AutocompleteFormItemNotFast extends Component {
  value = () => {
    const { mode } = this.props;
    if (mode === 'multiple') {
      return this.valueMultiple();
    } else {
      return this.valueOne();
    }
  };

  valueMultiple = () => {
    const { form, name, mapper } = this.props;

    if (form.values[name]) {
      return form.values[name].map((value) =>
        mapper.toAutocomplete(value),
      );
    }

    return [];
  };

  valueOne = () => {
    const { form, name, mapper } = this.props;

    if (form.values[name]) {
      return mapper.toAutocomplete(form.values[name]);
    }

    return '';
  };

  handleSelect = (value) => {
    const { form, name } = this.props;
    form.setFieldTouched(name);

    const { mode } = this.props;
    if (mode === 'multiple') {
      return this.handleSelectMultiple(value);
    } else {
      return this.handleSelectOne(value);
    }
  };

  handleSelectMultiple = (values) => {
    const { form, name, mapper } = this.props;

    if (!values) {
      form.setFieldValue(name, []);
      return;
    }

    form.setFieldValue(
      name,
      values.map((value) => mapper.toValue(value)),
    );
  };

  handleSelectOne = (value) => {
    const { form, name, mapper } = this.props;

    if (!value) {
      form.setFieldValue(name, '');
      return;
    }

    form.setFieldValue(name, mapper.toValue(value));
  };

  handleSearch = async (value) => {
    const { fetchFn, mapper } = this.props;

    try {
      const results = await fetchFn(
        value,
        AUTOCOMPLETE_SERVER_FETCH_SIZE,
      );

      return results.map((result) =>
        mapper.toAutocomplete(result),
      );
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  render() {
    const {
      form,
      name,
      hint,
      size,
      placeholder,
      autoFocus,
      inputProps,
      errorMessage,
      mode,
      required,
      isClearable,
    } = this.props;

    const { label } = this.props.schema[name];

    const sizeLabelClassName =
      {
        small: 'col-form-label-sm',
        large: 'col-form-label-lg',
      }[size] || '';

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
            } ${sizeLabelClassName}`}
            htmlFor={name}
          >
            {label}
          </label>
        )}
        <div style={{ display: 'flex' }}>
          <AsyncSelect
            className="w-100"
            styles={controlStyles}
            id={name}
            name={name}
            defaultOptions={true}
            isMulti={mode === 'multiple' ? true : false}
            loadOptions={this.handleSearch}
            placeholder={placeholder || ''}
            autoFocus={autoFocus || undefined}
            onChange={this.handleSelect}
            value={this.value()}
            isClearable={isClearable}
            loadingMessage={() =>
              i18n('autocomplete.loading')
            }
            noOptionsMessage={() =>
              i18n('autocomplete.noOptions')
            }
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

AutocompleteFormItemNotFast.defaultProps = {
  isClearable: true,
  mode: 'default',
  required: false,
};

AutocompleteFormItemNotFast.propTypes = {
  form: PropTypes.object.isRequired,
  fetchFn: PropTypes.func.isRequired,
  mapper: PropTypes.object.isRequired,
  required: PropTypes.bool,
  mode: PropTypes.string,
  name: PropTypes.string.isRequired,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  isClearable: PropTypes.bool,
  inputProps: PropTypes.object,
  showCreate: PropTypes.bool,
  hasPermissionToCreate: PropTypes.bool,
};

class AutocompleteFormItem extends Component {
  render() {
    return (
      <FastField
        name={this.props.name}
        render={({ form }) => (
          <AutocompleteFormItemNotFast
            {...this.props}
            form={form}
          />
        )}
      />
    );
  }
}

export default AutocompleteFormItem;
