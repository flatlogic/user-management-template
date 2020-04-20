import React, { Component } from 'react';
import PageTitle from 'crud/view/shared/styles/PageTitle';
import UsersView from 'crud/view/users/view/UsersView';
import actions from 'crud/modules/users/view/usersViewActions';
import { connect } from 'react-redux';
import selectors from 'crud/modules/users/view/usersViewSelectors';

class UsersPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
          <PageTitle>
            View users
          </PageTitle>

          <UsersView
            loading={this.props.loading}
            record={this.props.record}
          />
      </React.Fragment>
    );
  }
}

function mapStateToProps(store) {
  return {
    loading: store.users.form.loading,
    record: store.users.form.record,
    currentUser: store.authCrud.currentUser,    
  };
}

export default connect(mapStateToProps)(UsersPage);
