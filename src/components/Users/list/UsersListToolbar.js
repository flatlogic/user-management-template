import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ButtonIcon from 'crud/view/shared/ButtonIcon';
import Toolbar from 'crud/view/shared/styles/Toolbar';

class UsersToolbar extends Component {

  render() {
    return (
      <Toolbar>
          <Link to="/admin/users/new">
            <button
              className="btn btn-primary"
              type="button"
            >
              <ButtonIcon iconClass="la la-plus" />{' '}
              New
            </button>
          </Link>
      </Toolbar>
    );
  }
}

export default UsersToolbar;
