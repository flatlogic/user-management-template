import GenericField from 'crud/modules/shared/fields/genericField';
import * as yup from 'yup';

export default class BooleanField extends GenericField {
  constructor(
    name,
    label,
    { yesLabel = undefined, noLabel = undefined } = {},
  ) {
    super(name, label);

    this.yesLabel = yesLabel || 'Yes';
    this.noLabel = noLabel || 'No';
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
