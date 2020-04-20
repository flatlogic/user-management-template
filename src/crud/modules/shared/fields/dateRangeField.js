import GenericField from 'crud/modules/shared/fields/genericField';
import * as yup from 'yup';
import moment from 'moment';

export default class DateRangeField extends GenericField {
  forFilter() {
    return yup
      .array()
      .of(
        yup
          .mixed()
          .nullable(true)
          .label(this.label)
          .test(
            'is-date',
            'Invalid path',
            (value) => {
              if (!value) {
                return true;
              }

              return moment(value, 'YYYY-MM-DD').isValid();
            },
          )
          .transform((value) =>
            value
              ? moment(value).format('YYYY-MM-DD')
              : null,
          ),
      )
      .label(this.label);
  }

  forFormInitialValue(value) {
    if (!value || !value.length) {
      return [];
    }

    return value.map((item) =>
      item ? moment(item, 'YYYY-MM-DD').toDate() : null,
    );
  }
}
