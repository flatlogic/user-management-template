import GenericField from 'crud/modules/shared/fields/genericField';
import * as yup from 'yup';
import moment from 'moment';

export default class DateTimeField extends GenericField {
  constructor(name, label, { required = false } = {}) {
    super(name, label);

    this.required = required;
  }

  forView(value) {
    return value
      ? moment(value).format('YYYY-MM-DD HH:mm')
      : null;
  }

  forFormInitialValue(value) {
    return value ? moment(value).toDate() : null;
  }

  forFilter() {
    return yup.mixed().label(this.label);
  }

  forForm() {
    let yupChain = yup
      .mixed()
      .nullable(true)
      .label(this.label);

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
      .transform((value, originalValue) =>
        originalValue
          ? moment(
              originalValue,
              'YYYY-MM-DD HH:mm',
            ).toISOString()
          : null,
      );

    if (this.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  }
}
