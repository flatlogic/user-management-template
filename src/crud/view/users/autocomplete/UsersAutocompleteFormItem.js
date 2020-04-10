import React, { Component } from 'react';
import AutocompleteFormItem from 'crud/view/shared/form/items/AutocompleteFormItem';
import UsersService from 'crud/modules/users/usersService';
import UsersFormModal from 'crud/view/users/form/UsersFormModal';
import { connect } from 'react-redux';
import selectors from 'crud/modules/users/usersSelectors';

class UsersAutocompleteFormItem extends Component {
  fetchFn = (value, limit) => {
    return UsersService.listAutocomplete(value, limit);
  };

  mapper = {
    toAutocomplete(originalValue) {
      if (!originalValue) {
        return undefined;
      }

      const value = originalValue.id;
      let label = originalValue.label ? originalValue.label : originalValue.name;

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
  hasPermissionToCreate: selectors.selectPermissionToCreate(
    state,
  ),
});

export default connect(select)(
  UsersAutocompleteFormItem,
);
