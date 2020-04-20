import React, { Component } from 'react';
import UsersListTable from 'components/Users/list/UsersListTable';
import UsersListToolbar from 'components/Users/list/UsersListToolbar';

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
