import React, { Component } from 'react';
import ((Name))View from 'components/CRUD/((Name))/view/((Name))View';
import actions from 'actions/((name))/((name))FormActions';
import { connect } from 'react-redux';

class ((Name))Page extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
          <((Name))View
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
  };
}

export default connect(mapStateToProps)(((Name))Page);
