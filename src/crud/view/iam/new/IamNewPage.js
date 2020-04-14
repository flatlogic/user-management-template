import React, { Component } from 'react';
import ContentWrapper from 'crud/view/layout/styles/ContentWrapper';
import PageTitle from 'crud/view/shared/styles/PageTitle';
import IamNewForm from 'crud/view/iam/new/IamNewForm';
import actions from 'crud/modules/iam/form/iamFormActions';
import selectors from 'crud/modules/iam/form/iamFormSelectors';
import { i18n } from 'crud/i18n';
import { getHistory } from 'crud/modules/store';
import { connect } from 'react-redux';

class IamNewPage extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(actions.doNew());
  };

  doSubmit = (id, data) => {
    const { dispatch } = this.props;
    dispatch(actions.doAdd(data));
  };

  render() {
    return (
      <React.Fragment>
        <ContentWrapper>
          <PageTitle>{i18n('iam.new.title')}</PageTitle>

          <IamNewForm
            saveLoading={this.props.saveLoading}
            onSubmit={this.doSubmit}
            onCancel={() => getHistory().push('/iam')}
          />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    saveLoading: selectors.selectSaveLoading(state),
  };
}

export default connect(select)(IamNewPage);
