import React from 'react';
import _get from 'lodash/get';
import moment from 'moment';
import 'moment/locale/pt-br';
import { setLocale as setYupLocale } from 'yup';
import ptBR from 'crud/i18n/pt-BR';
import en from 'crud/i18n/en';
import {
  registerLocale,
  setDefaultLocale,
} from 'react-datepicker';
import dateFnsPtBr from 'date-fns/locale/pt-BR';

let currentLanguageCode = null;

const languages = {
  en: {
    id: 'en',
    label: 'English',
    flag: '/images/flags/24/United-States.png',
    dictionary: en,
    dateFns: undefined,
  },
  'pt-BR': {
    id: 'pt-BR',
    label: 'Português',
    flag: '/images/flags/24/Brazil.png',
    dictionary: ptBR,
    dateFns: dateFnsPtBr,
  },
};

function init() {
  currentLanguageCode =
    localStorage.getItem('language') || 'en';
  setLanguageCode(currentLanguageCode);
}

export function getLanguage() {
  return languages[getLanguageCode()];
}

function format(message, args) {
  if (!message) {
    return null;
  }

  try {
    return message.replace(/{(\d+)}/g, function(
      match,
      number,
    ) {
      return typeof args[number] != 'undefined'
        ? args[number]
        : match;
    });
  } catch (error) {
    console.error(message, error);
    throw error;
  }
}

export function getLanguages() {
  return Object.keys(languages).map((language) => {
    return languages[language];
  });
}

export function getLanguageCode() {
  if (!currentLanguageCode) {
    init();
  }

  return currentLanguageCode;
}

export function setLanguageCode(arg) {
  if (!languages[arg]) {
    throw new Error(`Invalid language ${arg}.`);
  }

  moment.locale(arg);
  localStorage.setItem('language', arg);

  if (getLanguage().dateFns) {
    registerLocale(arg, getLanguage().dateFns);
    setDefaultLocale(arg);
  }

  if (getLanguage().dictionary.validation) {
    setYupLocale(getLanguage().dictionary.validation);
  }
}

export function i18nExists(key) {
  const message = _get(getLanguage().dictionary, key);
  return !!message;
}

export function i18n(key, ...args) {
  const message = _get(getLanguage().dictionary, key);

  if (!message) {
    return key;
  }

  return format(message, args);
}

export function i18nHtml(key, ...args) {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: i18n(key, ...args),
      }}
    />
  );
}
