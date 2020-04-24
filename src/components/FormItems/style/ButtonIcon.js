import React, { Component } from 'react';

class ButtonIcon extends Component {
  render() {
    return this.props.loading ? (
      <span className="spinner-border spinner-border-sm"></span>
    ) : this.props.iconClass ? (
      <i className={this.props.iconClass} />
    ) : null;
  }
}

export default ButtonIcon;
