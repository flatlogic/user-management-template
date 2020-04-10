import React, { Component } from 'react';
import ContentWrapper from 'crud/view/layout/styles/ContentWrapper';
import PageTitle from 'crud/view/shared/styles/PageTitle';
import Breadcrumb from 'crud/view/shared/Breadcrumb';
import IamView from 'crud/view/iam/view/IamView';
import { i18n } from 'crud/i18n';
import actions from 'crud/modules/iam/view/iamViewActions';
import { connect } from 'react-redux';
import iamSelectors from 'crud/modules/iam/iamSelectors';
import selectors from 'crud/modules/iam/view/iamViewSelectors';
import auditLogSelectors from 'crud/modules/auditLog/auditLogSelectors';
import IamViewToolbar from 'crud/view/iam/view/IamViewToolbar';

class IamViewPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('iam.menu'), '/iam'],
            [i18n('iam.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{i18n('iam.view.title')}</PageTitle>

          <IamViewToolbar match={this.props.match} />

          <IamView
            loading={this.props.loading}
            user={this.props.user}
          />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    loading: selectors.selectLoading(state),
    user: selectors.selectUser(state),
    hasPermissionToAuditLogs: auditLogSelectors.selectPermissionToRead(
      state,
    ),
    hasPermissionToEdit: iamSelectors.selectPermissionToEdit(
      state,
    ),
  };
}

export default connect(select)(IamViewPage);
