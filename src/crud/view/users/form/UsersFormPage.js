import React, { Component } from 'react';
import ContentWrapper from 'crud/view/layout/styles/ContentWrapper';
import PageTitle from 'crud/view/shared/styles/PageTitle';
import UsersForm from 'crud/view/users/form/UsersForm';
import { getHistory } from 'crud/modules/store';
import actions from 'crud/modules/users/form/usersFormActions';
import selectors from 'crud/modules/users/form/usersFormSelectors';
import { connect } from 'react-redux';

class UsersFormPage extends Component {
  state = {
    dispatched: false,
  };

  componentDidMount() {
    const { dispatch, match } = this.props;
    if (this.isEditing()) {
      dispatch(actions.doFind(match.params.id));
    }
    else if(this.isProfile()) {
      const currentUser = JSON.parse(localStorage.getItem('user'));
      const currentUserId = currentUser.user.id;
      dispatch(actions.doFind(currentUserId));
    }
    else {
      dispatch(actions.doNew());
    }

    this.setState({ dispatched: true });
  }

  doSubmit = (id, data) => {
    const { dispatch } = this.props;
    if (this.isEditing() || this.isProfile()) {
      dispatch(actions.doUpdate(id, data));
    } else {
      dispatch(actions.doCreate(data));
    }
  };

  isEditing = () => {
    const { match } = this.props;
    return !!match.params.id;
  };

  isProfile = () => {
    const { match } = this.props;
    return match.url == '/app/profile';
  };

  title = () => {
    if(this.isProfile()) {
      return 'Edit My Profile';
    }

    return this.isEditing()
      ? 'Edit User'
      : 'Add User';
  };

  render() {
    return (
      <React.Fragment>
        <ContentWrapper>
          <PageTitle>{this.title()}</PageTitle>

          {this.state.dispatched && (
            <UsersForm
              saveLoading={this.props.saveLoading}
              findLoading={this.props.findLoading}
              record={
                (this.isEditing() || this.isProfile()) ? this.props.record : {}
              }
              isEditing={this.isEditing()}
              onSubmit={this.doSubmit}
              onCancel={() => getHistory().push('/app/users')}
            />
          )}
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    findLoading: selectors.selectFindLoading(state),
    saveLoading: selectors.selectSaveLoading(state),
    record: selectors.selectRecord(state),
  };
}

export default connect(select)(UsersFormPage);
