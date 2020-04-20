import React, { Component } from 'react';
import UsersListTable from 'crud/view/users/list/UsersListTable';
import UsersListToolbar from 'crud/view/users/list/UsersListToolbar';
import PageTitle from 'crud/view/shared/styles/PageTitle';

class UsersListPage extends Component {
  render() {
    return (
    	<div>
          <UsersListToolbar />
          <UsersListTable />
      	</div>
    );
  }
}

export default UsersListPage;
