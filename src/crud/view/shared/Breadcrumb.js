import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BreadcrumbNav = styled.nav`
  .breadcrumb {
    font-size: 16px;
    margin: 0px;
    padding: 0px;
    background-color: transparent;
  }

  .breadcrumb-item:not(.active) a {
    color: rgba(0, 0, 0, 0.45);
  }
`;

class Breadcrumb extends Component {
  isLink = (item) => {
    return item.length > 1;
  };

  render() {
    return (
      <BreadcrumbNav>
        <ol className="breadcrumb">
          {this.props.items.map((item, index) => (
            <li
              key={item[0]}
              className={`breadcrumb-item ${
                this.props.items.length - 1 === index
                  ? 'active'
                  : ''
              }`}
            >
              {this.isLink(item) ? (
                <Link to={item[1]}>{item[0]}</Link>
              ) : (
                item[0]
              )}
            </li>
          ))}
        </ol>
      </BreadcrumbNav>
    );
  }
}

export default Breadcrumb;
