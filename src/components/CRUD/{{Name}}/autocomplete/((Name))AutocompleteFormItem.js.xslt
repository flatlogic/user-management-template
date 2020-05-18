<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:strip-space elements="*" />
<xsl:output method="text" />
<xsl:template match="/opt">
import axios from 'axios';
import React, { Component } from 'react';
import AutocompleteFormItem from 'components/FormItems/items/AutocompleteFormItem';
import { connect } from 'react-redux';

async function listAutocomplete(query, limit) {
  const params = { query, limit };
  const response = await axios.get(`/((name))/autocomplete`, { params });
  return response.data;
}

class ((Name))AutocompleteFormItem extends Component {
  fetchFn = (value, limit) => {
    return listAutocomplete(value, limit);
  };

  mapper = {
    toAutocomplete(originalValue) {
      if (!originalValue) {
        return undefined;
      }

      const value = originalValue.id;
      let label = originalValue.label ? originalValue.label : originalValue.<xsl:value-of select="./entities[@name='((name))']/@show_field" />;

      return {
        key: value,
        value,
        label,
      };
    },

    toValue(originalValue) {
      if (!originalValue) {
        return undefined;
      }

      return {
        id: originalValue.value,
        label: originalValue.label,
      };
    },
  };

  render() {
    const { form, ...rest } = this.props;

    return (
      <React.Fragment>
        <AutocompleteFormItem
          {...rest}
          fetchFn={this.fetchFn}
          mapper={this.mapper}
        />
      </React.Fragment>
    );
  }
}

const select = (state) => ({
  hasPermissionToCreate: state.((name)).hasPermissionToCreate
});

export default connect(select)(
  ((Name))AutocompleteFormItem,
);
</xsl:template>
</xsl:stylesheet>
