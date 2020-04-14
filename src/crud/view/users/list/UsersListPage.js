import React, { Component } from 'react';
import UsersListTable from 'crud/view/users/list/UsersListTable';
import UsersListToolbar from 'crud/view/users/list/UsersListToolbar';
import ContentWrapper from 'crud/view/layout/styles/ContentWrapper';
import PageTitle from 'crud/view/shared/styles/PageTitle';
import { i18n } from 'crud/i18n';

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
