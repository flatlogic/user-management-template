import PropTypes from 'prop-types';
import React, { Component } from 'react';

class CustomViewItem extends Component {
  isBlank() {
    return (
      (!this.props.value &&
        this.props.value !== 0 &&
        this.props.value !== false) ||
      (Array.isArray(this.props.value) &&
        !this.props.value.length)
    );
  }

  render() {
    if (this.isBlank()) {
      return null;
    }

    return (
      <div className="form-group">
        <label className="col-form-label">
          {this.props.label}
        </label>
        <br />
        {this.props.render(this.props.value)}
      </div>
    );
  }
}

CustomViewItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  render: PropTypes.func,
};

export default CustomViewItem;
