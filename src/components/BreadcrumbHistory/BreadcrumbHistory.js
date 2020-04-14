import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import uuid from 'uuid/v4';
import {
  Link
} from "react-router-dom";

class BreadcrumbHistory extends Component {

  renderBreadCrumbs = () => {
    let url = this.props.url;
    let route = url.split('/')
    .slice(1)
    .map(route => route
      .split('-')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ')
    );
    const length = route.length;
    debugger;
    return route.map((item,index) => (
      length === index + 1 ?
      <BreadcrumbItem key={uuid()}><strong>{item}</strong></BreadcrumbItem> :
      <BreadcrumbItem key={uuid()}>{item}</BreadcrumbItem>
    ))
  }

  render() {
    return (
      <div>
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
          {this.renderBreadCrumbs()}
        </Breadcrumb>
      </div>
    )
  };
};

export default BreadcrumbHistory;
