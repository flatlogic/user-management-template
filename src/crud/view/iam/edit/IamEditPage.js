import React, { Component } from 'react';
import ContentWrapper from 'crud/view/layout/styles/ContentWrapper';
import PageTitle from 'crud/view/shared/styles/PageTitle';
import Breadcrumb from 'crud/view/shared/Breadcrumb';
import IamEditForm from 'crud/view/iam/edit/IamEditForm';
import { i18n } from 'crud/i18n';
import { getHistory } from 'crud/modules/store';

class IamEditPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('iam.menu'), '/iam'],
            [i18n('iam.edit.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{i18n('iam.edit.title')}</PageTitle>

          <IamEditForm
            match={this.props.match}
            onCancel={() => getHistory().push('/iam')}
          />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default IamEditPage;
