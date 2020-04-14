import React, { Component } from 'react';
import ContentWrapper from 'crud/view/layout/styles/ContentWrapper';
import PageTitle from 'crud/view/shared/styles/PageTitle';
import { i18n } from 'crud/i18n';
import SettingsForm from 'crud/view/settings/SettingsForm';
import SettingsFormToolbar from 'crud/view/settings/SettingsFormToolbar';
import { getHistory } from 'crud/modules/store';

class SettingsFormPage extends Component {
  render() {
    return (
      <React.Fragment>
        <ContentWrapper>
          <PageTitle>{i18n('settings.title')}</PageTitle>

          <SettingsFormToolbar />

          <SettingsForm
            onCancel={() => getHistory().push('/')}
          />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default SettingsFormPage;
