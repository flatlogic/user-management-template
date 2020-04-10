
import model from 'crud/modules/users/usersModel';
import React, { Component } from 'react';
import Spinner from 'crud/view/shared/Spinner';
import ViewWrapper from 'crud/view/shared/styles/ViewWrapper';
import TextViewItem from 'crud/view/shared/view/TextViewItem';
import UserViewItem from 'crud/view/iam/view/UserViewItem';
import ImagesViewItem from 'crud/view/shared/view/ImagesViewItem';
import FilesViewItem from 'crud/view/shared/view/FilesViewItem';


const { fields } = model;

class UsersView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <TextViewItem
          label={fields.fullName.label}
          value={fields.fullName.forView(record.fullName)}
        />

        <TextViewItem
          label={fields.firstName.label}
          value={fields.firstName.forView(record.firstName)}
        />

        <TextViewItem
          label={fields.lastName.label}
          value={fields.lastName.forView(record.lastName)}
        />

        <TextViewItem
          label={fields.phoneNumber.label}
          value={fields.phoneNumber.forView(record.phoneNumber)}
        />

        <TextViewItem
          label={fields.email.label}
          value={fields.email.forView(record.email)}
        />

        <TextViewItem
          label={fields.disabled.label}
          value={fields.disabled.forView(record.disabled)}
        />

        <ImagesViewItem
          label={fields.avatar.label}
          value={fields.avatar.forView(record.avatar)}
        />

        <TextViewItem
          label={fields.password.label}
          value={fields.password.forView(record.password)}
        />

        <TextViewItem
          label={fields.emailVerified.label}
          value={fields.emailVerified.forView(record.emailVerified)}
        />

        <TextViewItem
          label={fields.emailVerificationToken.label}
          value={fields.emailVerificationToken.forView(record.emailVerificationToken)}
        />

        <TextViewItem
          label={fields.emailVerificationTokenExpiresAt.label}
          value={fields.emailVerificationTokenExpiresAt.forView(record.emailVerificationTokenExpiresAt)}
        />

        <TextViewItem
          label={fields.passwordResetToken.label}
          value={fields.passwordResetToken.forView(record.passwordResetToken)}
        />

        <TextViewItem
          label={fields.passwordResetTokenExpiresAt.label}
          value={fields.passwordResetTokenExpiresAt.forView(record.passwordResetTokenExpiresAt)}
        />

        <TextViewItem
          label={fields.createdAt.label}
          value={fields.createdAt.forView(record.createdAt)}
        />
        <TextViewItem
          label={fields.updatedAt.label}
          value={fields.updatedAt.forView(record.updatedAt)}
        />
      </ViewWrapper>
    );
  }

  render() {
    const { record, loading } = this.props;

    if (loading || !record) {
      return <Spinner />;
    }

    return this.renderView();
  }
}

export default UsersView;
