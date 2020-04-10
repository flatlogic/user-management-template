import Roles from 'crud/security/roles';
import model from 'crud/modules/auth/userModel';
import React, { Component } from 'react';
import Spinner from 'crud/view/shared/Spinner';
import ViewWrapper from 'crud/view/shared/styles/ViewWrapper';
import TextViewItem from 'crud/view/shared/view/TextViewItem';
import CustomViewItem from 'crud/view/shared/view/CustomViewItem';
import ImagesViewItem from 'crud/view/shared/view/ImagesViewItem';

const { fields } = model;

class IamView extends Component {
  renderView() {
    const { user } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(user.id)}
        />
        <TextViewItem
          label={fields.authenticationUid.label}
          value={fields.authenticationUid.forView(
            user.authenticationUid,
          )}
        />
        <TextViewItem
          label={fields.email.label}
          value={fields.email.forView(user.email)}
        />
        <TextViewItem
          label={fields.firstName.label}
          value={fields.firstName.forView(user.firstName)}
        />
        <TextViewItem
          label={fields.lastName.label}
          value={fields.lastName.forView(user.lastName)}
        />
        <TextViewItem
          label={fields.phoneNumber.label}
          value={fields.phoneNumber.forView(
            user.phoneNumber,
          )}
          prefix={'+'}
        />

        <ImagesViewItem
          label={fields.avatarsIam.label}
          value={user.avatars}
          type="images"
        />

        <CustomViewItem
          label={fields.disabledAsStatus.label}
          value={user.disabled}
          render={(disabled) => {
            const color = disabled
              ? 'badge-danger'
              : 'badge-success';
            return (
              <span className={`badge ${color}`}>
                {fields.disabled.forView(disabled)}
              </span>
            );
          }}
        />

        <CustomViewItem
          label={fields.roles.label}
          value={user.roles}
          render={(value) =>
            value.map((roleId) => (
              <div key={roleId}>
                <span>{Roles.labelOf(roleId)}</span>
              </div>
            ))
          }
        />

        <TextViewItem
          label={fields.createdAt.label}
          value={fields.createdAt.forView(user.createdAt)}
        />

        <TextViewItem
          label={fields.updatedAt.label}
          value={fields.updatedAt.forView(user.updatedAt)}
        />
      </ViewWrapper>
    );
  }

  render() {
    const { user, loading } = this.props;

    if (loading || !user) {
      return <Spinner />;
    }

    return this.renderView();
  }
}

export default IamView;
