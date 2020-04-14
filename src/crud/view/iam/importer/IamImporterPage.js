import React, { Component } from 'react';
import ContentWrapper from 'crud/view/layout/styles/ContentWrapper';
import PageTitle from 'crud/view/shared/styles/PageTitle';
import { i18n } from 'crud/i18n';
import importerHoc from 'crud/view/shared/importer/Importer';
import selectors from 'crud/modules/iam/importer/iamImporterSelectors';
import actions from 'crud/modules/iam/importer/iamImporterActions';
import fields from 'crud/modules/iam/importer/iamImporterFields';

const Importer = importerHoc(
  selectors,
  actions,
  fields,
  i18n('iam.importer.hint'),
);

class IamImportPage extends Component {
  render() {
    return (
      <React.Fragment>
        <ContentWrapper>
          <PageTitle>
            {i18n('iam.importer.title')}
          </PageTitle>
          <Importer />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default IamImportPage;
