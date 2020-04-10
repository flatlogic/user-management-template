import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { i18n } from 'crud/i18n';
import Toolbar from 'crud/view/shared/styles/Toolbar';
import actions from 'crud/modules/iam/view/iamViewActions';
import { connect } from 'react-redux';
import iamSelectors from 'crud/modules/iam/iamSelectors';
import selectors from 'crud/modules/iam/view/iamViewSelectors';
import auditLogSelectors from 'crud/modules/auditLog/auditLogSelectors';
import ButtonIcon from 'crud/view/shared/ButtonIcon';

class IamViewToolbar extends Component {
  state = {
    toggleStatusConfirmVisible: false,
  };

  doOpenToggleStatusConfirmModal = () => {
    this.setState({
      toggleStatusConfirmVisible: true,
    });
  };

  doCloseToggleStatusConfirmModal = () => {
    this.setState({ toggleStatusConfirmVisible: false });
  };

  doToggleStatus = () => {
    this.doCloseToggleStatusConfirmModal();
    const { dispatch } = this.props;
    dispatch(actions.doToggleStatus());
  };

  render() {
    const {
      match,
      user,
      hasPermissionToEdit,
      hasPermissionToAuditLogs,
      loading,
    } = this.props;

    const id = match.params.id;

    return (
      <Toolbar>
        {hasPermissionToEdit && (
          <Link to={`/iam/${id}/edit`}>
            <button
              className="btn btn-primary"
              type="button"
            >
              <ButtonIcon iconClass="fas fa-edit" />{' '}
              {i18n('common.edit')}
            </button>
          </Link>
        )}

        {user && hasPermissionToEdit && (
          <button
            className="btn btn-primary"
            type="button"
            disabled={loading}
            onClick={this.doOpenToggleStatusConfirmModal}
          >
            <ButtonIcon
              iconClass={
                user.disabled
                  ? 'fas fa-check'
                  : 'fas fa-ban'
              }
            />{' '}
            {user.disabled
              ? i18n('iam.enable')
              : i18n('iam.disable')}
          </button>
        )}

        {hasPermissionToAuditLogs && (
          <Link
            to={`/audit-logs?entityId=${encodeURIComponent(
              id,
            )}`}
          >
            <button className="btn btn-light" type="button">
              <ButtonIcon iconClass="fas fa-history" />{' '}
              {i18n('auditLog.menu')}
            </button>
          </Link>
        )}

        {user && user.email && hasPermissionToAuditLogs && (
          <Link
            to={`/audit-logs?createdByEmail=${encodeURIComponent(
              user.email,
            )}`}
          >
            <button className="btn btn-light" type="button">
              <ButtonIcon iconClass="far fa-eye" />{' '}
              {i18n('iam.view.activity')}
            </button>
          </Link>
        )}
      </Toolbar>
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

export default connect(select)(IamViewToolbar);
