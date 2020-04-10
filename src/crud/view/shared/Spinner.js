import React, { Component } from 'react';

class Spinner extends Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          margin: '24px',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }
}

export default Spinner;
