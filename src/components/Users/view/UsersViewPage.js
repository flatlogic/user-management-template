import React, { Component } from 'react';
import PageTitle from 'crud/view/shared/styles/PageTitle';
import UsersView from 'components/Users/view/UsersView';
import actions from 'actions/usersViewActions';
import { connect } from 'react-redux';

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
    currentUser: store.auth.currentUser,
  };
}

export default connect(mapStateToProps)(UsersPage);
