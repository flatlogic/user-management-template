import React, { Component } from 'react';
import ChangePasswordForm from 'components/CRUD/ChangePassword/ChangePasswordForm';
import { push } from 'connected-react-router';
import actions from 'actions/password';
import { connect } from 'react-redux';

class ChangePasswordFormPage extends Component {
  state = {
    dispatched: false,
  };

  doSubmit = (data) => {
    const { dispatch } = this.props;
    dispatch(actions.doChangePassword(data));
  };

  render() {
    return (
      <React.Fragment>
        <ChangePasswordForm
          saveLoading={this.props.saveLoading}
          findLoading={this.props.findLoading}
          onSubmit={this.doSubmit}
          onCancel={() => this.props.dispatch(push('/app/dashboard'))}
        />
      </React.Fragment>
    );
  }
}

function mapStateToProps(store) {
  return {
    findLoading: store.users.form.findLoading,
    saveLoading: store.users.form.saveLoading,
  };
}

export default connect(mapStateToProps)(ChangePasswordFormPage);
