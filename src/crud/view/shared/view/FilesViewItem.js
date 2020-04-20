import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FilesUploader from 'components/FormItems/uploaders/FilesUploader';

class FilesViewItem extends Component {
  valueAsArray = () => {
    const { value } = this.props;

    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  };

  render() {
    if (!this.valueAsArray().length) {
      return null;
    }

    return (
      <div className="form-group">
        <label className="col-form-label">
          {this.props.label}
        </label>
        <br />
        <FilesUploader
          readonly
          value={this.valueAsArray()}
        />
      </div>
    );
  }
}

FilesViewItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
};

export default FilesViewItem;
