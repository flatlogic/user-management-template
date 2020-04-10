import GenericField from 'crud/modules/shared/fields/genericField';
import * as yup from 'yup';
import moment from 'moment';
import { i18n } from 'crud/i18n';

export default class DateField extends GenericField {
  constructor(name, label, { required = false } = {}) {
    super(name, label);

    this.required = required;
  }

  forView(value) {
    return value;
  }

  forFormInitialValue(value) {
    return value
      ? moment(value, 'YYYY-MM-DD').toDate()
      : null;
  }

  forFilter() {
    return yup
      .mixed()
      .nullable(true)
      .label(this.label)
      .test(
        'is-date',
        i18n('validation.mixed.default'),
        (value) => {
          if (!value) {
            return true;
          }

          return moment(value, 'YYYY-MM-DD').isValid();
        },
      )
      .transform((value) =>
        value
          ? moment(value)
              .format('YYYY-MM-DD')
              .toDate()
          : null,
      );
  }

  forForm() {
    let yupChain = yup
      .mixed()
      .nullable(true)
      .label(this.label)
      .test(
        'is-date',
        i18n('validation.mixed.default'),
        (value) => {
          if (!value) {
            return true;
          }

          return moment(value, 'YYYY-MM-DD').isValid();
        },
      )
      .transform((value) =>
        value ? moment(value).format('YYYY-MM-DD') : null,
      );

    if (this.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  }

  forExport() {
    return yup.mixed().label(this.label);
  }

  forImport() {
    let yupChain = yup
      .mixed()
      .nullable(true)
      .label(this.label)
      .test(
        'is-date',
        i18n('validation.mixed.default'),
        (value) => {
          if (!value) {
            return true;
          }

          return moment(value, 'YYYY-MM-DD').isValid();
        },
      );

    if (this.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  }
}
