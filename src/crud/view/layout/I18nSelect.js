import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectors from 'crud/modules/layout/layoutSelectors';
import actions from 'crud/modules/layout/layoutActions';
import { getLanguages } from 'crud/i18n';

class I18nSelect extends Component {
  doChangeLanguage = (language) => {
    actions.doChangeLanguage(language);
  };

  render() {
    return (
      <select
        style={{ width: '100px', display: 'inline-block' }}
        className="form-control form-control-sm"
        value={this.props.language}
        onChange={(event) =>
          this.doChangeLanguage(event.target.value)
        }
      >
        {getLanguages().map((language) => (
          <option key={language.id} value={language.id}>
            {language.label}
          </option>
        ))}
      </select>
    );
  }
}

function select(state) {
  return {
    language: selectors.selectLanguage(state),
  };
}

export default connect(select)(I18nSelect);
