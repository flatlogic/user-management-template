import React, { Component } from 'react';
import Spinner from 'crud/view/shared/Spinner';
import ViewWrapper from 'crud/view/shared/styles/ViewWrapper';
import TextViewItem from 'crud/view/shared/view/TextViewItem';
import ImagesViewItem from 'crud/view/shared/view/ImagesViewItem';
import FilesViewItem from 'crud/view/shared/view/FilesViewItem';

class UsersView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={'First name'}
          value={record.firstName}
        />

        <TextViewItem
          label={'Last Name'}
          value={record.lastName}
        />

        <TextViewItem
          label={'Phone number'}
          value={record.phoneNumber}
        />

        <TextViewItem
          label={'Email'}
          value={record.email}
        />

        <TextViewItem
          label={'Disabled'}
          value={record.disabled}
        />

        <ImagesViewItem
          label={'Avatar'}
          value={record.avatar}
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
