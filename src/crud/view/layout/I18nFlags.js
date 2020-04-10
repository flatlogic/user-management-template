import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectors from 'crud/modules/layout/layoutSelectors';
import actions from 'crud/modules/layout/layoutActions';
import { getLanguages } from 'crud/i18n';
import I18nFlagsWrapper from 'crud/view/layout/styles/I18nFlagsWrapper';

class I18nFlags extends Component {
  doChangeLanguage = (language) => {
    actions.doChangeLanguage(language);
  };

  render() {
    return (
      <I18nFlagsWrapper>
        {getLanguages().map((language) => (
          <img
            key={language.id}
            alt={language.label}
            title={language.label}
            src={language.flag}
            onClick={() =>
              this.doChangeLanguage(language.id)
            }
          />
        ))}
      </I18nFlagsWrapper>
    );
  }
}

function select(state) {
  return {
    language: selectors.selectLanguage(state),
  };
}

export default connect(select)(I18nFlags);
