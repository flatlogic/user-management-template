<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:strip-space elements="*" />
<xsl:output method="text" />
<xsl:template match="/opt">
import React, { Component } from 'react';
import Loader from 'components/Loader';
import TextViewItem from 'components/FormItems/items/TextViewItem';
import ImagesViewItem from 'components/FormItems/items/ImagesViewItem';
import Widget from 'components/Widget';

class ((Name))View extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <Widget title={<h4>{'View User'}</h4>} collapse close>
        <ImagesViewItem
          label={'Avatar'}
          value={record.avatar}
        />

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

      </Widget>
    );
  }

  render() {
    const { record, loading } = this.props;

    if (loading || !record) {
      return <Loader />;
    }

    return this.renderView();
  }
}

export default ((Name))View;
</xsl:template>
</xsl:stylesheet>
