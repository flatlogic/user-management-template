import React, { Component } from 'react';
import Toolbar from 'crud/view/shared/styles/Toolbar';
import { connect } from 'react-redux';
import iamSelectors from 'crud/modules/iam/iamSelectors';
import selectors from 'crud/modules/iam/list/users/iamListUsersSelectors';
import auditLogSelectors from 'crud/modules/auditLog/auditLogSelectors';
import actions from 'crud/modules/iam/list/users/iamListUsersActions';
import { Link } from 'react-router-dom';
import { i18n } from 'crud/i18n';
import ButtonIcon from 'crud/view/shared/ButtonIcon';
import ReactTooltip from 'react-tooltip';

class IamToolbar extends Component {
  doExport = () => {
    const { dispatch } = this.props;
    dispatch(actions.doExport());
  };

  doRemoveAllSelected = () => {
    const { dispatch } = this.props;
    dispatch(actions.doRemoveAllSelected());
  };

  doDisableAllSelected = () => {
    const { dispatch } = this.props;
    dispatch(actions.doDisableAllSelected());
  };

  doEnableAllSelected = () => {
    const { dispatch } = this.props;
    dispatch(actions.doEnableAllSelected());
  };

  renderExportButton() {
    const { hasRows, loading, exportLoading } = this.props;

    const disabled = !hasRows || loading;

    const button = (
      <button
        className="btn btn-light"
        type="button"
        disabled={disabled}
        onClick={this.doExport}
      >
        <ButtonIcon
          loading={exportLoading}
          iconClass="far fa-file-excel"
        />{' '}
        {i18n('common.export')}
      </button>
    );

    if (disabled) {
      return (
        <span
          data-tip={i18n('common.noDataToExport')}
          data-tip-disable={!disabled}
          data-for="iam-users-toolbar-export-tooltip"
        >
          {button}
          <ReactTooltip id="iam-users-toolbar-export-tooltip" />
        </span>
      );
    }

    return button;
  }

  renderRemoveButton() {
    const {
      selectedKeys,
      loading,
      hasPermissionToEdit,
    } = this.props;

    if (!hasPermissionToEdit) {
      return null;
    }

    const disabled = !selectedKeys.length || loading;

    const button = (
      <button
        disabled={disabled}
        className="btn btn-primary"
        type="button"
        onClick={this.doRemoveAllSelected}
      >
        <ButtonIcon iconClass="fas fa-user-minus" />{' '}
        {i18n('common.remove')}
      </button>
    );

    if (disabled) {
      return (
        <span
          data-tip={i18n('common.mustSelectARow')}
          data-tip-disable={!disabled}
          data-for="iam-users-toolbar-remove-all-tooltip"
        >
          {button}
          <ReactTooltip id="iam-users-toolbar-remove-all-tooltip" />
        </span>
      );
    }

    return button;
  }

  renderEnableButton() {
    const {
      selectedKeys,
      loading,
      hasPermissionToEdit,
    } = this.props;

    if (!hasPermissionToEdit) {
      return null;
    }

    const disabled = !selectedKeys.length || loading;

    const button = (
      <button
        disabled={disabled}
        className="btn btn-primary"
        type="button"
        onClick={this.doEnableAllSelected}
      >
        <ButtonIcon iconClass="fas fa-check" />{' '}
        {i18n('iam.enable')}
      </button>
    );

    if (disabled) {
      return (
        <span
          data-tip={i18n('common.mustSelectARow')}
          data-tip-disable={!disabled}
          data-for="iam-users-toolbar-enable-all-tooltip"
        >
          {button}
          <ReactTooltip id="iam-users-toolbar-enable-all-tooltip" />
        </span>
      );
    }

    return button;
  }

  renderDisableButton() {
    const {
      selectedKeys,
      loading,
      hasPermissionToEdit,
    } = this.props;

    if (!hasPermissionToEdit) {
      return null;
    }

    const disabled = !selectedKeys.length || loading;

    const button = (
      <button
        disabled={disabled}
        className="btn btn-primary"
        type="button"
        onClick={this.doDisableAllSelected}
      >
        <ButtonIcon iconClass="fas fa-ban" />{' '}
        {i18n('iam.disable')}
      </button>
    );

    if (disabled) {
      return (
        <span
          data-tip={i18n('common.mustSelectARow')}
          data-tip-disable={!disabled}
          data-for="iam-users-toolbar-disable-all-tooltip"
        >
          {button}
          <ReactTooltip id="iam-users-toolbar-disable-all-tooltip" />
        </span>
      );
    }

    return button;
  }

  render() {
    return (
      <Toolbar>
        {this.props.hasPermissionToCreate && (
          <Link to="/iam/new">
            <button
              className="btn btn-primary"
              type="button"
            >
              <ButtonIcon iconClass="fas fa-user-plus" />{' '}
              {i18n('common.new')}
            </button>
          </Link>
        )}

        {this.props.hasPermissionToImport && (
          <Link to="/iam/importer">
            <button
              className="btn btn-primary"
              type="button"
            >
              <ButtonIcon iconClass="fas fa-upload" />{' '}
              {i18n('common.import')}
            </button>
          </Link>
        )}

        {this.renderRemoveButton()}
        {this.renderEnableButton()}
        {this.renderDisableButton()}

        {this.props.hasPermissionToAuditLogs && (
          <Link to="/audit-logs?entityNames=user">
            <button className="btn btn-light" type="button">
              <ButtonIcon iconClass="fas fa-history" />{' '}
              {i18n('auditLog.menu')}
            </button>
          </Link>
        )}

        {this.renderExportButton()}
      </Toolbar>
    );
  }
}

function select(state) {
  return {
    selectedKeys: selectors.selectSelectedKeys(state),
    loading: selectors.selectLoading(state),
    exportLoading: selectors.selectExportLoading(state),
    hasRows: selectors.selectHasRows(state),
    hasPermissionToAuditLogs: auditLogSelectors.selectPermissionToRead(
      state,
    ),
    hasPermissionToEdit: iamSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToCreate: iamSelectors.selectPermissionToCreate(
      state,
    ),
    hasPermissionToImport: iamSelectors.selectPermissionToImport(
      state,
    ),
  };
}

export default connect(select)(IamToolbar);
