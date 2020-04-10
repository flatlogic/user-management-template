import React, { Component } from 'react';
import Header from 'crud/view/layout/Header';
import LayoutWrapper from 'crud/view/layout/styles/LayoutWrapper';
import Menu from 'crud/view/layout/Menu';

class Layout extends Component {
  render() {
    return (
      <LayoutWrapper>
        <Menu url={this.props.match.url} />
        <div className="main">
          <Header />
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </LayoutWrapper>
    );
  }
}

export default Layout;
