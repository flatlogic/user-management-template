import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Avatar from 'crud/view/shared/Avatar';

class ImagesListView extends Component {
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
    if (
      !this.valueAsArray().length ||
      !this.valueAsArray()[0].publicUrl
    ) {
      return <Avatar shape="square" size="large" />;
    }

    const src = this.valueAsArray()[0].publicUrl;
    return <Avatar shape="square" size="large" src={src} />;
  }
}

ImagesListView.propTypes = {
  src: PropTypes.any,
};

export default ImagesListView;
