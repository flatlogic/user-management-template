import GenericField from 'crud/modules/shared/fields/genericField';
import * as yup from 'yup';

export default class DecimalField extends GenericField {
  constructor(
    name,
    label,
    {
      required = false,
      min = undefined,
      max = undefined,
      scale = undefined,
    } = {},
  ) {
    super(name, label);

    this.required = required;
    this.min = min;
    this.max = max;
    this.scale = scale;
  }

  forView(value) {
    if (!value) {
      return value;
    }

    if (this.scale === undefined || this.scale === null) {
      return value;
    }

    return Number(value).toFixed(this.scale);
  }

  forFormInitialValue(value) {
    return value;
  }

  forFilter() {
    return yup.number().label(this.label);
  }

  forForm() {
    let yupChain = yup
      .number()
      .nullable(true)
      .label(this.label);

    if (this.required) {
      yupChain = yupChain.required();
    }

    if (this.min || this.min === 0) {
      yupChain = yupChain.min(this.min);
    }

    if (this.max) {
      yupChain = yupChain.max(this.max);
    }

    return yupChain;
  }

  forExport() {
    return yup
      .mixed()
      .label(this.label)
      .transform((value) => this.forView(value));
  }

  forImport() {
    let yupChain = yup
      .number()
      .nullable(true)
      .label(this.label);

    if (this.required) {
      yupChain = yupChain.required();
    }

    if (this.min || this.min === 0) {
      yupChain = yupChain.min(this.min);
    }

    if (this.max) {
      yupChain = yupChain.max(this.max);
    }

    return yupChain;
  }
}
