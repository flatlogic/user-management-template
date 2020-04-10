
import React, { Component } from 'react';
import Header from 'crud/view/layout/Header';
import LayoutWrapper from 'crud/view/layout/styles/LayoutWrapper';
import Menu from 'crud/view/layout/Menu';
import { Redirect, Route, Switch } from 'react-router-dom';
import CustomLoadable from 'crud/view/shared/CustomLoadable';

class LayoutFull extends Component {
  render() {
    return (
      <LayoutWrapper>
        <Menu url={this.props.match.url} />
        <div className="main">
          <Header />
          <div className="content">

			<Switch>
				 <Route path="/users" exact component={CustomLoadable({loader: () => import('view/users/list/UsersListPage')})} />
				 <Route path="/users/new" exact component={CustomLoadable({loader: () => import('view/users/form/UsersFormPage')})} />
			     <Route path="/users/:id/edit" exact component={CustomLoadable({loader: () => import('view/users/form/UsersFormPage')})} />
			     <Route path="/users/:id" exact component={CustomLoadable({loader: () => import('view/users/view/UsersViewPage')})} />
			</Switch>

          </div>
        </div>
      </LayoutWrapper>
    );
  }
}

export default LayoutFull;
