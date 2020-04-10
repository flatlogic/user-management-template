import React, { Component } from 'react';
import IamService from 'crud/modules/iam/iamService';
import IamNewFormModal from 'crud/view/iam/new/IamNewFormModal';
import { connect } from 'react-redux';
import selectors from 'crud/modules/iam/iamSelectors';
import AutocompleteFormItem from 'crud/view/shared/form/items/AutocompleteFormItem';

class UserAutocompleteFormItem extends Component {
  state = {
    modalVisible: false,
  };

  doCloseModal = () => {
    this.setState({
      modalVisible: false,
    });
  };

  doOpenModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  doCreateSuccess = (record) => {
    const { form, name, mode } = this.props;

    if (mode && mode === 'multiple') {
      form.setFieldValue(name, [
        ...(form.values[name] || []),
        record,
      ]);
    } else {
      form.setFieldValue(name, record);
    }

    this.doCloseModal();
  };

  fetchFn = (value, limit) => {
    return IamService.fetchUserAutocomplete(value, limit);
  };

  mapper = {
    toAutocomplete(originalValue) {
      if (!originalValue) {
        return undefined;
      }

      if (originalValue.fullName || originalValue.email) {
        let label = originalValue.email;

        if (originalValue.fullName) {
          label = `${originalValue.fullName} <${originalValue.email}>`;
        }

        return {
          value: originalValue.id,
          label,
        };
      }

      return {
        value: originalValue.id,
        label: originalValue.label,
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
    return (
      <React.Fragment>
        <AutocompleteFormItem
          {...this.props}
          fetchFn={this.fetchFn}
          mapper={this.mapper}
          onOpenModal={this.doOpenModal}
        />

        {this.state.modalVisible && (
          <IamNewFormModal
            visible={this.state.modalVisible}
            onClose={this.doCloseModal}
            onSuccess={this.doCreateSuccess}
          />
        )}
      </React.Fragment>
    );
  }
}

const select = (state) => ({
  hasPermissionToCreate: selectors.selectPermissionToCreate(
    state,
  ),
});

export default connect(select)(UserAutocompleteFormItem);
