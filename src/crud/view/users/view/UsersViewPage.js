import React, { Component } from 'react';
import ContentWrapper from 'crud/view/layout/styles/ContentWrapper';
import PageTitle from 'crud/view/shared/styles/PageTitle';
import UsersView from 'crud/view/users/view/UsersView';
import { i18n } from 'crud/i18n';
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
        <ContentWrapper>
          <PageTitle>
            {i18n('entities.users.view.title')}
          </PageTitle>

          <UsersView
            loading={this.props.loading}
            record={this.props.record}
          />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    loading: selectors.selectLoading(state),
    record: selectors.selectRecord(state),
  };
}

export default connect(select)(UsersPage);
