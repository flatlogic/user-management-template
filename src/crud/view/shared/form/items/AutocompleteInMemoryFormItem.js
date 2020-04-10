import { FastField } from 'formik';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FormErrors from 'crud/view/shared/form/formErrors';
import Select from 'react-select';
import { i18n } from 'crud/i18n';

class AutocompleteInMemoryFormItemNotFast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullDataSource: [],
      loading: false,
    };
  }

  async componentDidMount() {
    await this.fetchAllResults();
  }

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

  fetchAllResults = async () => {
    this.setState({ loading: true });

    try {
      const { fetchFn, mapper } = this.props;
      let fullDataSource = await fetchFn();
      fullDataSource = fullDataSource.map((data) =>
        mapper.toAutocomplete(data),
      );

      this.setState({ fullDataSource, loading: false });
    } catch (error) {
      console.error(error);
      this.setState({ fullDataSource: [], loading: false });

      return [];
    }
  };

  options = () => {
    const { mode } = this.props;
    const { fullDataSource: options } = this.state;

    if (!options) {
      return [];
    }

    // Includes the selected value on the options
    if (this.value()) {
      if (mode === 'multiple') {
        return [...this.value(), ...options];
      } else {
        return [this.value(), ...options];
      }
    }

    return options;
  };

  render() {
    const {
      form,
      label,
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

    const { loading } = this.state;

    const hintOrLoading = loading
      ? i18n('autocomplete.loading')
      : hint;

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
          <Select
            className="w-100"
            styles={controlStyles}
            id={name}
            name={name}
            isMulti={mode === 'multiple' ? true : false}
            placeholder={placeholder || ''}
            autoFocus={autoFocus || undefined}
            onChange={this.handleSelect}
            value={this.value()}
            isClearable={isClearable}
            options={this.options()}
            loadingMessage={() =>
              i18n('autocomplete.loading')
            }
            noOptionsMessage={() =>
              i18n('autocomplete.noOptions')
            }
            {...inputProps}
          />

          {this.props.showCreate &&
          this.props.hasPermissionToCreate ? (
            <button
              style={{ marginLeft: '16px' }}
              className="btn btn-primary"
              type="button"
              onClick={this.props.onOpenModal}
            >
              <i className="fas fa-plus"></i>
            </button>
          ) : null}
        </div>

        <div className="invalid-feedback">
          {FormErrors.displayableError(
            form,
            name,
            errorMessage,
          )}
        </div>
        {!!hintOrLoading && (
          <small className="form-text text-muted">
            {hintOrLoading}
          </small>
        )}
      </div>
    );
  }
}

AutocompleteInMemoryFormItemNotFast.defaultProps = {
  isClearable: true,
  mode: 'default',
  required: false,
};

AutocompleteInMemoryFormItemNotFast.propTypes = {
  form: PropTypes.object.isRequired,
  fetchFn: PropTypes.func.isRequired,
  mapper: PropTypes.object.isRequired,
  required: PropTypes.bool,
  mode: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
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

class AutocompleteInMemoryFormItem extends Component {
  render() {
    return (
      <FastField
        name={this.props.name}
        render={({ form }) => (
          <AutocompleteInMemoryFormItemNotFast
            {...this.props}
            form={form}
          />
        )}
      />
    );
  }
}

export default AutocompleteInMemoryFormItem;
