import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { i18n } from 'crud/i18n';
import Toolbar from 'crud/view/shared/styles/Toolbar';
import auditLogSelectors from 'crud/modules/auditLog/auditLogSelectors';
import { connect } from 'react-redux';
import ButtonIcon from 'crud/view/shared/ButtonIcon';

class SettingsFormToolbar extends Component {
  render() {
    return (
      <Toolbar style={{ marginBottom: '16px' }}>
        {this.props.hasPermissionToAuditLogs && (
          <Link to={`/audit-logs?entityNames=settings`}>
            <button className="btn btn-light" type="button">
              <ButtonIcon iconClass="la la-history" />{' '}
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
  };
}

export default connect(select)(SettingsFormToolbar);
