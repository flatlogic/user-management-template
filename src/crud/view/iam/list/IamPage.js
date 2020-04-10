import React, { Component } from 'react';
import IamFilter from 'crud/view/iam/list/IamFilter';
import IamTable from 'crud/view/iam/list/UsersSing';
import IamToolbar from 'crud/view/iam/list/IamToolbar';
import ContentWrapper from 'crud/view/layout/styles/ContentWrapper';
import PageTitle from 'crud/view/shared/styles/PageTitle';
import Breadcrumb from 'crud/view/shared/Breadcrumb';
import { i18n } from 'crud/i18n';

class IamPage extends Component {
  render() {
    return (
      <React.Fragment>
        <ContentWrapper>
          <PageTitle>{i18n('iam.title')}</PageTitle>

          <IamToolbar />
          <IamFilter />
          <IamTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default IamPage;
