import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormErrors from 'view/shared/form/formErrors';
import { FastField } from 'formik';
import CreatableSelect from 'react-select/creatable';
import { i18n } from 'i18n';

class TagsFormItemNotFast extends Component {
  handleChange = (data) => {
    const { form, name } = this.props;

    form.setFieldTouched(name);

    if (!data || !data.length) {
      form.setFieldValue(name, undefined);
      return;
    }

    const commaSplittedValues = data
      .map((item) => item.value)
      .join(',')
      .split(',');

    form.setFieldValue(name, commaSplittedValues);
  };

  value = () => {
    const { form, name } = this.props;
    const value = form.values[name];

    if (!value || !value.length) {
      return [];
    }

    return value.map((item) => ({
      value: item,
      label: item,
    }));
  };

  render() {
    const {
      label,
      name,
      form,
      hint,
      errorMessage,
      required,
      placeholder,
      isClearable,
      notFoundContent,
    } = this.props;

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

        <CreatableSelect
          className="w-100"
          value={this.value()}
          onChange={this.handleChange}
          id={name}
          name={name}
          placeholder={placeholder || ''}
          isClearable={isClearable}
          styles={controlStyles}
          isMulti
          formatCreateLabel={(inputValue) => inputValue}
          loadingMessage={() =>
            i18n('autocomplete.loading')
          }
          noOptionsMessage={() => notFoundContent || ''}
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

TagsFormItemNotFast.defaultProps = {
  required: false,
  isClearable: true,
};

TagsFormItemNotFast.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
  mode: PropTypes.string,
  isClearable: PropTypes.bool,
  notFoundContent: PropTypes.string,
};

class TagsFormItem extends Component {
  render() {
    return (
      <FastField
        name={this.props.name}
        render={({ form }) => (
          <TagsFormItemNotFast
            {...this.props}
            form={form}
          />
        )}
      />
    );
  }
}

export default TagsFormItem;
