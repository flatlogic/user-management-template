import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { i18n } from 'crud/i18n';
import Toolbar from 'crud/view/shared/styles/Toolbar';
import { connect } from 'react-redux';
import usersSelectors from 'crud/modules/users/usersSelectors';
import destroySelectors from 'crud/modules/users/destroy/usersDestroySelectors';
import destroyActions from 'crud/modules/users/destroy/usersDestroyActions';
import auditLogSelectors from 'crud/modules/auditLog/auditLogSelectors';
import ButtonIcon from 'crud/view/shared/ButtonIcon';

class UsersViewToolbar extends Component {
  state = {
    destroyConfirmVisible: false,
  };

  doOpenDestroyConfirmModal = () => {
    this.setState({
      destroyConfirmVisible: true,
    });
  };

  doCloseDestroyConfirmModal = () => {
    this.setState({ destroyConfirmVisible: false });
  };

  id = () => {
    return this.props.match.params.id;
  };

  doDestroy = () => {
    this.doCloseDestroyConfirmModal();
    const { dispatch } = this.props;
    dispatch(destroyActions.doDestroy(this.id()));
  };

  render() {
    const {
      hasPermissionToEdit,
      hasPermissionToAuditLogs,
      hasPermissionToDestroy,
      destroyLoading,
    } = this.props;

    return (
      <Toolbar>
        {hasPermissionToEdit && (
          <Link to={`/users/${this.id()}/edit`}>
            <button
              className="btn btn-primary"
              type="button"
            >
              <ButtonIcon iconClass="fas fa-edit" />{' '}
              {i18n('common.edit')}
            </button>
          </Link>
        )}

        {hasPermissionToDestroy && (
          <button
            className="btn btn-primary"
            type="button"
            disabled={destroyLoading}
            onClick={this.doOpenDestroyConfirmModal}
          >
            <ButtonIcon
              loading={destroyLoading}
              iconClass="fas fa-trash-alt"
            />{' '}
            {i18n('common.destroy')}
          </button>
        )}

        {hasPermissionToAuditLogs && (
          <Link
            to={`/audit-logs?entityId=${encodeURIComponent(
              this.id(),
            )}`}
          >
            <button className="btn btn-light" type="button">
              <ButtonIcon iconClass="fas fa-history" />{' '}
              {i18n('auditLog.menu')}
            </button>
          </Link>
        )}

      </Toolbar>
    );
  }
}

function select(state) {
  return {
    hasPermissionToAuditLogs: auditLogSelectors.selectPermissionToRead(
      state,
    ),
    hasPermissionToEdit: usersSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: usersSelectors.selectPermissionToDestroy(
      state,
    ),
    destroyLoading: destroySelectors.selectLoading(state),
  };
}

export default connect(select)(UsersViewToolbar);
