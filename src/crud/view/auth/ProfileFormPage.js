import React, { Component } from 'react';
import ContentWrapper from 'crud/view/layout/styles/ContentWrapper';
import PageTitle from 'crud/view/shared/styles/PageTitle';
import ProfileForm from 'crud/view/auth/ProfileForm';
import { i18n } from 'crud/i18n';
import { getHistory } from 'crud/modules/store';

class ProfileFormPage extends Component {
  render() {
    return (
      <React.Fragment>
        <ContentWrapper>
          <PageTitle>
            {i18n('auth.profile.title')}
          </PageTitle>

          <ProfileForm
            onCancel={() => getHistory().push('/')}
          />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default ProfileFormPage;
