import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FilesUploader from 'crud/view/shared/uploaders/FilesUploader';
import FormErrors from 'crud/view/shared/form/formErrors';
import { FastField } from 'formik';

class FilesFormItemNotFast extends Component {
  render() {
    const {
      name,
      form,
      hint,
      path,
      fileProps,
      max,
      inputProps,
      required,
    } = this.props;

    const { label } = this.props.schema[name];

    return (
      <div className="form-group">
        {!!label && (
          <label
            className={`col-form-label ${
              required ? 'required' : null
            }`}
            htmlFor={name}
          >
            {label}
          </label>
        )}

        <br />

        <FilesUploader
          path={path}
          schema={fileProps}
          value={form.values[name]}
          onChange={(value) => {
            form.setFieldValue(name, value);
            form.setFieldTouched(name);
          }}
          max={max}
          {...inputProps}
        />

        <div className="invalid-feedback">
          {FormErrors.displayableError(form, name)}
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

FilesFormItemNotFast.defaultProps = {
  max: undefined,
  required: false,
};

FilesFormItemNotFast.propTypes = {
  path: PropTypes.string.isRequired,
  required: PropTypes.bool,
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  hint: PropTypes.string,
  formItemProps: PropTypes.object,
  inputProps: PropTypes.object,
};

class FilesFormItem extends Component {
  render() {
    return (
      <FastField
        name={this.props.name}
        render={({ form }) => (
          <FilesFormItemNotFast
            {...this.props}
            form={form}
          />
        )}
      />
    );
  }
}

export default FilesFormItem;
