import GenericField from 'crud/modules/shared/fields/genericField';
import * as yup from 'yup';
import { i18n } from 'crud/i18n';

export default class BooleanField extends GenericField {
  constructor(
    name,
    label,
    { yesLabel = undefined, noLabel = undefined } = {},
  ) {
    super(name, label);

    this.yesLabel = yesLabel || i18n('common.yes');
    this.noLabel = noLabel || i18n('common.no');
  }

  forView(value) {
    return value ? this.yesLabel : this.noLabel;
  }

  forFormInitialValue(value) {
    return value;
  }

  forForm() {
    let yupChain = yup
      .bool()
      .default(false)
      .label(this.label);
    return yupChain;
  }

  forFilter() {
    let yupChain = yup.bool().label(this.label);
    return yupChain;
  }

  forExport() {
    return yup
      .bool()
      .nullable(true)
      .default(false)
      .label(this.label);
  }

  forImport() {
    let yupChain = yup
      .bool()
      .default(false)
      .label(this.label);
    return yupChain;
  }
}
