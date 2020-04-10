import moment from 'moment';
import * as yup from 'yup';

const formValidations = (fields, record={}) => {
	const yupArray = {};
	Object.keys(fields).forEach(field => {
		const type = fields[field].type;
		const label = fields[field].label;
		const required = fields[field].required;
		const value = record[field];
		let yupConds = {};
		switch(type) {
			case 'boolean':
    			yupConds = yup
			      .bool()
			      .default(false)
				  break;

			case 'date':
			    yupConds = yup
			      .mixed()
			      .nullable(true)
			      .test(
			        'is-date',
			        '',
			        (value) => {
			          if (!value) {
			            return true;
			          }
			          return moment(value, 'YYYY-MM-DD').isValid();
			        }
			      );
				break;

			case 'datetime':
			    yupConds = yup
			      .mixed()
			      .nullable(true)
				break;

			case 'decimal':
			    yupConds = yup
			      .number()
			      .nullable(true)
				break;

			case 'enum':
			    yupConds = yup
			      .string()
			      .nullable(true)
			    break;

			case 'files':
			    yupConds = yup
			      .array()
			      .compact()
			      .ensure()
			      .nullable(true)
				break;

			case 'images':
			    yupConds = yup
			      .array()
			      .nullable(true)
				break;

			case 'int':
			    yupConds = yup
			      .number()
			      .integer()
			      .nullable(true)
				break;

			case 'user_many':
			case 'relation_many':
			    yupConds = yup
			      .array()
			      .nullable(true)
				break;

			case 'user_one':
			case 'relation_one':
			    yupConds = yup
			      .mixed()
			      .nullable(true)
				break;

			case 'stringArray':
			    yupConds = yup
			      .array()
			      .compact()
			      .ensure()
			      .of(yup.string().trim())
			    break;

			case 'string':
			    yupConds = yup
			      .string()
			      .nullable(true)
			      .trim()
				break;

			default:
			    yupConds = yup
			      .string();
		}
	    yupConds = yupConds.label(label);
	    if (required) {
	      yupConds = yupConds.required();
	    }
      	yupArray[field] = yupConds;
	});
    return yup.object().shape(yupArray);
}

export default formValidations;

/*

date

    let yupConds = yup
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
      yupConds = yupConds.required();
    }

    return yupConds;


dateTime

    let yupConds = yup
      .mixed()
      .nullable(true)
      .label(this.label);

    if (this.required) {
      yupConds = yupConds.required();
    }

    return yupConds;


decimal

    let yupConds = yup
      .number()
      .nullable(true)
      .label(this.label);

    if (this.required) {
      yupConds = yupConds.required();
    }

    if (this.min || this.min === 0) {
      yupConds = yupConds.min(this.min);
    }

    if (this.max) {
      yupConds = yupConds.max(this.max);
    }

    return yupConds;
 


enumerator

   let yupConds = yup
      .string()
      .nullable(true)
      .label(this.label)
      .oneOf([
        null,
        ...this.options.map((option) => this._id(option)),
      ]);

    if (this.required) {
      yupConds = yupConds.required(
        i18n('validation.string.selected'),
      );
    }

    return yupConds;

files

    let yupConds = yup
      .array()
      .compact()
      .ensure()
      .nullable(true)
      .label(this.label);

    if (this.required || this.min) {
      yupConds = yupConds.required();
    }

    if (this.min || this.min === 0) {
      yupConds = yupConds.min(this.min);
    }

    if (this.max) {
      yupConds = yupConds.max(this.max);
    }

    return yupConds;

images

    let yupConds = yup
      .array()
      .nullable(true)
      .label(this.label);

    if (this.required || this.min) {
      yupConds = yupConds.required();
    }

    if (this.min || this.min === 0) {
      yupConds = yupConds.min(this.min);
    }

    if (this.max) {
      yupConds = yupConds.max(this.max);
    }

    return yupConds;

integer

    let yupConds = yup
      .number()
      .integer()
      .nullable(true)
      .label(this.label);

    if (this.required) {
      yupConds = yupConds.required();
    }

    if (this.min || this.min === 0) {
      yupConds = yupConds.min(this.min);
    }

    if (this.max) {
      yupConds = yupConds.max(this.max);
    }

    return yupConds;

relationToMany

    let yupConds = yup
      .array()
      .nullable(true)
      .label(this.label)
      .transform((value, originalValue) => {
        if (!originalValue || !originalValue.length) {
          return [];
        }

        return originalValue.map((item) => item.id);
      });

    if (this.required) {
      yupConds = yupConds.required();
    }

    if (this.min || this.min === 0) {
      yupConds = yupConds.min(this.min);
    }

    if (this.max) {
      yupConds = yupConds.max(this.max);
    }

    return yupConds;

relationToOne

    let yupConds = yup
      .mixed()
      .nullable(true)
      .label(this.label)
      .transform((value, originalValue) => {
        if (!originalValue) {
          return null;
        }

        return originalValue.id;
      });

    if (this.required) {
      yupConds = yupConds.required();
    }

    return yupConds;

stringArray

    let yupConds = yup
      .array()
      .compact()
      .ensure()
      .of(yup.string().trim())
      .label(this.label);

    if (this.required) {
      yupConds = yupConds.required();
    }

    if (this.min || this.min === 0) {
      yupConds = yupConds.min(this.min);
    }

    if (this.max) {
      yupConds = yupConds.max(this.max);
    }

    return yupConds;

string

    let yupConds = yup
      .string()
      .nullable(true)
      .trim()
      .label(this.label);

    if (this.required) {
      yupConds = yupConds.required();
    }

    if (this.min || this.min === 0) {
      yupConds = yupConds.min(this.min);
    }

    if (this.max) {
      yupConds = yupConds.max(this.max);
    }

    if (this.matches) {
      yupConds = yupConds.matches(/^[0-9]/);
    }

    return yupConds;


*/